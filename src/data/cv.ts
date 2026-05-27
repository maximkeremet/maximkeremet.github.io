export interface SkillCategory {
  category: string;
  items: string;
}

export interface Role {
  company: string;
  companyNote?: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
}

export const profile = {
  name: { first: 'Maxim', last: 'Keremet' },
  title: 'Data Engineer · MLOps',
  email: 'maximkeremet@gmail.com',
  github: 'maximkeremet',
  linkedin: 'maximkeremet',
  location: 'Helsinki, Finland',
  status: 'Blue card holder · Right to work in the EU',
  avatarPath: '/images/avatar.jpg',
};

export type Profile = typeof profile;

export const skills: SkillCategory[] = [
  { category: 'Agentic Coding', items: 'Claude Code, Custom AI Agents, Agentic Workflows, Context Engineering, Strands SDK, Braintrust' },
  { category: 'Programming & data processing', items: 'Python, Java (Spring Boot), SQL, Spark (PySpark/Scala/MLlib), Bash' },
  { category: 'Pipelines & orchestration', items: 'Airflow, Dagster, Mage' },
  { category: 'Streaming & real-time', items: 'Kafka, AWS Kinesis, Flink, Druid' },
  { category: 'Storage & warehousing', items: 'Snowflake, ClickHouse, PostgreSQL, Hadoop (HDFS/Hive), Iceberg, Alembic, S3' },
  { category: 'Visualization & BI', items: 'Superset/Preset, Dash, Streamlit' },
  { category: 'Cloud platforms', items: 'AWS, GCP, Yandex.Cloud' },
  { category: 'DevOps & infra', items: 'Docker, Kubernetes, Helm, Terraform' },
  { category: 'Observability & reliability', items: 'Prometheus, Datadog, Sentry, Grafana' },
  { category: 'MLOps & experimentation', items: 'MLflow, Feast' },
];

export const experience: Role[] = [
  {
    company: 'Netflix Games',
    companyNote: 'Next Games studio',
    title: 'Senior Data Engineer',
    location: 'Helsinki, Finland',
    start: 'Oct 2024',
    end: 'Current',
    bullets: [
      'Maintain and enhance the full data engineering stack for Next Games studio - raw event streaming pipelines, batch ETL pipelines for analytical datasets, and a suite of backend applications serving player support, core games backend, product managers, and studio leadership; aligning all work with Netflix paved road infrastructure standards.',
      'Engineered a context-driven agentic analytics platform where AI agent skills supply structured context - layering rules, schema conventions, table definition templates - that routes an agent to scaffold production-grade data pipelines and self-service dashboards end-to-end, enforcing architectural conventions and import-layer constraints without manual review bottleneck.',
      'Built a suite of specialised data engineering agents using Strands SDK that improve team operations and day-to-day productivity: a workflow triage agent that monitors all team data pipelines, diagnoses failures and root causes through structured reasoning, and acts according to the decision policy - escalates, restarts run or drafts a patch PR; and a context-aware review agent tailored specifically to data engineering workflow definition contracts that communicates with the data platform for fetching additional context and running test runs via MCP, ensuring data pipeline contributions meet quality and conventions consistently.',
      'Designed and maintained game analytics data pipelines (in-house orchestrator + Spark SQL + Apache Iceberg) for KPIs including DAU, retention, and first-plays; implemented partition freshness monitoring with staleness gating and multi-environment catalog routing enforced through environment variable contract to prevent data leakage.',
      'Built and maintained Games Analytics Home - an internal analytics hub serving all leadership layers from game PMs and studio managers to vertical leads and Netflix Games President; provides a unified UI with reusable widget contracts and shared component library, surfacing game and studio performance metrics across engagement, retention, player states, and releases; implemented and maintained by a squad of 2, driving all infrastructure and development areas.',
      'Led adoption of agentic developer tooling that improve team operations across the data team in Next Games studio - Claude Code skills for pipeline scaffolding, dashboard generation, and PR automation - reducing analyst onboarding time from hours to minutes while preserving platform conventions through skill-enforced rules and static import-layer analysis.',
    ],
  },
  {
    company: 'Wolt',
    companyNote: 'food delivery service, European subsidiary of DoorDash',
    title: 'Data Engineer / Software Engineer',
    location: 'Helsinki, Finland',
    start: 'Aug 2022',
    end: 'Sep 2024',
    bullets: [
      'Designed and built a self-service workflow platform for analysts - a YAML DSL that compiled to Dagster pipeline definitions, separating analyst business logic from data engineering infrastructure (replacing a monorepo Airflow setup shared by 100+ analyst and DE contributors); owned the platform end-to-end including CI/CD, infrastructure, Snowflake integration, and user-facing documentation.',
      'Led migration of 300+ daily aggregation pipelines from the Airflow monorepo to the new Dagster-based platform; ran onboarding sessions for analyst teams across support, product, customer, and courier verticals to ramp them onto the new tooling.',
      'Designed a standard observability layer for the team\'s application suite - wired DataDog metric and annotation collection from container and app instrumentation so every service had baseline visibility and alerting out of the box.',
      'On-call rotation for the batch platform; regularly triaged incidents (DAG failures, missing data, infra regressions) and contributed to postmortems and policy changes - including revoking dev-environment grants to test Snowflake warehouses after a runaway-task incident.',
      'Enhanced Snowflake ingestion tasks landing parsed events into the warehouse using Snowflake Scripting - reduced runtime boilerplate and added an events-metadata table tracking sources, error rates, and failure reasons.',
    ],
  },
  {
    company: 'X5 Retail Group',
    companyNote: 'largest Russia food retailer',
    title: 'Lead Data Engineer / MLOps',
    location: 'Moscow, Russia',
    start: 'Feb 2021',
    end: 'May 2022',
    bullets: [
      'IC tech lead within a 10-person cross-functional CVM team (managers, data scientists, data stewards), with 2 senior MLOps engineers in scope; accountable for the production ML layer and the team\'s k8s/Spark tooling, bridging data science research and production.',
      'Designed and built the pipeline from data scientists\' ad-hoc notebooks to a production-grade modular ML platform - turning experimental work into iterable, scalable services serving X5\'s loyalty card pool of 50M+ customers.',
      'Designed and built the full ML model lifecycle on Airflow + MLflow + Spark + Superset: training, scheduled and on-demand retraining, feature collection, feature matching for sample evaluation, full-population inference, metrics calculation, and result visualisation for both technical and business stakeholders.',
      'Built the team\'s Feature Store with a Python package as the unified API for analysts, data scientists, and production services - single contract for accessing engineered features across all use cases.',
      'Built a data monitoring pipeline (PySpark + Airflow + Superset + Postgres) tracking model and feature health across all production ML tables - classification quality metrics (precision, recall, F1), output score drift, and volume / freshness checks - sliced by categorical dimensions like marketing channel for targeted diagnosis.',
      'Deployed all team ML tooling (Airflow, Superset, MLflow, Datahub) onto the company\'s k8s and Spark clusters; built fully automated CI/CD (GitLab CI + Docker + Helm + Rancher) for all containerized services.',
    ],
  },
  {
    company: 'VK.com',
    companyNote: 'social networking service',
    title: 'Data Engineer / Product Analyst',
    location: 'St. Petersburg, Russia',
    start: 'Feb 2020',
    end: 'Nov 2021',
    bullets: [
      'Built pipeline for collecting product metrics for all analytical use cases.',
      'Performed analytical ad-hoc analysis tasks (EDA, product and tech performance dashboards, coronavirus reporting, etc.).',
      'Improved AB testing framework methodology (researching CUPED and different statistical test approaches), developing custom frontend and backend on Dash and ClickHouse.',
    ],
  },
  {
    company: 'X5 Retail Group',
    companyNote: 'largest Russia food retailer',
    title: 'Data Engineer',
    location: 'Moscow, Russia',
    start: 'Nov 2018',
    end: 'Feb 2020',
    bullets: [
      'Built assortment matrix optimizer as part of a web-based platform for category managers.',
      'Full stack development from prototype to production: business logic, testing, documentation, logging, alerting, debugging, API integration with frontend services and Kafka, deploying in Kubernetes.',
    ],
  },
  {
    company: 'Mail.ru Group',
    title: 'Data Analyst',
    location: 'Moscow, Russia',
    start: 'Jul 2017',
    end: 'Nov 2018',
    bullets: [
      'Performed analytical ad-hoc analysis tasks.',
      'Performed typical DS workflow: data cleaning → exploring data → building machine learning models → performing ML evaluations.',
    ],
  },
];

