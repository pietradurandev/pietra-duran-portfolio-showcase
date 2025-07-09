
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "pietradurandev@gmail.com",
      href: "mailto:pietradurandev@gmail.com",
      color: "bg-red-50 dark:bg-red-900/20 border-red-200 hover:bg-red-100"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "pietradurandev",
      href: "https://github.com/pietradurandev",
      color: "bg-gray-50 dark:bg-gray-900/20 border-gray-200 hover:bg-gray-100"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "pietra-duran",
      href: "https://www.linkedin.com/in/pietra-duran-bb916128b",
      color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 hover:bg-blue-100"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📬 Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className={`transition-all duration-300 ${method.color}`}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm w-fit">
                  {method.icon}
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">{method.value}</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    Connect
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Build Something Amazing Together?</h3>
              <p className="text-muted-foreground mb-6">
                Whether it's a project collaboration, mentorship opportunity, or just a friendly chat about tech, 
                I'd love to hear from you!
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <a href="mailto:pietradurandev@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send me an email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-muted-foreground text-sm">
            Made with ❤️ by Pietra Duran • © 2024
          </p>
        </div>
      </div>
    </section>
  );
};
