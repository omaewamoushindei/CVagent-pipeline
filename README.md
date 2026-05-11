# Agentic Resume Pipeline

An open-source workflow layer for an AI-assisted career document generation product.

The project turns raw career notes into structured career data and tailored application documents using Markdown-based prompts, reusable templates, GitHub Codespaces or VS Code, and documented quality checks.

This repository is part of a broader product prototype. It focuses on making the workflow transparent, reusable, and easy to inspect or improve without requiring a full web application.

![System Architecture](assets/architecture.png)

## Purpose

This repository was created as the open-source workflow layer of a broader AI-assisted career document generation product.

The goal is to let users run and improve the base pipeline in GitHub Codespaces or VS Code, especially when full agentic AI tooling is limited or unavailable.

The workflow demonstrates how unstructured career notes can be converted into:

- structured reusable career data
- role-specific keyword analysis
- tailored resume drafts
- cover-letter drafts
- reviewable final outputs

The project is intentionally documentation-heavy because users need clear instructions, predictable folder structure, reusable templates, and transparent quality checks to run the workflow reliably.

## Audience

This repository is intended for:

- users who want a repeatable workflow for creating tailored application documents
- contributors who want to improve the prompt sequence, documentation, or evaluation process
- reviewers who want to understand the repository structure, workflow logic, and output quality controls

## Scope

This project focuses on workflow design, documentation structure, and maintainability.

It includes:

- Markdown-based workflow documentation
- structured source-content organization
- reusable resume templates and styling
- prompt files as documented workflow steps
- benchmark data for repeatable testing
- evaluation criteria for output review
- rendering support for final document generation

It does not aim to be a fully automated SaaS product in its current form. It also does not replace human judgment. Generated outputs should always be reviewed before use.

## Repository Structure

| Path | Purpose |
|---|---|
| `raw/` | Local source notes for personal runs (contents ignored except placeholder files) |
| `career_vault/` | Local structured career data for personal runs (contents ignored except placeholder files) |
| `prompts/` | Step-by-step workflow instructions from ingestion to final rendering |
| `applications/` | Local application-specific outputs for personal runs (contents ignored except placeholder files) |
| `examples/` | Versioned synthetic demo material (inputs and sample outputs) |
| `docs/` | Small set of supporting docs (glossary, privacy) |
| `tests/benchmark/` | Synthetic test data for repeatable evaluation |
| `tests/EVALUATION_PROMPT.md` | Quality rubric for reviewing generated outputs |
| `PLAYBOOK.md` | Operator guide for running the workflow |
| `templates/harvard.md` | Resume template (Markdown) |
| `templates/resume.css` | Resume styling used for PDF rendering |
| `scripts/render_resume.mjs` | Rendering script for consistent PDF/document generation |
| `assets/` | Supporting diagrams and visual documentation |

## Workflow Overview

The workflow has three main phases.

### 1. Career Vault Creation

Raw career notes are parsed and converted into structured source content.

Outputs include organized information about:

- work experience
- education
- projects
- skills
- achievements
- supporting evidence

This phase creates the reusable content base for later tailoring.

### 2. Strategy and Master Template

The structured career vault is reviewed, gap-checked, and converted into a stronger master CV foundation.

This phase focuses on:

- identifying missing evidence
- improving achievement statements
- checking impact strength
- creating reusable master content
- preparing the candidate profile for role-specific tailoring

### 3. Application Engine

The target job description is analyzed and mapped against the structured career content.

This phase produces:

- keyword and context analysis
- tailored resume variants
- selected final resume content
- cover-letter draft
- reviewable final document outputs

## Demo Path

For a short project walkthrough, review the repository in this order:

1. `assets/architecture.png` — workflow structure and information flow
2. `README.md` — project purpose, scope, and repository structure
3. `PLAYBOOK.md` — operator guide and execution workflow
4. `prompts/README.md` — prompt index and execution order
5. `docs/glossary.md` — key terms and shared vocabulary
6. `prompts/01_ingest_and_sort.md` — example of a documented workflow step
7. `prompts/05_jd_keyword_analysis.md` — example of structured job-description analysis
8. `tests/benchmark/` — synthetic inputs for repeatable testing
9. `tests/EVALUATION_PROMPT.md` — documented quality rubric
10. `scripts/render_resume.mjs` — rendering support for consistent document output

For a fast, concrete demo with tracked synthetic data, also open:

- `examples/README.md`
- `examples/synthetic-raw/sample.md`
- `examples/synthetic-job-description.txt`
- `examples/synthetic-career-vault/`
- `examples/sample-output/`

`examples/` is the only versioned demo area. The folders `raw/`, `career_vault/`, and `applications/` are intended as local workspace folders for your private runs.

## Maintainability Principles

The project follows several documentation-maintenance principles:

- Separate source content from generated outputs.
- Keep workflow steps documented in readable Markdown.
- Use consistent naming conventions for files and folders.
- Treat prompts as version-controlled workflow instructions.
- Treat templates as reusable structures, not one-off documents.
- Use benchmark data to test changes without exposing personal information.
- Review generated artifacts before saving or submitting them.
- Keep the README as the entry point and the PLAYBOOK as the procedural guide.

## Privacy and Data Handling

This workflow may involve personal career information.

For public or shared repositories:

- use synthetic or sanitized sample data
- avoid committing private resumes, transcripts, certificates, or application documents
- keep personal source files outside the repository when possible
- use benchmark files for testing and demonstration
- review your git ignore/exclude rules before adding real data

The sample files in this repository should be treated as demonstration data, not as a requirement for real usage.

## How to Run

This is a documentation-driven workflow rather than a single-command application.

Recommended options:

### GitHub Codespaces

1. Open the repository in GitHub Codespaces.
2. Review `README.md` and `PLAYBOOK.md`.
3. Follow the prompt sequence in `prompts/`.
4. Save outputs in the relevant `applications/<Company>/<Role>/` folder.

### VS Code Local Setup

1. Clone the repository.
2. Open it in VS Code.
3. Add or review source notes in `raw/`.
4. Follow the workflow in `PLAYBOOK.md`.
5. Use the prompt files in sequence from `prompts/01_ingest_and_sort.md` to `prompts/07_cover_letter_and_render.md` (including the `06A_...` / `06B_...` tailoring step).

If you want to explore the workflow without using private data, start from `examples/` instead of `raw/`.

### Render Example Output

Render the tracked synthetic example output:

```bash
node scripts/render_resume.mjs examples/sample-output/final_tailored_resume.md
```

Render a personal application output:

```bash
node scripts/render_resume.mjs applications/<Company>/<Role>/final_tailored_resume.md
```

## Quality Review

Output quality is checked through a documented evaluation process.

The evaluation focuses on:

- relevance to the target job description
- consistency with source evidence
- keyword coverage
- metric density
- hallucination risk
- formatting and readability

The evaluation prompt is available at:

```text
tests/EVALUATION_PROMPT.md
```

## Contributing

See `CONTRIBUTING.md` for contribution guidelines and the evaluation workflow used to compare prompt changes.

## License

MIT License.
