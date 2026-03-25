Act as a Corporate Communications Director.

Task:
Finalize the application package using the already-created Winning Tailored CV.

Non-negotiable constraints
- Use ONLY: (1) the Winning Tailored CV (`final_tailored_resume.md`), (2) the Contextual Intelligence Brief inside `keyword_analysis.md`, and (3) the Job Description keywords.
- Do NOT invent or infer missing personal details.
- CRITICAL PLACEHOLDER RULE: If the Winning CV contains personal information placeholders (e.g., `[Your Name]`, `[Phone Number]`, `[Email]`), keep them intact; do NOT fail the QA for these. However, if it contains structural/content placeholders (e.g., `[Skill 1]`, `[Project Name]`), you MUST mark QA as FAIL.
- Do NOT modify `final_tailored_resume.md` in any way.
- Do NOT open or read `csstemplate_resume.md`, `resume.css`, or any other resume files.
- Do NOT paste long artifacts into chat. Write deliverables directly into the correct `applications/.../` folder.

Step 0 — Resolve target application folder
1) Determine `TARGET_DIR` as the folder that contains `final_tailored_resume.md`:
   - Prefer the currently open editor file if it is `applications/**/final_tailored_resume.md`.
   - Else, if exactly one match exists under `applications/**/final_tailored_resume.md`, use that.
   - Else STOP and ask the user to specify the exact path.

2) Set:
   - `WINNING_CV = {TARGET_DIR}/final_tailored_resume.md`
   - `JOB_DESCRIPTION = {TARGET_DIR}/job_description.md` (or .txt)
   - `KEYWORD_ANALYSIS = {TARGET_DIR}/keyword_analysis.md`
   - `COVER_LETTER = {TARGET_DIR}/cover_letter.md`
   - `QA_REPORT = {TARGET_DIR}/qa_checklist.md`

Source rules
- Treat the “Contextual Intelligence Brief” as the section titled exactly that inside `KEYWORD_ANALYSIS`.
- Treat “Job Description keywords” as the keyword table / extracted keyword list inside `KEYWORD_ANALYSIS` and/or quotes from `JOB_DESCRIPTION`.
- If `JOB_DESCRIPTION` or `KEYWORD_ANALYSIS` is missing, mark QA as FAIL and STOP.

Step 1 — Cover Letter
1) Draft a concise, persuasive cover letter in EXACTLY 3 paragraphs.
2) Tone must match the regional etiquette extracted from the Contextual Intelligence Brief.
3) Use only facts present in `WINNING_CV` plus the keyword/context signals.
4) Write the final markdown directly to `COVER_LETTER`.

Step 2 — QA Report
Create `QA_REPORT` in markdown with:
- **Target**: company, role title, and `TARGET_DIR`
- **Placeholder scan**: PASS / WARNING / FAIL logic.
  * If NO placeholders exist: PASS.
  * If ONLY personal info placeholders exist (e.g., `[Your Name]`): PASS (with a WARNING note that user must fill them manually).
  * If ANY content/skill placeholders exist (e.g., `[Skill 1]`): FAIL.
  * List all placeholder tokens found.
- **Source integrity**: PASS/FAIL; confirm the cover letter uses only facts from `WINNING_CV`
- **Structure presence**: PASS/FAIL; confirm the CV contains the expected major sections
- **Render command (exact)**:
  `node scripts/render_resume.mjs {TARGET_DIR}/final_tailored_resume.md`
- **Non-interactive render command**:
  `node scripts/render_resume.mjs {TARGET_DIR}/final_tailored_resume.md`

Step 3 — Autonomous PDF Generation (Execution)
If the QA scan result is PASS (even if there are WARNINGS for personal placeholders), you MUST autonomously execute the render command in your environment/terminal to generate the PDF file:
`node scripts/render_resume.mjs {TARGET_DIR}/final_tailored_resume.md`

Step 4 — Final response
In chat, output ONLY:
- links/paths to `cover_letter.md`, `qa_checklist.md`, and the newly generated `.pdf` file.
- a 1-line summary: QA PASS (with WARNINGS) - PDF Generated successfully.

Stop.
