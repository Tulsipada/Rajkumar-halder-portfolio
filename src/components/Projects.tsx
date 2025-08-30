import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Activity, Network, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sentiment Analysis of COVID-19 Related Tweets",
      description: "Deep learning model using NLP techniques to classify sentiments in COVID-19 tweets with 94.38% training accuracy and 83.97% validation accuracy.",
      icon: Brain,
      tags: ["Python", "NLP", "Deep Learning", "TensorFlow", "Keras", "NLTK"],
      achievements: [
        "94.38% training accuracy, 83.97% validation accuracy",
        "Comprehensive data preprocessing and cleaning",
        "Bidirectional GRU layers with embedding and pooling",
        "Real-time sentiment classification system"
      ],
      category: "Machine Learning"
    },
    {
      title: "Breast Cancer Detection Model",
      description: "Highly accurate predictive model using various ML algorithms including logistic regression, KNN, SVM, decision trees, and XGBoost for medical diagnosis.",
      icon: Activity,
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis", "Healthcare"],
      achievements: [
        "Comprehensive comparison of ML algorithms",
        "Feature engineering and correlation analysis", 
        "ROC AUV evaluation and performance metrics",
        "Clinical presentation with visualizations"
      ],
      category: "Healthcare ML"
    },
    {
      title: "5G Handover Management Research",
      description: "Ongoing research on handover reduction in integrated terrestrial-satellite networks to maintain mobility and enhance global coverage in 5G systems.",
      icon: Network,
      tags: ["5G Networks", "Cloud Computing", "Distributed Systems", "Satellite Networks"],
      achievements: [
        "Ensuring continuous connectivity across networks",
        "Reducing latency in remote areas",
        "Improving network reliability and QoS",
        "Research publication in progress"
      ],
      category: "Network Engineering"
    }
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "text-blue-500";
      case "Healthcare ML":
        return "text-green-500";
      case "Network Engineering":
        return "text-purple-500";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
            Portfolio
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning Machine Learning, Healthcare AI, and Network Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-border/50 group hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-hero`}>
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 hover:bg-secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-glow"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-border hover:bg-secondary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-hero text-primary-foreground shadow-hero hover:shadow-glow"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;