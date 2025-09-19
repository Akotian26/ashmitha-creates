import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, GraduationCap, Briefcase, Code, FolderOpen, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/", icon: User },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-surface/90 backdrop-blur-md border-b border-border z-50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-heading font-semibold text-lg text-foreground">
              Ashmitha D Kotian
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;