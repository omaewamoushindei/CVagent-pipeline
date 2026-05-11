# Playbook

This document is the operator guide for running the Agentic Resume Pipeline in sequence.

## Workspace Model (Important)

- `examples/` contains tracked, synthetic demo material (safe to commit).
- `raw/`, `career_vault/`, and `applications/` are local workspace folders for your private runs (do not commit personal data).

## Preconditions

- For a personal run: `raw/` contains your unstructured source material.
- Workspace folders `raw/`, `career_vault/`, and `applications/` exist.
- Step 01 populates `career_vault/` from the source material.
- `prompts/` contains the documented prompt sequence from `01` to `07`, including the paired `06A` / `06B` tailoring step.
- Resume template and CSS are in:
	- `templates/harvard.md`
	- `templates/resume.css`

For a demo run using tracked synthetic data, start from:

- `examples/synthetic-raw/sample.md`
- `examples/synthetic-job-description.txt`
- `examples/synthetic-career-vault/`
- `examples/sample-output/`

## Execution Rules

1. Run prompts in numeric order.
2. Paste each prompt as-is into your IDE chat assistant.
3. Do not skip pauses where a prompt asks for permission or answers.
4. Do not accept invented metrics; provide verifiable values.
5. Save outputs to the exact file paths requested at each step.

## Phase A: Vault Build and Enrichment

### Step 1
Run `prompts/01_ingest_and_sort.md`.
* **Expected result:** Raw notes are mapped into `career_vault/*`. Projects and experiences are split into separate files. Courses and skills are grouped into category files.

### Step 2
Run `prompts/02_cross_reference_gaps.md`.
* **Expected result:** High-value evidence gaps are identified. You answer targeted questions. Updated markdown snippets are produced for specific vault files.

## Phase B: Master CV Foundation

### Step 3
Run `prompts/03_create_master_cvs.md`.
* **Expected result:** The AI proposes different career strategy angles (e.g., Data, Backend, Leadership). You select the best angles, and the AI generates comprehensive Master CV drafts for your vault.
* **Save to:** `career_vault/mastercvs/<archetype_name>.md`

### Step 4
Run `prompts/04_check_master_cv_gaps.md`.
* **Expected result:** Bullet-level QA feedback on impact and clarity. Follow-up questions for weak or non-quantified bullets. Updated Master CV markdown ready to overwrite the drafts.

## Phase C: Application-Specific Generation

**Before Step 5, create:** `applications/<Company_Name>/<Position_Name>/job_description.txt`

### Step 5
Run `prompts/05_jd_keyword_analysis.md`.
* **Expected result:** Contextual intelligence brief (company, region, department) and a Keyword Frequency/Signal Table.
* **Save to:** `applications/<Company_Name>/<Position_Name>/keyword_analysis.md`

### Step 6
Run `prompts/06A_test_tailoring.md` then `prompts/06B_test_tailoring.md`.
* **Expected result:**
	* 06A proposes a structured tailoring plan (selection + outline) for the target role.
	* 06B generates the tailored CV from that plan using the canonical template.
* **Save to:** `applications/<Company_Name>/<Position_Name>/final_tailored_resume.md`

### Step 7
Run `prompts/07_cover_letter_and_render.md`.
* **Expected result:** A highly targeted cover letter aligned with the contextual brief, a final QA checklist, and the render command for PDF export.
* **Save to:** `applications/<Company_Name>/<Position_Name>/cover_letter.md`

Render commands:

- `node scripts/render_resume.mjs applications/<Company_Name>/<Position_Name>/final_tailored_resume.md`
- `node scripts/render_resume.mjs examples/sample-output/final_tailored_resume.md`

## Output Checklist

At completion, each application folder should contain:
- `job_description.txt`
- `keyword_analysis.md`
- `final_tailored_resume.md`
- `cover_letter.md`
- `qa_checklist.md`
- rendered PDF output (for example, `final_tailored_resume.pdf`)