import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
// import { experiences } from '../data/experience';


export const experiences = [
  {
    title: "Product Research Engineer",
    company: "Tata Consultancy Services",
    location: "Chennai, India",
    date: "Aug 2022 - Present",
    description: [
      `Led the end-to-end implementation of LLM within the product, developing a multi-agentic architecture using Python, LangChain and LangGraph. Implemented <span class="font-medium text-blue-600">Corrective-RAG</span> and <span class="font-medium text-blue-600">ReAct</span> techniques to
      enable LLM interactions with Digital Twin and simulation models for
      data insights.`,
      `Designed control flow and reasoning logic for LLM to provide strategic
      insights and decision-making based on entity twin data. With the
      integration of <span class="font-medium text-blue-600">Google Vertex Gemini</span> and <span class="font-medium text-blue-600">LLaMA</span> models, while also
      building domain-specific knowledge using quantization techniques on
      pre-trained models`,
      `Conducted data analysis to optimize business processes for a major
      <span class="font-medium text-blue-600">European service</span> provider by modeling milestone durations and
      identifying data quality issues.`,
      `Analyzed shipment delays for a Major <span class="font-medium text-blue-600">European retailer</span>, using EDA to address pain points like <span class="font-medium text-blue-600">lead time, delivery partners, and problematic regions</span>, and predicted shipment delays. Studied customer churn and winback
      campaign strategies for a major <span class="font-medium text-blue-600">Indian and Finnish</span> telecom providers`,
      `Developed <span class="font-medium text-blue-600">real-time ETL</span> pipelines using NiFi and Kafka to ingest data from RDBMS, APIs, flat files for KPI aggregator and data ingestion. Built
      a Django backend with Materialized Views for KPIs and EDA insights.
      Managed deployment and dockerization of applications and backend
      components in the client and product environment.`,
      `Built an <span class="font-medium text-blue-600">ML workbench</span> for feature engineering, data splitting, model
      training, and selection, enabling automated deployment of the best
      model on the server while supporting multiple data sources.`
    ],
    skills: [
      "Python",
      "LangChain & LangGraph",
      "Vertex-AI",
      "GenAI libraries",
      "Data science",
      "Machine Learning",
      "Data Analysis",
      "Fast APi",
      "Apache Kafka & Nifi",
      "PostgreSQL"
    ]
  },
  {
    title: "Python Developer",
    company: "Tata Consultancy Services",
    location: "Chennai, India",
    date: "Oct 2021 - July 2022",
    description: [
      `Redesigned a monolithic component which is used to build Digital Twin into an <span class="font-medium text-blue-600">Event-driven</span>, object oriented system using the <span class="font-medium text-blue-600">Singleton pattern</span> for efficient database connections.`,
      `Enabled event-driven <span class="font-medium text-blue-600">Kafka</span> message consumption and processing based on Digital twin configurations and defined rules.`,
      `Developed REST APIs with Django for <span class="font-medium text-blue-600">Digital Twin</span> configurations and journey definitions, reducing setup time. Built an SMTP mailing system.`,
    ],
    skills: [
      "Python",
      "Django framework",
      "Rest API",
      "Fast API",
      "Apache Kafka",
      "Apache Nifi",
      "PostgreSQL"
    ]
  },
  // {
  //   title: "Research Assistant",
  //   company: "Industrial Engineering Department",
  //   location: "Penn State University",
  //   date: "2021 - 2022",
  //   description: [
  //     "Conducted research on optimization techniques for industrial processes",
  //     "Created mathematical models for complex system analysis",
  //     "Mentored undergraduate students in research projects",
  //     "Presented findings at departmental seminars and workshops"
  //   ]
  // }
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // className="text-center mb-16"
          className="mb-16"
        >
          <h1 className="text-5xl font-light text-white mb-4">Experience</h1>
          <p className="text-lg text-gray-400">
            My professional journey in research and industry
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.date}`}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}