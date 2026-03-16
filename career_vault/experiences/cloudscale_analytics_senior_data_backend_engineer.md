# CloudScale Analytics — Senior Data/Backend Engineer (Munich)

## Verbatim

Currently, I'm working as a Senior Data/Backend Engineer at a company called CloudScale Analytics here in Munich. I started this role in March 2023. It's a lot of responsibility. I actually lead a squad of 5 developers (3 juniors, 2 mid-level). My main achievement here was completely redesigning our real-time data ingestion pipeline. The old system was crashing all the time. I migrated us from a monolithic cron-job mess to an event-driven architecture using Apache Kafka, Spark, and AWS (specifically ECS and S3). Because of this migration, we reduced data processing latency by 40% and actually cut AWS costs by roughly €3,000 a month. Besides coding in Python and Scala, I do a lot of cross-functional stakeholder meetings, translating business requirements from the product team into Jira tickets. I also run the agile ceremonies because we don't have a dedicated Scrum Master. Oh, I managed the software procurement budget last year too, which was about €150,000.

## Additional evidence (verbatim, user-provided)

Yes, I used both at CloudScale Analytics. I used Terraform (Infrastructure as Code) to automate the provisioning of our AWS environments. I also migrated some of our legacy Docker containers to a managed Kubernetes (EKS) cluster. This reduced our infrastructure deployment time from 2 days to under 15 minutes and eliminated human configuration errors.

Yes, the AWS certification directly influenced my work at CloudScale. I implemented AWS Lambda functions to automatically trigger data validation scripts the moment new data landed in our S3 buckets, before sending it to ECS. This event-driven serverless approach is what ultimately helped us cut the €3,000/month cost.