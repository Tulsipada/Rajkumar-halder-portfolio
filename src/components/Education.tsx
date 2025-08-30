import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Jadavpur University",
      degree: "Master of Engineering in Software Engineering",
      location: "Kolkata, India",
      period: "Aug 2025",
      cgpa: "7/10.00",
      highlights: [
        "Researching Handover Management in Terrestrial and Non-Terrestrial Networks",
        "Teaching Assistant for Data Structures and Algorithms Laboratory",
        "Placement Coordinator for Information Technology Department (2024-25)"
      ],
      current: false
    },
    {
      institution: "Dumkal Institute of Engineering and Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "West Bengal, India",
      period: "2022",
      cgpa: "9.05/10.00",
      highlights: [
        "Excellent academic performance with distinction",
        "Strong foundation in Computer Science fundamentals"
      ],
      current: false
    },
    {
      institution: "Shaikhpara A.R.M. Polytechnic College",
      degree: "Diploma in Computer Software Technology",
      location: "West Bengal, India",
      period: "2019",
      cgpa: "7.5/10.00",
      highlights: [
        "Early exposure to software technology concepts",
        "Built foundational programming skills"
      ],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Academic Journey
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-border/50"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon & Timeline */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-hero">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {edu.current && (
                    <Badge variant="outline" className="border-primary text-primary">
                      Current
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-1">{edu.location}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex lg:flex-col items-center lg:items-end gap-2">
                  <Badge
                    className={`text-lg px-4 py-2 ${parseFloat(edu.cgpa) >= 9
                      ? 'bg-gradient-accent text-accent-foreground'
                      : 'bg-gradient-primary text-primary-foreground'
                      }`}
                  >
                    {edu.cgpa}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;