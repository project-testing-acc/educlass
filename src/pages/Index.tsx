import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HeroImage from "@/components/landing/HeroImage";
import FeatureCard from "@/components/landing/FeatureCard";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          >
            EduClass
          </motion.div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-primary hover:text-primary-hover"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-primary hover:bg-primary-hover text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Welcome to the Future of Learning
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transform Your Teaching Experience
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Create engaging virtual classrooms, manage assignments, and track student progress - all in one place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button
                onClick={() => navigate("/signup")}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg"
              >
                Start Teaching Today
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/demo")}
                className="border-primary text-primary hover:bg-primary/5"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </section>

        <HeroImage />

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduClass?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Easy to Use"
              description="Intuitive interface designed for both teachers and students"
              icon="Layout"
            />
            <FeatureCard
              title="Powerful Tools"
              description="Everything you need to create and manage your virtual classroom"
              icon="Tool"
            />
            <FeatureCard
              title="Track Progress"
              description="Monitor student engagement and performance in real-time"
              icon="LineChart"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;