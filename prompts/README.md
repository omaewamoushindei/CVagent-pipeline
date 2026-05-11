# Prompt Workflow

The `prompts/` folder contains the documented workflow steps used by the Agentic Resume Pipeline.

Each prompt file represents one controlled step in the process. The files are numbered to make the execution order explicit.

## Prompt Sequence

| Step | File | Purpose |
|---|---|---|
| 01 | `01_ingest_and_sort.md` | Parse raw career notes and structure them into the Career Vault |
| 02 | `02_cross_reference_gaps.md` | Identify missing evidence, weak claims, and unclear experience details |
| 03 | `03_create_master_cvs.md` | Create reusable Master CV drafts from the Career Vault |
| 04 | `04_check_master_cv_gaps.md` | Review the Master CV for clarity, impact, and evidence gaps |
| 05 | `05_jd_keyword_analysis.md` | Analyze a target job description for keywords, responsibilities, and requirements |
| 06A | `06A_test_tailoring.md` | Generate a structured tailoring plan (selection + outline) |
| 06B | `06B_test_tailoring.md` | Execute the plan and generate the tailored resume |
| 07 | `07_cover_letter_and_render.md` | Finalize the application package and run the rendering step |

Notes:

- Steps 06A and 06B are a paired tailoring workflow (plan → execution). Keep them together unless you intentionally replace the tailoring mechanism.
- `examples/` is the tracked synthetic demo area; `raw/`, `career_vault/`, and `applications/` are intended for local/private runs.


## Maintenance Rules

- Keep prompt filenames consistent with the README and PLAYBOOK.
- Update this file when adding, removing, or renaming prompt steps.
- Avoid embedding private personal data in prompt files.
- Prefer clear expected outputs over vague instructions.