export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const workProjects: Project[] = [
  {
    title: 'Game Studio Streaming Analytics',
    description: 'Core streaming analytics infrastructure for Next Games (Netflix). Maintained and evolved services for real-time game telemetry and player behaviour analysis.',
    tags: ['Java', 'Flink', 'Kafka', 'Python', 'Streaming'],
  },
  {
    title: 'Batch Analytics Pipelines — Next Games',
    description: 'Analytics-oriented batch pipelines for game analysts covering game health monitoring, AB testing infrastructure, and KPI dashboards.',
    tags: ['Python', 'Airflow', 'Snowflake', 'AB Testing'],
  },
  {
    title: 'Batch Platform Infrastructure — Wolt',
    description: 'Built and maintained the core batch processing platform based on Airflow. Managed Snowflake integrations and improved observability with DataDog dashboards and alerts.',
    tags: ['Airflow', 'Snowflake', 'DataDog', 'Python', 'SRE'],
  },
  {
    title: 'Declarative Workflow Tool — Wolt',
    description: 'Internal tool for 50+ data professionals to define data workflows declaratively. Led design, development, migration from legacy solution, CI/CD, monitoring, and user education.',
    tags: ['Python', 'Airflow', 'Snowflake', 'CI/CD', 'Internal Tools'],
  },
  {
    title: 'Feature Store — X5 Retail Group',
    description: 'ML feature collection ETL pipelines and Python API package for analysts and data scientists. Scaled batch model inference for 50M+ users.',
    tags: ['Python', 'PySpark', 'Airflow', 'MLOps', 'Feature Store'],
  },
  {
    title: 'AB Testing Framework — VK.com',
    description: 'Improved AB testing framework methodology using CUPED and advanced statistical approaches. Built custom frontend and backend on Dash and ClickHouse.',
    tags: ['Python', 'ClickHouse', 'Dash', 'Statistics', 'AB Testing'],
  },
  {
    title: 'Assortment Matrix Optimizer — X5',
    description: 'Web platform for category managers to optimize product assortment matrices. Full stack: business logic, API, Kafka integration, Kubernetes deployment.',
    tags: ['Python', 'Kafka', 'Kubernetes', 'Backend', 'Full Stack'],
  },
];

export const personalProjects: Project[] = [
  {
    title: 'Dream Bot',
    description: 'AI-powered dream journaling and analysis bot.',
    tags: ['Python', 'AI', 'Bot'],
    link: 'https://github.com/maximkeremet/ai_apps',
  },
  {
    title: 'Breather',
    description: 'Breathing exercise and mindfulness app.',
    tags: ['App', 'Wellness'],
    link: 'https://github.com/maximkeremet/ai_apps',
  },
  {
    title: 'News Essence',
    description: 'News summarisation tool using LLMs to distil the essence of daily news.',
    tags: ['Python', 'LLM', 'NLP'],
    link: 'https://github.com/maximkeremet/ai_apps',
  },
  {
    title: 'Timeline',
    description: 'Personal timeline and life event tracker.',
    tags: ['App', 'Personal'],
    link: 'https://github.com/maximkeremet/ai_apps',
  },
  {
    title: 'The Office: Michael Scott Pack',
    description: 'A soundboard of Michael Scott quotes for various work situations.',
    tags: ['Fun', 'Audio'],
    link: 'https://github.com/maximkeremet/ai_apps',
  },
  {
    title: 'YT Meme Recorder',
    description: 'Tool for capturing and clipping meme-worthy YouTube moments.',
    tags: ['Python', 'Video', 'Tool'],
    link: 'https://github.com/maximkeremet/ai_apps',
  },
];
