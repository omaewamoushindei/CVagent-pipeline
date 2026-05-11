# Contributing

This repository is a documentation-driven workflow. Contributions are primarily improvements to:

- `README.md` / `PLAYBOOK.md` consistency
- prompt step files in `prompts/`
- templates in `templates/`
- synthetic demo material in `examples/`
- benchmark/evaluation material in `tests/`

The goal is to keep the repository internally consistent, easy to navigate, and safe to share publicly.

## What to Change (and What Not to)

Good contributions:

- Fix broken/outdated file references.
- Improve clarity of a prompt step (inputs, outputs, constraints).
- Improve the runbook so a new user can follow it without guessing paths.
- Tighten privacy guidance and `.gitignore` rules.
- Improve the synthetic demo (`examples/`) while keeping it clearly synthetic.
- Improve benchmark evaluation criteria in `tests/EVALUATION_PROMPT.md`.

Avoid:

- Adding claims that the workflow is fully automated.
- Adding SaaS/product marketing language.
- Committing private career data in `raw/`, `career_vault/`, or `applications/`.

## Privacy Requirements

- `raw/`, `career_vault/`, and `applications/` are treated as local/private workspace folders.
- `examples/` is the only tracked demo area and must stay synthetic or sanitized.

Before opening a PR, confirm you did not accidentally commit personal information.

## Testing Prompt Changes (Benchmark)

To evaluate prompt changes without using personal data:

1. Use the synthetic benchmark inputs in `tests/benchmark/`.
2. Run the relevant prompt steps using the dummy inputs.
3. Evaluate the generated output using `tests/EVALUATION_PROMPT.md`.

The intention is not to “prove mathematical optimality”, but to have a repeatable, documented way to compare prompt revisions.

## Documentation Consistency Checklist

If your change touches paths, filenames, or the workflow sequence, update the relevant docs:

- `README.md`
- `PLAYBOOK.md`
- `prompts/README.md`
- `examples/README.md`

And verify that references match the actual repository structure.
