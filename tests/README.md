# Tests

This folder contains benchmark material for checking whether prompt or workflow changes still produce reasonable outputs.

## Difference from `examples/`

- `examples/` contains a richer synthetic demo that shows the full workflow and sample outputs.
- `tests/benchmark/` contains smaller synthetic inputs used for repeatable testing and prompt comparison.

The benchmark files do not need to be realistic or impressive. They should remain stable so output changes can be compared over time.

## Files

| Path | Purpose |
|---|---|
| `benchmark/dummy_raw_notes.md` | Minimal synthetic career notes used as test input |
| `benchmark/dummy_job_description.txt` | Minimal synthetic job description used as test input |
| `EVALUATION_PROMPT.md` | Rubric for reviewing generated outputs |