import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Calendar, Clock, Video, Phone, Mail, ExternalLink } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const schedulingOptions = [
    {
      id: "google-calendar",
      title: "Google Calendar",
      description: "Direct calendar booking",
      icon: Calendar,
      color: "bg-green-600 hover:bg-green-700",
      href: "mailto:rjkumar8930@gmail.com?subject=Schedule%20Call&body=Hi%20Rajkumar,%0D%0AI%20would%20like%20to%20schedule%20a%20call%20with%20you.%0D%0A%0D%0APlease%20suggest%20some%20available%20time%20slots.%0D%0A%0D%0ABest%20regards",
      features: ["Email scheduling", "Flexible timing", "Direct communication"]
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Quick chat to arrange timing",
      icon: Phone,
      color: "bg-green-500 hover:bg-green-600",
      href: "https://wa.me/919382894281?text=Hi%20Rajkumar,%20I%20would%20like%20to%20schedule%20a%20call%20with%20you.",
      features: ["Instant messaging", "Quick response", "Flexible scheduling"]
    }
  ];

  const meetingTypes = [
    {
      title: "Project Discussion",
      duration: "30 min",
      description: "Discuss ML/AI projects, collaboration opportunities"
    },
    {
      title: "Technical Consultation",
      duration: "45 min",
      description: "Deep dive into technical challenges and solutions"
    },
    {
      title: "Research Collaboration",
      duration: "60 min",
      description: "Explore research opportunities in 5G networks"
    }
  ];

  if (!isOpen) return null;

  return (
         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
       <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 shadow-glow border-slate-700">
                 {/* Header */}
         <div className="p-6 border-b border-slate-700">
           <div className="flex items-center justify-between">
             <div>
               <h2 className="text-2xl font-bold text-white mb-2">Schedule a Call</h2>
               <p className="text-slate-300">Choose your preferred scheduling method</p>
             </div>
             <Button
               variant="ghost"
               size="sm"
               onClick={onClose}
               className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full p-2"
             >
               <X className="w-6 h-6" />
             </Button>
           </div>
         </div>

        <div className="p-6">
                     {/* Meeting Types */}
           <div className="mb-8">
             <h3 className="text-lg font-semibold text-white mb-4">Meeting Types</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {meetingTypes.map((type, index) => (
                 <div key={index} className="p-4 bg-slate-800 rounded-lg border border-slate-600">
                   <div className="flex items-center gap-3 mb-2">
                     <Clock className="w-5 h-5 text-blue-400" />
                     <Badge variant="outline" className="text-xs border-blue-400 text-blue-400">
                       {type.duration}
                     </Badge>
                   </div>
                   <h4 className="font-semibold text-white mb-1">{type.title}</h4>
                   <p className="text-sm text-slate-300">{type.description}</p>
                 </div>
               ))}
             </div>
           </div>

                     {/* Scheduling Options */}
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-white mb-4">Choose Scheduling Method</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
               {schedulingOptions.map((option) => (
                 <Card
                   key={option.id}
                   className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                     selectedOption === option.id
                       ? 'ring-2 ring-blue-400 bg-slate-700'
                       : 'bg-slate-800 hover:bg-slate-700 border-slate-600'
                   }`}
                   onClick={() => setSelectedOption(option.id)}
                 >
                   <div className="text-center">
                     <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                       <option.icon className="w-8 h-8 text-white" />
                     </div>
                     <h4 className="text-lg font-semibold text-white mb-2">{option.title}</h4>
                     <p className="text-sm text-slate-300 mb-4">{option.description}</p>
                     
                     <div className="space-y-2 mb-4">
                       {option.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                           {feature}
                         </div>
                       ))}
                     </div>

                    <a
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button
                        className={`w-full ${option.color} text-white shadow-hero`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                                                 {option.id === 'google-calendar' ? 'Send Email' : 'Open WhatsApp'}
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

                     {/* Alternative Contact */}
           {/* <div className="text-center p-6 bg-slate-800 rounded-lg border border-slate-600">
             <h3 className="text-lg font-semibold text-white mb-2">Prefer Direct Contact?</h3>
             <p className="text-slate-300 mb-4">
               You can also reach out directly for scheduling
             </p>
             <div className="flex flex-wrap gap-3 justify-center">
               <a href="mailto:rjkumar8930@gmail.com">
                 <Button variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white">
                   <Mail className="w-4 h-4 mr-2" />
                   Email
                 </Button>
               </a>
               <a href="tel:+919382894281">
                 <Button variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white">
                   <Phone className="w-4 h-4 mr-2" />
                   Call
                 </Button>
               </a>
             </div>
           </div> */}
        </div>
      </Card>
    </div>
  );
};

export default ScheduleModal;
