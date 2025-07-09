import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, Rocket, Github, ExternalLink, Calendar } from "lucide-react";

// Add your projects here
const projects = [
  // Example project structure - uncomment and modify to add real projects:
  // {
  //   title: "My Awesome App",
  //   description: "A full-stack web application built with React and Node.js that helps users manage their daily tasks.",
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   githubUrl: "https://github.com/pietradurandev/awesome-app",
  //   liveUrl: "https://awesome-app.vercel.app",
  //   status: "Completed",
  //   date: "2024"
  // },
];

export const Projects = () => {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">💼 Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {hasProjects ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Construction className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    None yet – but learning fast and building skills daily!
                  </p>
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    Stay tuned for updates 🚧
                  </Badge>
                </div>
                
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    <span className="font-semibold">What's Coming</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently working on building my first full-stack web application using React and Node.js. 
                    Follow my journey as I turn my learning into real projects!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
