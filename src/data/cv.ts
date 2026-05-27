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
      'Maintain and enhance the full data engineering stack for Next Games studio — raw event streaming pipelines, batch ETL pipelines for analytical datasets, and a suite of backend applications serving player support, core games backend, product managers, and studio leadership; aligning all work with Netflix paved road infrastructure standards.',
      'Engineered a context-driven agentic analytics platform where AI agent skills supply structured context — layering rules, schema conventions, table definition templates — that routes an agent to scaffold production-grade data pipelines and self-service dashboards end-to-end, enforcing architectural conventions and import-layer constraints without manual review bottleneck.',
      'Built a suite of specialised data engineering agents (Strands SDK + Claude Sonnet) that improve team reliability and day-to-day productivity: a workflow triage agent that monitors the data platform for pipeline failures, diagnoses root causes through structured reasoning, and auto-restarts or escalates with guardrails (audit hook, S3-backed deduplication state); and a context-aware contribution review agent grounded in platform documentation via RAG semantic search, ensuring data pipeline contributions meet quality and convention standards consistently.',
      'Designed and maintained game analytics data pipelines (in-house orchestrator + Spark SQL + Apache Iceberg) for KPIs including DAU, retention, and first-plays; implemented partition freshness monitoring with staleness gating and multi-environment catalog routing enforced through environment variable contract to prevent data leakage.',
      'Led adoption of agentic developer tooling that improve team operations across the data team in Next Games studio — Claude Code skills for pipeline scaffolding, dashboard generation, and PR automation — reducing analyst onboarding time from hours to minutes while preserving platform conventions through skill-enforced rules and static import-layer analysis.',
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
      'Building infrastructure for a batch processing tool based on Airflow.',
      'Maintaining and enhancing an existing streaming tool.',
      'Collaborating on streaming platform team initiatives with Scala and Iceberg table format.',
      'Managing and contributing to infrastructure integrations between the batch platform and Snowflake.',
      'Performing data operations and ad-hoc tasks such as creating data models, Snowflake tables, Kafka connectors, etc.',
      'Improving observability for internal tools using DataDog by building dashboards, monitors, and logging collections.',
      'Developing SRE processes for data services, including maintaining documentation, troubleshooting incidents, and conducting postmortems.',
      'Developing an internal declarative data workflow definition tool for data professionals (50+ internal users).',
      'Contributing to all aspects of the application: internal logic, CI/CD, infrastructure, metrics collection, monitoring and alerting, Snowflake integrations, and user documentation.',
      'Designing and leading the migration process from a legacy solution to a new workflow.',
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
      'Built ML features collection ETL pipelines (Feature Store).',
      'Built a Python package serving as API for analysts, data scientists, and production for easy access to ML features.',
      'Crafted models retraining processes — scheduled retraining in production and on-demand for different use cases.',
      'Built fully automated CI/CD pipelines on GitlabCI for containerized applications using Docker, Helm and Rancher.',
      'Designed overall pipeline architecture for ML models in production and scaled batch model inference for over 50M users.',
      'Deployed tools for the team: Airflow, Superset, Datahub.',
      'Built a data monitoring pipeline (PySpark + Airflow + Superset + Postgres) gathering metrics for all tables with ML features and model results.',
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
      'Hiring support team members — course mentors and assignment reviewers.',
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
