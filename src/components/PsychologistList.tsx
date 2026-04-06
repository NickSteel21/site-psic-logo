import { motion } from "framer-motion";
import { MessageCircle, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Condition, conditionLabels } from "@/data/quizQuestions";
import { psychologistsByCondition } from "@/data/psychologists";

interface PsychologistListProps {
  condition: Condition;
  onBack: () => void;
}

const PsychologistList = ({ condition, onBack }: PsychologistListProps) => {
  const psychologists = psychologistsByCondition[condition] || [];

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos resultados
          </button>

          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Psicólogos Especializados
            </h2>
            <p className="text-muted-foreground font-body">
              Profissionais recomendados para{" "}
              <span className="font-semibold text-primary">{conditionLabels[condition]}</span>
            </p>
          </div>
        </motion.div>

        {/* Payment Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-2xl border border-accent/30 bg-accent/5 flex items-start gap-4"
        >
          <Lock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <div className="font-body">
            <p className="text-sm font-semibold text-foreground">Taxa de encaminhamento: R$ 10,00</p>
            <p className="text-xs text-muted-foreground mt-1">
              Após o pagamento, você receberá o contato direto dos profissionais abaixo para agendar sua consulta.
            </p>
          </div>
        </motion.div>

        {/* Psychologist Cards */}
        <div className="space-y-4">
          {psychologists.map((psych, idx) => (
            <motion.div
              key={psych.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.15 }}
              className="p-6 rounded-2xl border border-border bg-card space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  {psych.photo}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-card-foreground">
                    {psych.name}
                  </h3>
                  <p className="text-sm text-primary font-body font-medium">{psych.specialty}</p>
                  <p className="text-xs text-muted-foreground font-body">CRP: {psych.crp}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">{psych.description}</p>
              <Button
                variant="outline"
                className="w-full rounded-xl font-body gap-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Entrar em Contato
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Payment Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-4 pt-4"
        >
          <Button
            size="lg"
            className="w-full max-w-md rounded-xl font-body font-semibold text-lg py-6 shadow-lg"
          >
            Pagar R$ 10,00 e Liberar Contatos
          </Button>
          <p className="text-xs text-muted-foreground font-body">
            🔒 Pagamento seguro · Acesso imediato aos contatos
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PsychologistList;
