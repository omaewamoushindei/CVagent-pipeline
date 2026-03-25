# QA Checklist

- **Target**: Atruvia AG — Data Engineer (m/f/d) | DSIANA
- **TARGET_DIR**: applications/Atruvia_AG/Data_Engineer_DSIANA

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
- **Check**: `cover_letter.md` uses only facts present in `final_tailored_resume.md` and contextual/keyword signals from `keyword_analysis.md` / `job_description.txt`.

## Structure Presence
- **Result**: PASS
- **Check**: CV contains expected major sections: Profile, Education, Experience, Technical Skills, Selected Projects, Certifications, Languages.

## Render Command (exact)
`node scripts/render_resume.mjs applications/Atruvia_AG/Data_Engineer_DSIANA/final_tailored_resume.md`

## Non-interactive render command
`node scripts/render_resume.mjs applications/Atruvia_AG/Data_Engineer_DSIANA/final_tailored_resume.md`
