# Agentic Resume Pipeline

Local workflow for turning raw career notes into tailored resume outputs.

## What This Repo Contains

- `raw/`: unstructured career notes
- `career_vault/`: structured vault data
- `prompts/`: step-by-step prompt files (`01` to `07`)
- `template_resume.md` and `resume.css`: output format and styling
- `PLAYBOOK.md`: execution guide

## Workflow (Short)

1. Ingest and sort raw notes into `career_vault/`.
2. Cross-reference gaps and collect missing evidence.
3. Create and audit a Master CV.
4. Analyze target job description keywords/context.
5. Run A/B tailored CV generation and choose one.
6. Generate cover letter and render final files.

## Quick Start

1. Put source notes in `raw/`.
2. Run prompts in order from `prompts/01_ingest_and_sort.md` to `prompts/07_cover_letter_and_render.md`.
3. For each target role, create `applications/<Company_Name>/<Position_Name>/` and add `job_description.txt`.
4. Save generated outputs (`keyword_analysis.md`, `final_tailored_resume.md`, `cover_letter.md`) in that application folder.

## Notes

- Keep prompts in sequence.
- Provide real metrics; avoid assumptions.
- Review each generated output before saving.

## License

MIT License.