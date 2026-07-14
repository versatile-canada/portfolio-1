---
name: masonry
description: AI-powered image and video generation using the Masonry CLI. Generate images, videos, check job status, and manage media assets.
metadata:
  author: masonry-ai
  version: "1.0"
compatibility: Requires masonry CLI installed (curl -sSL https://media.masonry.so/cli/install.sh | sh)
allowed-tools: Bash(masonry:*)
---

# Masonry CLI

The `masonry` CLI provides AI-powered image and video generation capabilities.

## When to use this skill

Use this skill when the user wants to:
- Generate images from text prompts
- Generate videos from text prompts
- Check status of generation jobs
- Download generated media
- List available AI models
- View generation history

## Installation

If the masonry command is not available, install it:

```bash
curl -sSL https://media.masonry.so/cli/install.sh | sh
```

## Quick Commands

```bash
# Generate image
masonry image "your prompt here" --aspect 16:9

# Generate video
masonry video "your prompt here" --duration 4

# Wait and download generated media
masonry job wait <job-id> --download -o "$MASONRY_OUTPUT_DIR/output"

# Wait/download a batch
masonry job wait-many <job-id-1> <job-id-2> --download --download-dir "$MASONRY_OUTPUT_DIR/batch"

# Refresh model metadata only when the local skills are missing a key or params
masonry models list --type image --compact --refresh
masonry models params <model-key> --refresh
```

## Detailed Workflows

### Image Generation

```bash
# Basic generation
masonry image "a sunset over mountains, photorealistic"

# With options (override the default model only when you need higher fidelity)
masonry image "cyberpunk cityscape" --aspect 16:9 --model gemini-3-pro-image-preview

# Available flags
#   --aspect, -a     Aspect ratio (16:9, 9:16, 1:1)
#   --dimension, -d  Exact size (1920x1080)
#   --model, -m      Model key
#   --output, -o     Output path
#   --negative-prompt What to avoid
#   --seed           Reproducibility seed
```

### Video Generation

```bash
# Basic generation
masonry video "ocean waves crashing on rocks"

# With options
masonry video "drone shot of forest" --duration 6 --aspect 16:9

# Available flags
#   --duration       Per-clip length in seconds (4, 6, 8)
#   --aspect, -a     Aspect ratio (16:9, 9:16)
#   --model, -m      Model key
#   --image, -i      First frame image
#   --no-audio       Disable audio generation
```

### Longer Videos

`masonry video --duration` is a model clip length, not a complete project length. If the user asks for a longer video (for example 15 seconds), split the request into multiple clips, wait for and download each job, then stitch the clips into one final MP4 with ffmpeg.

Use the largest valid clip duration that stays under the remaining target duration, and make the last clip the closest valid duration. Trim the stitched output to the exact requested length:

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

When running inside the canvas agent, save the stitched file under `$MASONRY_OUTPUT_DIR` so the backend can place the final video on the canvas.

### Job Management

```bash
# List recent jobs
masonry job list

# One-shot diagnostic
masonry job status <job-id>

# Wait for completion and download
masonry job wait <job-id> --download -o "$MASONRY_OUTPUT_DIR/result.png"

# Wait for a batch without polling loops
masonry job wait-many <job-id-1> <job-id-2> --download --download-dir "$MASONRY_OUTPUT_DIR/batch"

# View local history
masonry history list
masonry history pending --sync
```

Do not loop on `sleep && masonry job status` and do not repeat
`masonry history pending --sync` just to watch a generation. Use `job wait` or
`job wait-many`; use status/history only for one-shot diagnosis or bookkeeping.

### Model Discovery

Use the shipped `masonry-models` skill first. It includes the current model
catalog and common parameter rules. The CLI also caches successful model metadata
locally, so repeated non-refresh calls are cheap.

```bash
# Cached list
masonry models list

# Cached filtered list
masonry models list --type video
masonry models list --type video --compact

# Cached model parameters
masonry models params veo-3.1-fast-generate-preview

# Force live refresh only when needed
masonry models list --type video --compact --refresh
masonry models params veo-3.1-fast-generate-preview --refresh
```

## Response Format

All commands return JSON:

```json
{
  "success": true,
  "job_id": "abc-123",
  "status": "pending",
  "check_after_seconds": 10,
  "check_command": "masonry job status abc-123"
}
```

## Authentication

If commands fail with auth errors:

1. Ask the user to open https://masonry.so/auth/cli/remote and copy the token
2. Run: `masonry login --token <TOKEN>`

The `masonry login --remote` command prints the auth URL for reference.

## Enhanced Project Skills

For project-specific skills with detailed workflows, run:

```bash
masonry skill install
```

This installs additional skills to `.claude/skills/`:
- `masonry-generate` - Detailed generation workflow
- `masonry-models` - Model exploration
- `masonry-jobs` - Job management
