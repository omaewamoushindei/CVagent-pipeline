---
stylesheet:
  - resume.css
pdf_options:
  format: A4
  margin: 20mm 20mm 20mm 20mm
  printBackground: true
launch_options:
  args:
    - --no-sandbox
    - --disable-setuid-sandbox
    - --disable-dev-shm-usage
---

<div class="resume-header">
  <img src="[Profile Photo Path]" alt="Profile Photo" class="profile-pic">
  <div class="header-info">
    <h1>[Your Name]</h1>
    <p>[your.email@example.com] | [City, Country] | [Phone Number] | [Portfolio or GitHub URL]</p>
  </div>
</div>

## Profile
Senior Data/Backend Engineer focused on **real-time data platforms**, **event-driven data pipelines**, and **cloud infrastructure automation**. Led a 5-person engineering squad and delivered measurable outcomes including **40% reduction in data processing latency**, **~€3,000/month AWS cost reduction**, reliability improved from **95% to 99.9% uptime**, and infrastructure deployment time reduced from **2 days to under 15 minutes** via Terraform modules and EKS migration.

## Education
<p class="entry-line"><span class="entry-left"><strong>Technical University of Munich (TUM)</strong> | <strong>Master of Science in Informatics</strong></span><span class="entry-right">Munich, Germany | Oct 2018 - Sep 2020</span></p>
Relevant coursework: Distributed Systems; Advanced Machine Learning; Cloud Computing

<p class="entry-line"><span class="entry-left"><strong>Middle East Technical University (METU)</strong> | <strong>Bachelor’s in Computer Engineering</strong></span><span class="entry-right">Ankara, Turkey | Sep 2014 - Jun 2018</span></p>
Honors: 
Relevant coursework: 

## Experience
<p class="entry-line"><span class="entry-left"><strong>CloudScale Analytics</strong> — Senior Data/Backend Engineer</span><span class="entry-right">Munich, Germany | Mar 2023 - Present</span></p>

- Led a squad of **5 developers** (3 juniors, 2 mid-level), reducing average Jira sprint cycle time by **20%** and eliminating missed delivery deadlines over a **6-month** period.
- **Redesigned the real-time data ingestion pipeline**, migrating from a monolithic cron-job approach to an event-driven architecture using **Apache Kafka**, **Spark**, and **AWS (ECS + S3)**.
- Operated the platform at scale: **10M+ events/day** (~**500GB/day** streaming data) while improving uptime from **95% to 99.9%**.
- Delivered measurable platform outcomes: **40% reduction in data processing latency** and **~€3,000/month AWS cost reduction**.
- Managed requirements across **4 product teams**, reducing ticket rework by **30%** through clearer upfront requirements and execution planning in **Jira**.
- Managed software procurement budget of approximately **€150,000**; renegotiated Datadog and AWS enterprise support contracts to secure a **15% discount**, saving **€22,500 annually**.
- Built reusable **Terraform** modules for **VPCs**, **IAM roles**, and **EKS clusters**; adopted by all **3 backend engineering squads** to standardize infrastructure.
- Migrated legacy Docker containers to managed Kubernetes (**EKS**), reducing infrastructure deployment time from **2 days to under 15 minutes** and eliminating human configuration errors.
- Implemented **AWS Lambda** validations to catch malformed JSON records and schema mismatches when new data landed in **S3** (prior to **ECS** processing), preventing an average of **5 data-corruption incidents per month**.

<p class="entry-line"><span class="entry-left"><strong>FinPayTech</strong> — Junior Software Developer → Mid-level Data Engineer</span><span class="entry-right">Berlin, Germany | Oct 2020 - Feb 2023</span></p>

