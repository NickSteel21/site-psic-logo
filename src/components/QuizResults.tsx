import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Condition, conditionLabels, conditionDescriptions } from "@/data/quizQuestions";

interface QuizResultsProps {
  scores: Record<string, number>;
  onContinue: (condition: Condition) => void;
}

const QuizResults = ({ scores, onContinue }: QuizResultsProps) => {
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0);

  const topCondition = sorted[0]?.[0] as Condition;
  const maxScore = sorted[0]?.[1] || 0;

  const getLevel = (score: number) => {
    if (score <= 3) return { label: "Baixo", color: "text-primary" };
    if (score <= 6) return { label: "Moderado", color: "text-accent" };
    return { label: "Elevado", color: "text-destructive" };
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full space-y-8 py-12"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center"
          >
            <Shield className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Seus Resultados
          </h2>
          <p className="text-muted-foreground font-body">
            Com base nas suas respostas, identificamos as seguintes tendências:
          </p>
        </div>

        {/* Score bars */}
        <div className="space-y-4">
          {sorted.map(([condition, score], idx) => {
            const level = getLevel(score);
            const percentage = Math.min((score / 12) * 100, 100);
            return (
              <motion.div
                key={condition}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-body font-medium text-foreground">
                    {conditionLabels[condition as Condition]}
                  </span>
                  <span className={`text-sm font-semibold font-body ${level.color}`}>
                    {level.label}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Top condition description */}
        {topCondition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="p-6 rounded-2xl bg-card border border-border space-y-3"
          >
            <h3 className="font-display font-semibold text-lg text-foreground">
              Área de maior atenção: {conditionLabels[topCondition]}
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {conditionDescriptions[topCondition]}
            </p>
          </motion.div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground font-body text-center leading-relaxed">
          ⚠️ Este questionário não substitui uma avaliação profissional. Os resultados são indicativos e têm caráter informativo.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center space-y-4"
        >
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
            <h3 className="font-display font-semibold text-xl text-foreground">
              Fale com um especialista
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              Por apenas <span className="font-bold text-primary text-lg">R$ 10,00</span>, encaminharemos você para um contato direto com 3 psicólogos especializados em{" "}
              <span className="font-semibold text-foreground">{conditionLabels[topCondition]}</span>.
            </p>
            <Button
              onClick={() => onContinue(topCondition)}
              size="lg"
              className="mt-2 rounded-xl font-body font-semibold gap-2"
            >
              Ver Psicólogos Disponíveis
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizResults;
