Act as an ETL Data Engineer and Career Vault Architect.

Task: Read all the content provided in the raw/ directory. This contains my massive, unstructured career brain-dump.

Action: Extract all information WITHOUT ANY DATA LOSS, structure it perfectly, and distribute it into the correct subdirectories inside career_vault/ in .md format.

Phase 1: Data Provenance & Pre-Processing (Extraction)
* Tool Usage: If you encounter binary files (like .docx or .pdf) in the raw/ directory, you MUST first use your environment tools (like Python/Bash scripts) to convert them into readable plaintext/markdown. Do not guess or hallucinate unreadable binaries.
* Traceability: To strictly prove the "WITHOUT ANY DATA LOSS" constraint, every extracted artifact MUST include a source tag (e.g., [Source: raw/master_profile.docx]) to remain auditable.

Phase 2: Distribution, Tone Translation & Structuring (Transformation & Load)
* Grouping Rules: Create a SEPARATE .md file for every single project and experience (e.g., `career_vault/projects/project_name.md`). Group shorter items into category files (`courses/all_courses.md`).
* File Naming: Ensure all generated filenames use lowercase_slugs without spaces.
* Tone Translation (CRITICAL): The raw input might be written informally, like a diary, or lack professional terminology. You must translate informal statements into objective, professional, resume-ready bullet points. HOWEVER, you must strictly extract facts; DO NOT invent, hallucinate, or exaggerate metrics or tools that are not in the raw text.

Strict Formatting Schema (The Blueprint):
Every newly created or updated Project/Experience .md file MUST follow this exact structure for readability and downstream AI processing:

# [Project or Experience Name]
**Type:** [Project / Work Experience]
**Timeline:** [MM/YYYY - MM/YYYY] (If unknown, write "Unspecified")
**Context:** [1-2 sentences explaining the main business goal in a professional tone] [Source: ...]

## 🛠 Core Tech Stack & Tools
- [Category]: Tool A, Tool B [Source: ...]

## 🚀 Key Contributions & Architecture
- [Professionalized factual bullet points of what was done, built, or designed] [Source: ...]

## 📊 Business Impact & Hard Metrics
- [Extract any numbers, percentages, user counts from the raw text. If none exist, leave blank or write "Needs Data"] [Source: ...]

Execution: Autonomously process the raw/ folder, apply the formatting, and write the final .md files directly into the career_vault/ workspace.
