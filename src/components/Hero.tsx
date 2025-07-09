
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/lovable-uploads/0374daad-5a26-4705-89fc-398322abae55.png"
                alt="Pietra Duran"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4">
              <span className="text-2xl">👩‍💻</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Pietra! 
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A motivated and creative technology student passionate about solving real-world problems through code.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border">
                <span className="text-sm font-medium">💻 Learning Java, SQL, React & Node.js</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border">
                <span className="text-sm font-medium">🌱 Always growing with tech</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/pietradurandev" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/pietra-duran-bb916128b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:pietradurandev@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <Button onClick={() => scrollToSection('about')} className="group">
              Learn More About Me
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
