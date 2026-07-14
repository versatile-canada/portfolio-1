---
name: masonry-jobs
description: Manage generation jobs - check status, download results, view history, sync pending jobs.
metadata:
  author: masonry-ai
  version: "1.0"
allowed-tools: Bash(masonry:*)
---

# Masonry Jobs Manager

Manage and monitor image/video generation jobs.

## When to use this skill

Use when the user wants to:
- Check job status
- Download generated content
- View generation history
- Wait for one or more generation jobs to complete

## Commands

### List Jobs
```bash
masonry job list
masonry job list --limit 20
```

### Check Status
```bash
masonry job status <job-id>
```

Use `job status` for a one-shot diagnostic only. Do not wrap it in `sleep`
loops, and do not repeat `masonry history pending --sync` just to watch progress.
Use `job wait` or `job wait-many` instead.

### Download Result
```bash
masonry job download <job-id> -o "$MASONRY_OUTPUT_DIR/output.png"
masonry job download <job-id> -o "$MASONRY_OUTPUT_DIR/output.mp4"
```

### Wait for Completion
```bash
masonry job wait <job-id>
masonry job wait <job-id> --download -o "$MASONRY_OUTPUT_DIR/result.png"
```

### Wait for Multiple Jobs
```bash
masonry job wait-many <job-id-1> <job-id-2> <job-id-3>
masonry job wait-many <job-id-1> <job-id-2> <job-id-3> \
  --download --download-dir "$MASONRY_OUTPUT_DIR/batch"
```

`wait-many` is the batch primitive. It avoids manual polling and downloads each
successful job into its own file under the output directory.

## Local History

```bash
# List recent generations
masonry history list
masonry history list --type image --limit 10

# One-shot local bookkeeping only, not a watch loop
masonry history pending

# Sync with server once if local history is stale
masonry history pending --sync

# Clear local history
masonry history clear
```

## Job Statuses

| Status | Description |
|--------|-------------|
| `pending` | Queued for processing |
| `running` | Currently generating |
| `succeeded` | Ready for download |
| `failed` | Generation failed |

## Response Formats

### Job List
```json
{
  "jobs": [
    {
      "id": "abc-123",
      "status": "succeeded",
      "model": "gemini-3.1-flash-image-preview",
      "type": "image"
    }
  ],
  "total": 100,
  "has_more": true
}
```

### Job Status
```json
{
  "success": true,
  "data": {
    "id": "abc-123",
    "status": "succeeded",
    "progress": 1
  }
}
```

### Download
```json
{
  "success": true,
  "job_id": "abc-123",
  "file": "$MASONRY_OUTPUT_DIR/output.png",
  "size_bytes": 1590262
}
```
