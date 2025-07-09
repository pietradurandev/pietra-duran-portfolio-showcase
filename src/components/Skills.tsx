
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Palette, Wrench, TrendingUp } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java ☕", "SQL 🐘", "JavaScript (React + Node.js) 🌐", "HTML / CSS 🎨", "Tailwind CSS"],
      color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git & GitHub", "VSCode", "Vercel (for deployments)"],
      color: "bg-green-50 dark:bg-green-900/20 border-green-200"
    },
    {
      title: "Currently Learning",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ["Advanced SQL queries", "React.js best practices", "Building REST APIs with Node.js", "Interface design with Figma (basic)"],
      color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🧠 Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in modern web technologies and constantly expanding my skillset
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${category.color}`}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
