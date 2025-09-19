import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="gradient-text">Ashmitha</span>
              <br />
              <span className="text-foreground">D Kotian</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Passionate Computer Science Engineering Student | Web Developer | Machine Learning Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Building responsive user interfaces and exploring the endless possibilities of technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/projects">
                <Button size="lg" className="text-lg px-8 py-6 hover-lift">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-lift">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <a
                href="https://github.com/ashmikotian7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover-lift group"
              >
                <Github size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashmitha-d-kotian-3a53a7259/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover-lift group"
              >
                <Linkedin size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:ashmithadkotian5@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover-lift group"
              >
                <Mail size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:7795287725"
                className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover-lift group"
              >
                <Phone size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <ArrowDown size={24} className="text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student with hands-on experience in web development 
                and growing expertise in machine learning. I love building responsive user interfaces using modern 
                technologies like React, TypeScript, and Django.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my Bachelor's degree at Shri Madhwa Vadiraja Institute of Technology and Management, 
                I'm eager to contribute to real-world tech solutions and work in collaborative environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me participating in tech fests, cultural events, and exploring 
                the latest developments in technology and machine learning.
              </p>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-card rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Final Year Engineering Student</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Specializing in Computer Science</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Web Development Enthusiast</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Machine Learning Explorer</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Multilingual: English, Kannada, Tulu, Hindi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;