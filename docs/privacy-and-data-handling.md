# Privacy and Data Handling

This workflow may involve personal career information, including work history, education, contact details, certificates, transcripts, and application documents.

## Principles

- Do not commit private or sensitive personal data to a public repository.
- Use synthetic or sanitized data for examples, tests, and demos.
- Keep generated application outputs out of version control unless they are explicitly prepared as examples.
- Review files before committing, especially files in `raw/`, `career_vault/`, and `applications/`.

## Recommended Folder Usage

| Folder | Recommended Use |
|---|---|
| `raw/` | Local source notes or synthetic sample input |
| `career_vault/` | Local structured career data generated from source notes |
| `applications/` | Local application-specific outputs |
| `examples/` | Versioned synthetic demo material |
| `tests/benchmark/` | Synthetic data used for repeatable testing |

## Public Demo Rule

Only synthetic or sanitized files should be used for public demonstrations.

## Before Committing

Check that the commit does not include:

- phone numbers
- addresses
- private emails
- transcripts
- certificates
- real resumes
- real cover letters
- confidential company data
- non-public job documents