import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { useState } from "react";
import ScheduleModal from "./ScheduleModal";

const Contact = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "rjkumar8930@gmail.com",
      href: "mailto:rjkumar8930@gmail.com",
      description: "Preferred for professional inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9382894281",
      href: "tel:+919382894281",
      description: "Available for urgent matters"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolkata, India",
      href: "https://www.google.com/maps/place/Desbandhu+Rd,+Kolkata,+West+Bengal+700032/@22.4874639,88.3706735,17z/data=!3m1!4b1!4m7!3m6!1s0x3a027116dd4d2813:0xd6772555e848ddbb!8m2!3d22.487459!4d88.3755444!15sCg9kZXNoYmFuZGh1IHJvYWSSAQVyb3V0ZeABAA!16s%2Fg%2F1tg_7x5_?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional network and career updates",
      href: "https://www.linkedin.com/in/rajkumar-halder-499802266/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Code repositories and projects",
      href: "https://github.com/Rj8930",
      color: "bg-gray-900 hover:bg-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-white">Let's Work Together</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in ML, AI, and Network Engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <a
                  href={method.href}
                  className="text-yellow-300 hover:text-white transition-colors block mb-2 font-medium"
                >
                  {method.value}
                </a>
                <p className="text-sm text-white/90 font-medium">{method.description}</p>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center transition-colors`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{social.title}</h3>
                    <p className="text-sm text-white/90 font-medium">{social.description}</p>
                  </div>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="sm"
                      className={`${social.title === 'LinkedIn' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white shadow-hero font-semibold transition-all duration-300`}
                    >
                      Connect
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <MessageCircle className="w-16 h-16 text-primary-glow mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Conversation?</h3>
            <p className="text-white font-medium mb-8 max-w-2xl mx-auto">
              Whether you're looking for a collaborator on ML projects, need expertise in 5G networks,
              or want to discuss research opportunities, I'm always excited to connect with fellow tech enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:rjkumar8930@gmail.com?subject=Hello%20Rajkumar&body=Hi%20Rajkumar,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-hero"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </a>
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:bg-gradient-to-r hover:from-primary/90 hover:to-primary-glow/90 shadow-hero font-semibold transition-all duration-300"
                onClick={() => setIsScheduleModalOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Schedule Modal */}
      <ScheduleModal 
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </section>
  );
};

export default Contact;