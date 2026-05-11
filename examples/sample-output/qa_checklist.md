# QA Checklist

- **Target**: NexaFin Tech Solutions — Data Engineer (m/f/x) | Core Analytics Team
- **TARGET_DIR**: examples/sample-output

## Placeholder Scan
- **Result**: PASS (with WARNING)
- **Logic**: Only personal information placeholders detected; no structural/content placeholders found.
- **WARNING**: Personal placeholders must be filled manually before final submission.
- **Placeholder tokens found**:
  - [Your Name]
  - [your.email@example.com]
  - [City, Country]
  - [Phone Number]
  - [LinkedIn or GitHub URL]

## Source Integrity
- **Result**: PASS
- **Check**: `cover_letter.md` uses only facts present in `final_tailored_resume.md` and contextual/keyword signals from `keyword_analysis.md` / `synthetic-job-description.txt`.

## Structure Presence
- **Result**: PASS
- **Check**: CV contains expected major sections: Profile, Education, Experience, Technical Skills, Selected Projects, Certifications, Languages.

## Render Command (exact)
`node scripts/render_resume.mjs examples/sample-output/final_tailored_resume.md`

## Non-interactive render command
`node scripts/render_resume.mjs examples/sample-output/final_tailored_resume.md`
