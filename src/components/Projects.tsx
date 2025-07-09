
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, Rocket } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">💼 Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};
