import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Wrench, BookOpen, Monitor, Trophy } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "bg-gradient-primary" },
        { name: "C++", level: 85, color: "bg-gradient-accent" },
        { name: "JavaScript", level: 80, color: "bg-gradient-primary" },
        { name: "C", level: 85, color: "bg-gradient-accent" },
        { name: "HTML5/CSS3", level: 82, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "Database Technologies",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, color: "bg-gradient-primary" },
        { name: "MongoDB", level: 80, color: "bg-gradient-accent" }
      ]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gradient-primary" },
        { name: "VSCode", level: 95, color: "bg-gradient-accent" }
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: BookOpen,
      skills: [
        { name: "TensorFlow/Keras", level: 88, color: "bg-gradient-primary" },
        { name: "Scikit-learn", level: 85, color: "bg-gradient-accent" },
        { name: "Pandas/NumPy", level: 90, color: "bg-gradient-primary" },
        { name: "Django", level: 75, color: "bg-gradient-accent" },
        { name: "NLTK", level: 82, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: [
        { name: "Ubuntu 24.04 LTS", level: 88, color: "bg-gradient-primary" },
        { name: "Windows 11", level: 90, color: "bg-gradient-accent" }
      ]
    }
  ];

  const achievements = [
    {
      title: "GATE 2023",
      value: "98.93%",
      description: "AIR 1124 in Graduate Aptitude Test",
      icon: Trophy
    },
    {
      title: "Problem Solving",
      value: "450+",
      description: "GeeksforGeeks + LeetCode problems solved",
      icon: Code
    },
    {
      title: "Contest Rating",
      value: "1400+",
      description: "Competitive programming rating",
      icon: Trophy
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skill set spanning multiple domains of software engineering
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card text-center">
              <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{achievement.title}</div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Relevant Subjects */}
        <Card className="mt-12 p-8 bg-gradient-card shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Data Structures and Algorithms",
              "Database Management Systems", 
              "Machine Learning",
              "Computer Networks",
              "Distributed Software Architecture",
              "Operating Systems and Kernel Programming",
              "Object Oriented System Design"
            ].map((subject, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 border-primary/20 hover:border-primary/50 transition-colors"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;