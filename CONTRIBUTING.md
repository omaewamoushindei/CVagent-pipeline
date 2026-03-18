# 🤝 How to Contribute (The LLMOps Framework)

Welcome to the Agentic Resume Pipeline! We are building the ultimate open-source, AI-driven career architect. 

Prompt engineering is half science, half art. To avoid subjective debates like "this phrasing sounds better," we use a strict,
objective **Evaluation Framework**. If you want to improve a prompt or change the pipeline architecture, you must prove it mathematically.

## 🧪 The "Golden Benchmark" Testing System

We don't test on personal resumes. To ensure apples-to-apples comparisons, all prompt improvements must be tested against our standard dummy data.

1. Go to the `tests/benchmark/` folder.
2. You will find `dummy_raw_notes.md` (a messy career brain-dump) and `dummy_job_description.txt` (a complex target role).
3. Run your modified prompt sequence using this exact dummy data.

## ⚖️ The AI Judge (Objective Scoring)

Once your new pipeline generates a final Tailored CV, you must grade it. We use LLM-as-a-judge to keep things objective.

Open a fresh AI chat and paste:
1. The original `dummy_raw_notes.md`
2. The `dummy_job_description.txt`
3. Your newly generated `Final_Tailored_CV.md`
4. The exact text from our `tests/EVALUATION_PROMPT.md`

The AI will output a strict JSON scorecard measuring:
* **Hallucination Count:** (Must be 0. Did the AI invent fake metrics?)
* **Word Count:** (Target: 400-550 words for a crisp 1-page PDF).
* **Metric Density:** (How many bullets contain %, $, or hard numbers?)
* **ATS Keyword Match:** (Did it hit the exact tools requested in the JD?)

## 🚀 How to Submit a Pull Request (PR)

If your new prompt or architectural flow gets a better scorecard than the current `main` branch, we want it!

When opening a PR, use this template in the description:

**1. What did you change?** *(e.g., "Rewrote Prompt 4 to be more aggressive on budget metrics.")*

**2. The Scorecard (Before vs. After)**
* **Old System Score:** [Paste the JSON or brief metrics here]
* **Your New Score:** [Paste your winning JSON scorecard here]

**3. Output Sample**
*(Paste a short snippet showing the improved bullet points)*

If the numbers prove your system is better, your PR will be merged. Let's build the ultimate career agent together!
