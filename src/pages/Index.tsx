import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/50">
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;