export const extracurricular: Role[] = [
  {
    company: 'Yandex.Practicum',
    title: 'MLOps Course Tech Lead / Author',
    location: 'Remote',
    start: 'Feb 2025',
    end: 'Jun 2025',
    bullets: [
      'Constructed curriculum on the module/lesson level, educational results, practical assignments and other program-associated docs.',
      'Hiring and managing a group of 5+ authors to produce educational content, assignments and infrastructure for the program.',
      'Hiring support team members - course mentors and assignment reviewers.',
      'Acting as an author and contributing to the program.',
      'Collaborating with devops team to provision, set up course infrastructure and optimizing cloud costs per student.',
    ],
  },
  {
    company: 'Central University by Tinkoff',
    title: 'Course Lead',
    location: 'Remote',
    start: 'Jan 2024',
    end: 'Current',
    bullets: [
      "Designed a bachelor's course in Python with profile tracks for Data analyst, ML engineer and SWE.",
      'Leading a group of authors, contributing with content myself, designing student learning experience, and building the production side of the course.',
      'Contributing to data engineering course.',
    ],
  },
  {
    company: 'Practicum by Yandex',
    title: 'Course Mentor and Contributor',
    location: 'Remote',
    start: 'Jul 2019',
    end: 'Current',
    bullets: [
      'Contributed with a 30-hour course module on Hadoop, PySpark and ML in Spark.',
      'Mentored over 1,000 students on their code.',
    ],
  },
  {
    company: 'Open ML course',
    title: 'Contributor and TA',
    location: 'Remote',
    start: 'Sep 2018',
    end: 'Dec 2019',
    bullets: [
      'Preparing lessons and materials for students of mlcourse.ai.',
      'Giving guidance on assignments, answering questions and making tutorials.',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: 'University of Gothenburg',
    degree: 'M.S. in Medicine',
    location: 'Gothenburg, Sweden',
    start: 'Sep 2012',
    end: 'Aug 2014',
  },
  {
    school: 'Jönköping University',
    degree: 'Bachelor of Business Administration (B.BA.)',
    location: 'Jönköping, Sweden',
    start: 'Sep 2010',
    end: 'Aug 2011',
  },
  {
    school: 'Plekhanov Russian University of Economics',
    degree: 'B.S. in Economics',
    location: 'Moscow, Russia',
    start: 'Sep 2008',
    end: 'Aug 2012',
  },
];
