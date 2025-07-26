import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  PenTool, 
  BarChart3, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  const coreSkills = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      level: 95,
      description: "Complete SEO strategy including keyword research, on-page optimization, technical SEO, and link building.",
      highlights: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Optimization", "Link Building"]
    },
    {
      icon: Target,
      title: "Paid Advertising (Meta & Google)",
      level: 90,
      description: "Creating and managing high-converting ad campaigns across Facebook, Instagram, and Google Ads platforms.",
      highlights: ["Facebook Ads", "Instagram Ads", "Google Ads", "Campaign Optimization", "A/B Testing"]
    },
    {
      icon: TrendingUp,
      title: "Content Marketing & Strategy",
      level: 88,
      description: "Developing content strategies that engage audiences and drive conversions through storytelling.",
      highlights: ["Content Strategy", "Blog Writing", "Social Media Content", "Email Marketing", "Brand Storytelling"]
    }
  ];

  const additionalSkills = [
    { name: "Analytics & Reporting", level: 85, icon: BarChart3 },
    { name: "Social Media Marketing", level: 90, icon: Users },
    { name: "Email Marketing", level: 80, icon: PenTool },
    { name: "Website Optimization", level: 85, icon: Globe },
    { name: "Marketing Automation", level: 75, icon: Zap },
  ];

  const achievements = [
    "Increased organic traffic by 300% for a startup client",
    "Generated 5x ROAS on Meta ad campaigns",
    "Helped 25+ small businesses establish online presence",
    "Created content strategies that increased engagement by 200%",
    "Reduced customer acquisition cost by 40% through optimization"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">Skills & Expertise</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            What I Bring to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 block">
              Your Business
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With years of experience in digital marketing, I've developed expertise across multiple channels and strategies that drive real business growth.
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Expertise</h2>
          <div className="space-y-8">
            {coreSkills.map((skill, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <skill.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{skill.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Progress value={skill.level} className="w-32" />
                            <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg">{skill.description}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Key Areas:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {skill.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Additional Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium text-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-success/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Tools & Technologies</h2>
          <Card className="border-0 bg-gradient-to-br from-purple-dark/5 to-transparent">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Analytics</h3>
                  <div className="space-y-2">
                    {["Google Analytics", "Google Search Console", "Facebook Analytics", "Hotjar"].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">SEO Tools</h3>
                  <div className="space-y-2">
                    {["SEMrush", "Ahrefs", "Moz", "Screaming Frog"].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Design</h3>
                  <div className="space-y-2">
                    {["Canva", "Adobe Creative Suite", "Figma", "Photoshop"].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Automation</h3>
                  <div className="space-y-2">
                    {["Mailchimp", "Hootsuite", "Buffer", "Zapier"].map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-purple-light/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Put These Skills to Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise can help drive growth for your business through strategic digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="group" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;