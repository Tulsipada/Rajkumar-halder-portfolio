import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import rajkumarAvatar from "@/assets/rajkumar-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-card shadow-hero overflow-hidden border-4 border-white/20">
              <img
                src={rajkumarAvatar}
                alt="Rajkumar Halder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow">
              <span className="text-sm font-semibold">Available for Hire</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Software Engineer & ML Specialist
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Rajkumar Halder
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl">
              Master's student at Jadavpur University researching <span className="text-yellow-300 font-semibold">5G Networks</span> and
              building innovative solutions with <span className="text-yellow-300 font-semibold">Machine Learning</span> & <span className="text-yellow-300 font-semibold">Deep Learning</span>
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-yellow-300">GATE 2023</div>
                <div className="text-sm text-white/80">98.93 Percentile</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-yellow-300">CGPA</div>
                <div className="text-sm text-white/80">9.05/10.00</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-yellow-300">450+</div>
                <div className="text-sm text-white/80">Problems Solved</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9382894281</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>rjkumar8930@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kolkata, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-hero"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;