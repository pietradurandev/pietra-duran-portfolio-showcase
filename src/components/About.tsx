
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Globe, BookOpen, Target, Languages } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">👩‍💻 About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Age</h3>
              <p className="text-muted-foreground">19 years old</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">From</h3>
              <p className="text-muted-foreground">Brazil 🇧🇷</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Field</h3>
              <p className="text-muted-foreground">Computer Science</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Current Focus</h3>
              <p className="text-muted-foreground">Full-stack development</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow md:col-span-2">
            <CardContent className="p-6 text-center">
              <div className="bg-pink-100 dark:bg-pink-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Languages className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-muted-foreground">Portuguese (native) • English (advanced)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
