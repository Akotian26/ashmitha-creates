import { Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal",
      university: "Visvesvaraya Technological University (VTU)",
      period: "2022 - Present",
      location: "Bantakal, Karnataka",
      status: "Final Year",
      description: "Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices.",
    },
    {
      degree: "Pre-University College (Science Stream)",
      institution: "Poornaprajna Pre-University College",
      university: "",
      period: "2020 - 2022",
      location: "Udupi, Karnataka",
      status: "Completed",
      description: "Specialized in Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation for engineering studies.",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">Education</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and educational background in computer science and technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="bg-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === "Final Year" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center text-primary mb-2">
                      <Award size={18} className="mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>

                    {edu.university && (
                      <p className="text-muted-foreground mb-3 font-medium">
                        {edu.university}
                      </p>
                    )}

                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Academic Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Engineering Focus</h3>
              <p className="text-muted-foreground">
                Specialized in Computer Science Engineering with emphasis on software development and machine learning
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Final Year</h3>
              <p className="text-muted-foreground">
                Currently in the final year of my engineering program, actively seeking opportunities to apply my skills
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Karnataka Based</h3>
              <p className="text-muted-foreground">
                Educated in Karnataka, India, with strong connections to the local tech community and culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;