- Promoted to **Mid-level Data Engineer (2022)** in **16 months** due to full ownership of the CI/CD pipeline and Redis caching implementation.
- Built and owned **8 Node.js microservices** (primarily user authentication and transaction history), enabling deployments **3x faster** than the prior PHP monolith.
- Introduced **GitHub Actions CI/CD**, increasing deployment frequency from **bi-weekly** to **multiple times/day** and eliminating deployment-related downtime.
- Implemented a **Redis** caching layer that improved application login time by **2 seconds**, reducing bounce rate.
- Built **5** core automated **Tableau** dashboards backed by **PostgreSQL**, eliminating **10 hours/week** of manual Excel reporting and helping optimize a **€50k/month** ad spend.
- Organized weekly **"Lunch & Learn"** sessions (avg **15 engineers**), reducing onboarding time for new hires by almost **one full week**.
- Led a **2-day internal hackathon** building a prototype receipt-scanning OCR model using **PyTorch**, achieving **90% text extraction accuracy**.

<p class="entry-line"><span class="entry-left"><strong>BMW Group</strong> — R&D Intern</span><span class="entry-right">Munich, Germany | Summer 2019 (4 months)</span></p>

- Built a Python prototype to analyze sensor data from test cars and detect anomalies in brake pressure; processed **50GB+** of historical telemetry data.
- Used **scikit-learn (Isolation Forest)** to detect brake pressure drops; Proof of Concept later integrated by senior engineers into the main testing suite.

<p class="entry-line"><span class="entry-left"><strong>Aselsan</strong> — Summer Intern (Radar Simulation)</span><span class="entry-right">2017 (3 months)</span></p>

- Optimized a radar signal processing module in **C++**, reducing CPU usage by **15%**.
- Set up a basic **Jenkins** pipeline to automatically compile and run unit tests nightly, saving senior engineers ~**5 hours/week** of manual testing.

## Technical Skills
<div class="skills-grid">
  <p class="skill-item"><strong>Analytics / Programming:</strong> Python (Expert), SQL (Expert), JavaScript/TypeScript (Advanced), Scala (Intermediate), Pandas, Spark, Kafka</p>
  <p class="skill-item"><strong>Cloud / Infrastructure:</strong> AWS (EC2, S3, Lambda, ECS), Docker, Kubernetes (EKS), Terraform (Infrastructure as Code)</p>
  <p class="skill-item"><strong>CI/CD / Automation:</strong> GitHub Actions, Jenkins</p>
  <p class="skill-item"><strong>Data / AI (supporting):</strong> PyTorch, Scikit-learn, Tableau, PowerBI</p>
  <p class="skill-item"><strong>Collaboration / Delivery:</strong> Jira, Agile/Scrum, cross-functional communication, technical writing</p>
</div>

## Selected Projects
**Crypto Trading Bot — Binance** (Python, pandas, asyncio)
- Built an open-source crypto trading bot that fetches prices from the Binance API and executes trades based on moving averages.
- Open-source project with ~**120 GitHub stars**.

**Master’s Thesis — Sentiment Analysis of Financial News using Transformer Models** (PyTorch, BERT)
- Trained a custom BERT model using PyTorch to predict stock market movements based on **500,000** financial tweets.
- Achieved **82% accuracy** in backtesting.

**Receipt-Scanning OCR Prototype — FinPayTech Internal Hackathon** (PyTorch)
- Led a 2-day internal hackathon building a prototype OCR model using PyTorch.
- Achieved **90% text extraction accuracy**.

**MenuSync — SaaS Startup Attempt** (React, Next.js, Node.js, Firebase, Stripe)
- Built a dashboard to help restaurants update menus across UberEats, Wolt, and their own website; integrated Stripe API for payments.
- Reached ~**50** beta testing restaurants.

## Certifications
- AWS Certified Solutions Architect – Associate (Jan 2024)
- Professional Scrum Master I (PSM I) — Scrum.org (2021)
- DeepLearning.AI Specialization — Coursera (Andrew Ng) (2019)

## Languages
Turkish (Mother tongue) · English (C1/Fluent) · German (B2) · Spanish (A2)
