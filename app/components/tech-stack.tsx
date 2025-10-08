import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "Javascript", "Html", "CSS"],
  },
  {
    category: "ML/DL Frameworks",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Keras", "MLflow"],
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["Pandas","NumPy", "Matplotlib", "Seaborn", "Plotly", "PowerBI"],
  },
  {
    category: "Tools",
    skills: ["Git & GitHub","Jupyter", "Vscode", "My SQL", "OracleDB","Docker","Pycharm","Streamlit","AWS"],
  },

  {
    category: "Web Scraping & API's",
    skills: ["Scrapy", "Beautiful Soup", "Flask", "FastApi","Requests"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
