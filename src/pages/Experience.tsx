import { Calendar, MapPin, Building2, Code, Brain, Globe } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "Climetaverse",
      period: "Jul 2024 - Ongoing",
      type: "Current",
      icon: Brain,
      color: "accent",
      descriptions: [
        "Working on real-time ML integration into web apps using Django & Scikit-learn",
        "Learning full-stack development and deployment workflows",
        "Contributing to innovative climate-focused technology solutions"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Internpedia",
      period: "Oct 2024 - Nov 2024",
      type: "Completed",
      icon: Globe,
      color: "primary",
      descriptions: [
        "Built responsive pages using HTML, CSS, and JavaScript",
        "Enhanced project structure and modularity using React components",
        "Gained exposure to frontend best practices and version control (Git)"
      ]
    },
    {
      role: "Java Programming Intern",
      company: "CodSoft",
      period: "Mar 2024 - Apr 2024",
      type: "Completed",
      icon: Code,
      color: "accent",
      descriptions: [
        "Practiced Java programming through simple tasks and examples",
        "Developed problem-solving skills with object-oriented programming",
        "Built foundational knowledge in software development practices"
      ]
    },
    {
      role: "Web Development Intern",
      company: "BharatIntern",
      period: "Feb 2024 - Mar 2024",
      type: "Completed",
      icon: Globe,
      color: "primary",
      descriptions: [
        "Learned the basics of web development and coding",
        "Gained foundational understanding of HTML, CSS, and JavaScript",
        "Introduced to modern web development workflows and tools"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Experience</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through internships and hands-on learning experiences in web development and machine learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 ${
                  exp.color === "accent" ? "bg-accent" : "bg-primary"
                }`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="bg-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === "Current" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        exp.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                      }`}>
                        <exp.icon size={24} className={exp.color === "accent" ? "text-accent" : "text-primary"} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-primary">
                          <Building2 size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.descriptions.map((desc, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            exp.color === "accent" ? "bg-accent" : "bg-primary"
                          }`}></div>
                          <span className="text-muted-foreground leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Experience Overview</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-muted-foreground">Internships Completed</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-accent mb-2">6+</div>
              <p className="text-muted-foreground">Months Experience</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Technology Areas</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-accent mb-2">1</div>
              <p className="text-muted-foreground">Ongoing Project</p>
            </div>
          </div>
        </div>

        {/* Key Learning Areas */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Key Learning Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 hover-lift">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Web Development</h3>
              <p className="text-muted-foreground">
                Comprehensive experience in frontend technologies, responsive design, and modern development practices
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 hover-lift">
              <Code className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Programming</h3>
              <p className="text-muted-foreground">
                Strong foundation in multiple programming languages with focus on Java and web technologies
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 hover-lift">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Current hands-on experience with ML integration, Django development, and deployment workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;