---
name: masonry-models
description: Explore available AI models for image and video generation. Discover capabilities, parameters, and compare options.
metadata:
  author: masonry-ai
  version: "1.0"
allowed-tools: Bash(masonry:*)
---

# Masonry Models Explorer

Explore and understand available AI models for media generation.

This skill is the local model catalog. Do **not** run `masonry models list` or
`masonry models params` just to rediscover stable metadata below. Use the catalog
first, then call the CLI only when:

- the user explicitly asks for the live catalog
- a model key is missing from this file
- a generation command rejects a parameter

When you do call the CLI for metadata, use `--refresh` once so the CLI bypasses
its local cache:

```bash
masonry models list --type image --compact --refresh
masonry models list --type video --compact --refresh
masonry models params <model-key> --refresh
```

## When to use this skill

Use when the user wants to:
- List available models
- Compare model capabilities
- Check model parameters
- Understand what models support

## Commands

### Cached list
```bash
masonry models list
```

### Cached list by type
```bash
masonry models list --type image
masonry models list --type video
masonry models list --type image --compact
masonry models list --type video --compact
```

### Cached model parameters
```bash
masonry models params <model-key>
```

Add `--refresh` only for explicit live lookup, missing keys, or rejected params.

## Current Image Catalog

| CLI key | Friendly name | Capabilities | References |
|---|---|---|---|
| `gemini-3.1-flash-image-preview` | Nano Banana 2 | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 6 |
| `gpt-image-2` | GPT Image 2 | text-to-image, inpaint | up to 10 |
| `seedream-4-5` | Seedream 4.5 | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 14 |
| `gemini-2.5-flash-image` | Nano Banana | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 3 |
| `flux-2-pro` | Flux 2 Pro | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 8 |
| `grok-imagine-image-edit` | Grok Imagine Image Edit | image edit | up to 3 |
| `gemini-3-pro-image-preview` | Gemini 3 Pro Image | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 14 |
| `ideogram-v4` | Ideogram v4 | text-to-image | no references |
| `gpt-image-1.5` | GPT Image 1.5 | text-to-image, inpaint | up to 10 |
| `crystal-upscaler` | Crystal Upscaler | upscale | up to 1 |
| `qwen-image-edit-plus` | Qwen Image Edit Plus | image edit | up to 4 |
| `seedream-4` | Seedream 4 | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 10 |
| `flux-1.1-pro` | Flux 1.1 Pro | text-to-image | no references |
| `ideogram-v3-quality` | Ideogram v3 Quality | text-to-image, image edit | up to 1 |
| `ideogram-v3-turbo` | Ideogram v3 Turbo | text-to-image, image edit | up to 1 |
| `qwen-image-layered` | Qwen Image Layered | layered edit | up to 1 |
| `flux-kontext-max` | Flux Kontext Max | image edit | up to 1 |
| `flux-2-dev` | Flux 2 Dev | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 4 |
| `flux-2-flex` | Flux 2 Flex | text-to-image, image-mix, inpaint, outpaint, style-transfer | up to 10 |
| `flux-2-klein-4b-base` | Flux 2 Klein 4B Base | text-to-image, image-mix | up to 5 |
| `flux-2-klein-9b-base` | Flux 2 Klein 9B Base | text-to-image, image-mix | up to 5 |
| `grok-imagine-image` | Grok Imagine Image | text-to-image | no references |
| `imagen-4.0-generate-001` | Imagen 4 | text-to-image | no references |
| `qwen-image` | Qwen Image | text-to-image | no references |

## Current Video Catalog

