---
name: masonry-generate
description: Generate images or videos using the Masonry CLI with detailed workflow guidance.
metadata:
  author: masonry-ai
  version: "1.0"
allowed-tools: Bash(masonry:*)
---

# Masonry Media Generation

Generate AI-powered images and videos with detailed workflow guidance.

## When to use this skill

Use when the user explicitly wants to generate images or videos and needs:
- Prompt crafting assistance
- Model selection guidance
- Parameter optimization
- Full generation-to-download workflow

## Workflow

### 1. Understand the Request

Parse the user's request to determine:
- **Type**: image or video
- **Subject/scene**: The core content to generate
- **Style**: Any artistic or visual preferences
- **Aspect ratio**: 16:9 (landscape), 9:16 (portrait), 1:1 (square)
- **Duration**: For video only (4, 6, or 8 seconds)

### 2. Select Model

Use the shipped `masonry-models` catalog first. It contains the current image
and video model keys, common capabilities, and duration rules, so do not run
`masonry models list` or `masonry models params` just to rediscover stable
metadata.

**Image default:** `gemini-3.1-flash-image-preview` (Nano Banana 2)

**Video default:** `veo-3.1-fast-generate-preview`

Refresh model metadata only when the user explicitly asks for the live catalog,
a key is missing from the skill, or the CLI rejects a parameter:

```bash
masonry models list --type image --compact --refresh
masonry models list --type video --compact --refresh
masonry models params <model-key> --refresh
```

### 3. Craft the Prompt

Good prompts include:
- Subject description
- Style/aesthetic
- Lighting conditions
- Camera angle (for video)
- Mood/atmosphere

Example: "A majestic lion in golden hour lighting, cinematic style, shallow depth of field"

### 4. Generate Content

**Image:**
```bash
masonry image "your detailed prompt" --aspect 16:9
```

**Video:**
```bash
masonry video "your detailed prompt" --duration 4 --aspect 16:9
```

For requested videos longer than one model clip, generate multiple clips and stitch them. `--duration` is a per-clip model value (4, 6, or 8 seconds), not the total project length. For a 15-second video, create enough clip jobs to cover the target, download them, concatenate with ffmpeg, and trim the final output to 15 seconds.

```bash
mkdir -p clips
masonry video "clip 1 prompt..." --duration 6 --aspect 16:9
masonry job wait <job-id-1> --download -o clips/01.mp4
masonry video "clip 2 prompt..." --duration 6 --aspect 16:9
masonry job wait <job-id-2> --download -o clips/02.mp4
masonry video "clip 3 prompt..." --duration 4 --aspect 16:9
masonry job wait <job-id-3> --download -o clips/03.mp4
printf "file '%s'\n" "$PWD"/clips/01.mp4 "$PWD"/clips/02.mp4 "$PWD"/clips/03.mp4 > clips/concat.txt
ffmpeg -y -f concat -safe 0 -i clips/concat.txt -t 15 -c:v libx264 -c:a aac -pix_fmt yuv420p "$MASONRY_OUTPUT_DIR/final-video.mp4"
```

On the canvas agent, save stitched videos under `$MASONRY_OUTPUT_DIR` so they are returned to the canvas.

### 5. Handle Response

The CLI returns immediately with job info:
```json
{
  "success": true,
  "job_id": "abc-123",
  "status": "pending",
  "check_after_seconds": 10
}
```

### 6. Wait and Download

```bash
# Wait and auto-download (preferred — one command, no polling)
masonry job wait <job-id> --download -o "$MASONRY_OUTPUT_DIR/my-image.png"

# For batches, wait/download all submitted jobs without sleep/status loops
masonry job wait-many <job-id-1> <job-id-2> <job-id-3> \
  --download --download-dir "$MASONRY_OUTPUT_DIR/batch"

# One-shot diagnostics only:
masonry job status <job-id>
masonry job download <job-id> -o "$MASONRY_OUTPUT_DIR/my-image.png"
```

### 7. Deliver to the User

On canvas, saving the file under `$MASONRY_OUTPUT_DIR` delivers it automatically.
On Slack, attach it after saving:

```bash
masonry attach "$MASONRY_OUTPUT_DIR/my-image.png"
```

For Slack, `masonry attach` works for any file (CLI-generated, ffmpeg-stitched,
agent-written). For multiple related files, pass them in one command:

```bash
masonry attach "$MASONRY_OUTPUT_DIR/hero.png" "$MASONRY_OUTPUT_DIR/variant.png"
```

On Slack, the receipt is JSON — refer to the delivered filename in your reply.
On canvas, refer only to the saved filename.

## Parameter Reference

### Image Flags
| Flag | Description | Values |
|------|-------------|--------|
| `--aspect`, `-a` | Aspect ratio | 16:9, 9:16, 1:1 |
| `--dimension`, `-d` | Exact size | 1920x1080 |
| `--model`, `-m` | Model key | gemini-3.1-flash-image-preview |
| `--output`, `-o` | Output path | ./image.png |
| `--negative-prompt` | What to avoid | "blurry, low quality" |
| `--seed` | Reproducibility | 12345 |

### Video Flags
| Flag | Description | Values |
|------|-------------|--------|
| `--duration` | Per-clip length (seconds) | 4, 6, 8 |
| `--aspect`, `-a` | Aspect ratio | 16:9, 9:16 |
| `--model`, `-m` | Model key | veo-3.1-fast-generate-preview |
| `--image`, `-i` | First frame | ./start.png |
| `--no-audio` | Disable audio | (flag) |

## Error Handling

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "aspect \"invalid\" is invalid; valid values: 16:9, 9:16, 1:1"
  }
}
```

Common codes:
- `VALIDATION_ERROR` - Invalid parameter
- `MODEL_NOT_FOUND` - Unknown model
- `AUTH_ERROR` - Run `masonry login`
