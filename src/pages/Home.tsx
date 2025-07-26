import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import rajaProfile from "@/assets/raja-profile-new.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-purple-light/20 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    👋 Hello, I'm Raja Ali Haider
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Digital Marketing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 block">
                    Strategist
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  I help startups and small businesses grow online through smart, data-driven marketing strategies. Specializing in SEO, content creation, and paid ad campaigns that deliver real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" className="group" asChild>
                  <Link to="/contact">
                    Let's Grow Your Brand
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-3xl opacity-20"></div>
                <img
                  src={rajaProfile}
                  alt="Raja Ali Haider"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground rounded-full p-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What I Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">SEO Optimization</h3>
                <p className="text-muted-foreground">
                  Boost your website's visibility and drive organic traffic with proven SEO strategies that get results.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-success/5 to-transparent">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-success/20 transition-colors">
                  <Zap className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Paid Ad Campaigns</h3>
                <p className="text-muted-foreground">
                  Maximize your ROI with targeted Meta ads and Google campaigns that convert visitors into customers.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-dark/5 to-transparent">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-dark/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-dark/20 transition-colors">
                  <Users className="h-8 w-8 text-purple-dark" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Brand Growth</h3>
                <p className="text-muted-foreground">
                  Build a strong online presence and grow your brand with content strategies that engage your audience.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's work together to create a digital marketing strategy that drives real growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;