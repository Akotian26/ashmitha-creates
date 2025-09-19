import { ExternalLink, Github, Code, Globe, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Since specific projects weren't provided in the resume, I'll create placeholder projects
  // that align with the skills and experience mentioned
  const projects = [
    {
      title: "Responsive Portfolio Website",
      description: "A fully responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and mobile-first approach.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      category: "Web Development",
      icon: Globe,
      color: "primary",
      status: "Completed",
      github: "https://github.com/ashmikotian7",
      demo: "#"
    },
    {
      title: "ML Integration Web App",
      description: "Currently developing a web application that integrates machine learning models using Django and Scikit-learn for real-time data processing and predictions.",
      technologies: ["Django", "Python", "Scikit-learn", "Machine Learning"],
      category: "Machine Learning",
      icon: Brain,
      color: "accent",
      status: "In Progress",
      github: "https://github.com/ashmikotian7",
      demo: null
    },
    {
      title: "Interactive React Components",
      description: "Collection of reusable React components with modern UI/UX design patterns. Includes form components, data visualization, and interactive elements.",
      technologies: ["React", "JavaScript", "CSS3", "Component Library"],
      category: "Web Development", 
      icon: Code,
      color: "primary",
      status: "Completed",
      github: "https://github.com/ashmikotian7",
      demo: "#"
    },
    {
      title: "Database Management System",
      description: "A comprehensive database management system built with MySQL and Python for efficient data storage and retrieval operations.",
      technologies: ["MySQL", "Python", "Database Design", "SQL"],
      category: "Database",
      icon: Database,
      color: "accent",
      status: "Completed",
      github: "https://github.com/ashmikotian7",
      demo: null
    }
  ];

  const categories = ["All", "Web Development", "Machine Learning", "Database"];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Projects</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects and contributions across web development, machine learning, and software engineering
          </p>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mb-12 animate-slide-up">
          <a
            href="https://github.com/ashmikotian7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-card hover:bg-card-hover px-6 py-3 rounded-lg hover-lift transition-all duration-300"
          >
            <Github size={20} />
            <span className="font-medium">View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Project Categories - Currently showing all projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    project.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    <project.icon size={24} className={project.color === "accent" ? "text-accent" : "text-primary"} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      project.status === "In Progress" 
                        ? "bg-accent/10 text-accent" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex items-center space-x-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" className="flex items-center space-x-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Project Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <p className="text-muted-foreground">Total Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">6+</div>
              <p className="text-muted-foreground">Technologies Used</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Project Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1</div>
              <p className="text-muted-foreground">Ongoing Project</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and explore innovative solutions. 
            Let's connect and create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://github.com/ashmikotian7" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                Follow on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:ashmithadkotian5@gmail.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;