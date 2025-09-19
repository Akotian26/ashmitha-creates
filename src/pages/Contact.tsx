import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashmithadkotian5@gmail.com",
      href: "mailto:ashmithadkotian5@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7795287725",
      href: "tel:7795287725",
      color: "accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ashmikotian7",
      href: "https://github.com/ashmikotian7",
      color: "primary"
    },  
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ashmitha-d-kotian-3a53a7259/",
      color: "accent"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:ashmithadkotian5@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply connect with fellow developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-8">Let's Connect</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 bg-card rounded-xl hover:bg-card-hover hover-lift transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.color === "accent" ? "bg-accent/10 group-hover:bg-accent/20" : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <item.icon size={24} className={item.color === "accent" ? "text-accent" : "text-primary"} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <MapPin className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground">
                Karnataka, India
                <br />
                <span className="text-sm">Available for remote opportunities worldwide</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-2xl p-8 hover-lift">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-lift">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  This will open your email client with the message pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quick Response Guaranteed</h3>
            <p className="text-muted-foreground mb-4">
              I typically respond to messages within 24 hours. For urgent matters, feel free to call me directly.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Response Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;