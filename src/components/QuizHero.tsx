import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizHeroProps {
  onStart: () => void;
}

const QuizHero = ({ onStart }: QuizHeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--gradient-hero)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center"
        >
          <Brain className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
            Cuide da sua{" "}
            <span className="text-primary">saúde mental</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            Responda ao nosso questionário e descubra quais aspectos da sua saúde mental merecem atenção. Ao final, conectamos você com profissionais especializados.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={onStart}
            size="lg"
            className="text-lg px-10 py-6 rounded-xl font-body font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Iniciar Questionário
          </Button>
          <p className="text-sm text-muted-foreground">
            ⏱ Aproximadamente 3 minutos · 10 perguntas
          </p>
        </div>

        <div className="flex justify-center gap-8 pt-4">
          {["Hipocondria", "Ansiedade", "Anorexia", "Depressão", "Autismo"].map((item) => (
            <span key={item} className="text-xs font-body text-muted-foreground tracking-wide uppercase">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizHero;
