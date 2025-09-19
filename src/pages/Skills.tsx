import { Code, Database, Brain, Wrench, MessageSquare, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      color: "primary",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Django", level: 70 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "accent",
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "primary",
      skills: [
        { name: "MySQL", level: 70 },
        { name: "PostgreSQL", level: 65 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "accent",
      skills: [
        { name: "Core ML Concepts", level: 70 },
        { name: "Scikit-learn", level: 65 },
        { name: "Data Analysis", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "primary",
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "MS Office", level: 85 },
        { name: "Version Control", level: 80 }
      ]
    },
    {
      title: "Languages",
      icon: MessageSquare,
      color: "accent",
      skills: [
        { name: "English", level: 95 },
        { name: "Kannada", level: 100 },
        { name: "Tulu", level: 95 },
        { name: "Hindi", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Team Collaboration",
    "Quick Learning",
    "Creative Thinking",
    "Time Management",
    "Attention to Detail"
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Skills</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and soft skills I've developed through my academic journey and internship experiences
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-slide-up">Technical Skills</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    category.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    <category.icon size={24} className={category.color === "accent" ? "text-accent" : "text-primary"} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            category.color === "accent" ? "bg-accent" : "bg-primary"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Soft Skills</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Summary */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 animate-slide-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Skill Summary</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <p className="text-muted-foreground">Programming Languages</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Technologies & Tools</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <p className="text-muted-foreground">Spoken Languages</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
              Continuously learning and expanding my technical skills while maintaining strong communication 
              and problem-solving abilities. Always eager to explore new technologies and tackle challenging projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;