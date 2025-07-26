import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  PenTool, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Zap,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Strategy & Implementation",
      description: "Comprehensive SEO solutions to boost your website's visibility and drive organic traffic that converts.",
      features: [
        "Complete SEO audit and strategy",
        "Keyword research and analysis", 
        "On-page optimization",
        "Technical SEO improvements",
        "Content optimization",
        "Link building campaigns",
        "Monthly reporting and analysis"
      ],
      pricing: "Starting at $100/month",
      popular: false
    },
    {
      icon: Target,
      title: "Paid Advertising Management",
      description: "High-converting Meta and Google ad campaigns that maximize your ROI and drive qualified leads.",
      features: [
        "Campaign strategy and setup",
        "Facebook & Instagram ads",
        "Google Ads management",
        "Audience research and targeting",
        "Creative design and copy",
        "A/B testing and optimization",
        "Detailed performance reporting"
      ],
      pricing: "Starting at $200/month",
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Content Marketing & Strategy", 
      description: "Engaging content strategies that build brand authority and connect with your target audience.",
      features: [
        "Content strategy development",
        "Blog writing and optimization",
        "Social media content creation",
        "Email marketing campaigns",
        "Brand storytelling",
        "Content calendar planning",
        "Performance tracking"
      ],
      pricing: "Starting at $150/month",
      popular: false
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Complete social media management to build your brand presence and engage your community.",
      features: [
        "Social media strategy",
        "Content creation and scheduling",
        "Community management",
        "Influencer outreach",
        "Social media advertising",
        "Analytics and reporting",
        "Brand reputation management"
      ],
      pricing: "Starting at $200/month",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Digital Marketing Consulting",
      description: "Strategic consulting to optimize your entire digital marketing approach and maximize growth.",
      features: [
        "Marketing audit and analysis",
        "Strategy development",
        "Channel recommendations",
        "Performance optimization",
        "Team training and workshops",
        "Ongoing support and guidance",
        "Custom solution development"
      ],
      pricing: "Starting at $20/hour",
      popular: false
    },
    {
      icon: Globe,
      title: "Complete Digital Transformation",
      description: "End-to-end digital marketing solutions for businesses ready to scale their online presence.",
      features: [
        "Comprehensive marketing strategy",
        "Multi-channel campaign management",
        "Website optimization",
        "Marketing automation setup",
        "Analytics and tracking",
        "Ongoing optimization",
        "Dedicated account management"
      ],
      pricing: "Custom pricing",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start with understanding your business, goals, and target audience to create a customized strategy."
    },
    {
      step: "02", 
      title: "Implementation",
      description: "Execute the strategy with careful attention to detail and industry best practices."
    },
    {
      step: "03",
      title: "Optimization",
      description: "Continuously monitor and optimize campaigns based on data and performance insights."
    },
    {
      step: "04",
      title: "Scale & Grow",
      description: "Scale successful strategies and explore new opportunities for continued growth."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Digital Marketing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 block">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to help your business thrive in the competitive online landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`relative group hover:shadow-lg transition-all duration-300 ${
              service.popular ? 'ring-2 ring-primary/20 border-primary/20' : ''
            }`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.pricing}</span>
                  </div>
                  <Button 
                    variant={service.popular ? "gradient" : "outline"} 
                    className="w-full group"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">My Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your digital marketing campaigns deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why Choose My Services?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fast Results</h3>
                <p className="text-muted-foreground">
                  See measurable improvements in your digital presence within the first 30 days.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-success/5 to-transparent">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Every decision is backed by data and analytics to ensure optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-dark/5 to-transparent">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-dark/10 rounded-full flex items-center justify-center mx-auto">
                  <PenTool className="h-8 w-8 text-purple-dark" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored strategies that fit your specific business needs and goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and create a strategy that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/skills">View My Skills</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;