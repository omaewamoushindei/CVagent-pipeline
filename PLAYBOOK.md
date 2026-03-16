# Playbook

This document is the operator guide for running the pipeline in sequence.

## Preconditions

- `raw/` contains your unstructured source material.
- `career_vault/` folder structure exists.
- `prompts/` contains `01` to `07` prompt files.
- `template_resume.md` and `resume.css` are present in the repository root.

## Execution Rules

1. Run prompts in numeric order.
2. Paste each prompt as-is into your IDE chat assistant.
3. Do not skip pauses where a prompt asks for permission or answers.
4. Do not accept invented metrics; provide verifiable values.
5. Save outputs to the exact file paths requested at each step.

## Phase A: Vault Build and Enrichment

### Step 1

Run `prompts/01_ingest_and_sort.md`.

Expected result:

- Raw notes are mapped into `career_vault/*`.
- Projects and experiences are split into separate files.
- Courses and skills are grouped into category files.

### Step 2

Run `prompts/02_cross_reference_gaps.md`.

Expected result:

- Up to five high-value evidence gaps are identified.
- You answer targeted questions.
- Updated markdown snippets are produced for specific vault files.

## Phase B: Master CV Foundation

### Step 3

Run `prompts/03_create_master_cvs.md`.

Expected result:

- Three strategy angles are proposed.
- You select one strategy.
- A full Master CV draft is produced in markdown.

Save to:

- `career_vault/mastercvs/<chosen_name>.md`

### Step 4

Run `prompts/04_check_master_cv_gaps.md`.

Expected result:

- Bullet-level QA feedback on impact and clarity.
- Follow-up questions for weak or non-quantified bullets.
- Updated Master CV markdown ready to overwrite.

## Phase C: Application-Specific Generation

Before Step 5, create:

- `applications/<Company_Name>/<Position_Name>/job_description.txt`

### Step 5

Run `prompts/05_jd_keyword_analysis.md`.

Expected result:

- Contextual intelligence brief (company, region, department).
- Keyword Frequency and Signal Table.

Save to:

- `applications/<Company_Name>/<Position_Name>/keyword_analysis.md`

### Step 6

Run `prompts/06_ab_test_tailoring.md`.

Expected result:

- Tailored CV Option 1 and Option 2 are evaluated.
- One winner is selected with justification.
- Winning markdown is output in template-compatible structure.

Save to:

- `applications/<Company_Name>/<Position_Name>/final_tailored_resume.md`

### Step 7

Run `prompts/07_cover_letter_and_render.md`.

Expected result:

- 3-paragraph cover letter aligned with contextual brief.
- Final QA checklist.
- Render command for PDF export.

Save to:

- `applications/<Company_Name>/<Position_Name>/cover_letter.md`

## Output Checklist

At completion, each application folder should contain:

- `job_description.txt`
- `keyword_analysis.md`
- `final_tailored_resume.md`
- `cover_letter.md`
- rendered PDF output