import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.send(
        "service_7qr4w2x", // replace with your EmailJS service ID
        "template_ke3gs1f", // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "P3vMVupBbhJt1vQUG" // replace with your EmailJS public key
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "haiderra97@gmail.com",
      description: "Send me an email anytime",
      href: "mailto:haiderra97@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3086141745",
      description: "Call or WhatsApp me",
      href: "tel:+923086141745"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Faisalabad, Pakistan",
      description: "Available for remote work globally",
      href: null
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 Hours",
      description: "I typically respond quickly",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/raja-haider-143a72291/",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      name: "instagram",
      href: "https://www.instagram.com/itx_haider22/",
      color: "text-blue-400"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      href: "https://wa.me/923086141745",
      color: "text-green-500"
    }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects start showing results within 30-60 days, with full implementation taking 2-3 months depending on scope."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients globally and am comfortable with different time zones and communication preferences."
    },
    {
      question: "What's included in your monthly reporting?",
      answer: "Detailed analytics, performance metrics, insights, and strategic recommendations for the following month."
    },
    {
      question: "Can you help with existing campaigns?",
      answer: "Absolutely! I can audit and optimize your existing campaigns to improve their performance and ROI."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let's Work
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 block">
              Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to grow your business? I'd love to discuss your project and explore how we can achieve your digital marketing goals together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Send Me a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, goals, and how I can help..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full group" disabled={loading}>
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-primary hover:text-primary/80 font-medium block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-primary font-medium">{info.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <Card className="border-0 bg-gradient-to-br from-success/5 to-transparent">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium text-foreground">Free Initial Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium text-foreground">24/7 Support Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium text-foreground">Custom Solutions Only</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about working together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-purple-dark/5 to-transparent">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait - every day your competitors are getting ahead. Let's create a strategy that puts you in the lead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:raja.alihaider@email.com">Send Email</a>
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                WhatsApp Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;