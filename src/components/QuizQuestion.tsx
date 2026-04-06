import { motion } from "framer-motion";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentIndex: number;
  total: number;
  onAnswer: (scores: Record<string, number>) => void;
}

const QuizQuestion = ({ question, currentIndex, total, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl w-full space-y-8"
      >
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground font-body">
            <span>Pergunta {currentIndex + 1}</span>
            <span>{currentIndex + 1} / {total}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: `${(currentIndex / total) * 100}%` }}
              animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-snug">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onAnswer(option.scores)}
              className="w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-200 font-body text-card-foreground group"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm md:text-base">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizQuestion;
