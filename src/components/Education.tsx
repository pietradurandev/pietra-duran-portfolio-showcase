
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🎓 Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-16 h-16 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">Bachelor in Computer Science</CardTitle>
                  <p className="text-muted-foreground font-medium">UNIFACS</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Expected 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my Bachelor's degree in Computer Science, focusing on software development, 
                  data structures, algorithms, and modern web technologies. Passionate about applying theoretical 
                  knowledge to practical, real-world projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