| CLI key | Friendly name | Capabilities | References |
|---|---|---|---|
| `kling-v3-pro` | Kling 3.0 Pro | text-to-video, image-to-video | up to 2 |
| `seedance-1-5-pro` | Seedance 1.5 Pro | text-to-video, image-to-video | up to 2 |
| `kling-v2-1-standard` | Kling v2.1 Standard | image-to-video | up to 2 |
| `veo-3.1-fast-generate-preview` | Veo 3.1 Fast | text-to-video, image-to-video | up to 5 |
| `wan-2.5-i2v` | Wan 2.5 | image-to-video | up to 1 |
| `kling-v3-standard` | Kling 3.0 Standard | text-to-video, image-to-video | up to 2 |
| `seedance-1-lite` | Seedance 1.0 Lite | text-to-video, image-to-video | up to 2 |
| `veo-3.1-generate-preview` | Veo 3.1 | text-to-video, image-to-video | up to 5 |
| `kling-v2-6-pro-i2v` | Kling v2.6 Pro | image-to-video | up to 1 |
| `minimax-hailuo-02` | Hailuo 02 | text-to-video, image-to-video | up to 2 |
| `seedance-1-pro` | Seedance 1.0 Pro | text-to-video, image-to-video | up to 2 |
| `kling-v2-1-pro` | Kling v2.1 Pro | image-to-video | up to 2 |
| `kling-v2-5-turbo-pro` | Kling v2.5 Turbo Pro | image-to-video | up to 1 |
| `grok-imagine-video-1-5-i2v` | Grok Imagine Video 1.5 | image-to-video | up to 1 |
| `kling-lipsync` | Kling LipSync | lip-sync | source video/audio |
| `kling-o1-i2v` | Kling O1 | image-to-video | up to 2 |
| `omnihuman-v1-5` | OmniHuman v1.5 | portrait animation | up to 1 |
| `seedance-2-0` | Seedance 2.0 | text-to-video, image-to-video | up to 2 |
| `seedance-2-0-fast` | Seedance 2.0 Fast | text-to-video, image-to-video | up to 2 |
| `veo-3.0-generate-001` | Veo 3 | text-to-video | up to 1 |
| `veo-3.0-fast-generate-001` | Veo 3 Fast | text-to-video, image-to-video | up to 1 |
| `veo-3.1-lite-generate-preview` | Veo 3.1 Lite | text-to-video, image-to-video | up to 5 |
| `gemini-omni-flash-preview` | Gemini Omni Flash | text-to-video, image-to-video | up to 1 |

## Common Parameter Rules

- Image default: `gemini-3.1-flash-image-preview` / Nano Banana 2.
- Video default: `veo-3.1-fast-generate-preview` / Veo 3.1 Fast.
- Common image aspects: `16:9`, `9:16`, `1:1`.
- Veo clip durations: `4`, `6`, `8`.
- Kling v2.x clip durations: `5`, `10`.
- Kling v3 clip durations: `3` through `15`.
- Spoken/dialogue video should route to Veo 3.1/Fast, not Kling.
- Real product/person preservation should pass reference media instead of
  regenerating from text.

## Model Capabilities

| Capability | Description |
|------------|-------------|
| `text_to_image` | Generate image from text prompt |
| `image_to_image` | Transform existing image |
| `text_to_video` | Generate video from text prompt |
| `image_to_video` | Animate image into video |

## Response Formats

### Model List
```json
{
  "success": true,
  "data": {
    "image_models": [
      {
        "key": "gemini-3.1-flash-image-preview",
        "name": "Nano Banana 2",
        "provider": "Google",
        "capabilities": ["text_to_image", "image_mix"]
      }
    ],
    "video_models": [...]
  }
}
```

### Model Parameters
```json
{
  "success": true,
  "data": {
    "model": "veo-3.1-fast-generate-preview",
    "flags": [
      {
        "flag": "--duration",
        "type": "integer",
        "default": 8,
        "values": ["4", "6", "8"]
      }
    ]
  }
}
```

## Common Models

**Image:**
- `gemini-3.1-flash-image-preview` - Nano Banana 2 (default)
- `gemini-3-pro-image-preview` - Gemini 3 Pro Image
- `gpt-image-2` - GPT Image 2

**Video:**
- `veo-3.1-fast-generate-preview` - Google Veo 3.1 Fast (default)
- `veo-3.1-generate-preview` - Google Veo 3.1 (higher quality)
