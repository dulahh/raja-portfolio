import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Heart, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import raja from "@/assets/WhatsApp Image 2025-07-26 at 13.57.02_16aeb6dc.jpg"

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">About Me</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Passionate About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 block">
                  Digital Growth
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm Raja Ali Haider, a digital marketing strategist and freelancer who specializes in helping startups and small businesses establish their online presence and drive meaningful growth through strategic digital marketing.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={raja}
                alt="hello.jpg"
                className="w-72 h-72 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4">
                <Heart className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="border-0 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">My Journey</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  My passion for digital marketing began during my studies when I discovered the power of online platforms to connect businesses with their ideal customers. What started as curiosity about how brands grow online has evolved into a dedicated career helping businesses thrive in the digital space.
                </p>
                <p className="mb-4">
                  I believe that every business, regardless of size, deserves to have a strong online presence. That's why I focus on working with startups and small businesses – helping them compete with larger companies through smart, data-driven marketing strategies that deliver real results.
                </p>
                <p>
                  When I'm not crafting marketing strategies, you'll find me staying up-to-date with the latest tech trends, writing creative content, or exploring new ways to help businesses connect with their audiences more effectively.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Pre-Engineering</h3>
                    <Badge variant="outline">2020-2022</Badge>
                  </div>
                  <p className="text-primary font-medium">Punjab Group of Colleges</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on analytical thinking and problem-solving skills that I now apply to digital marketing strategies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Matriculation</h3>
                    <Badge variant="outline">2018-2020</Badge>
                  </div>
                  <p className="text-primary font-medium">Enamour High School</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Built a strong foundation in communication and critical thinking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Digital Marketing Strategist</h3>
                    <Badge variant="outline">2021-Present</Badge>
                  </div>
                  <p className="text-primary font-medium">Freelancer</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Helping startups and small businesses grow their online presence through SEO, content marketing, and paid advertising campaigns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Content Creator & Writer</h3>
                    <Badge variant="outline">2020-Present</Badge>
                  </div>
                  <p className="text-primary font-medium">Various Platforms</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Creating engaging content and developing brand narratives that resonate with target audiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values & Approach */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">My Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I believe in building lasting partnerships with my clients through transparency, results, and genuine care for their success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Results-Driven</h3>
                <p className="text-muted-foreground">
                  Every strategy is designed with clear, measurable goals that align with your business objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-success/5 to-transparent">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Collaborative</h3>
                <p className="text-muted-foreground">
                  I work closely with you to understand your brand, audience, and goals for authentic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-purple-dark/5 to-transparent">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-purple-dark/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-purple-dark" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Quality Focused</h3>
                <p className="text-muted-foreground">
                  I prioritize quality over quantity, ensuring every campaign delivers maximum impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-purple-light/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? I'd love to discuss how we can achieve your digital marketing goals together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View My Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;