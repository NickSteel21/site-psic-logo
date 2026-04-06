import { useState } from "react";
import QuizHero from "@/components/QuizHero";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import PsychologistList from "@/components/PsychologistList";
import { quizQuestions, Condition } from "@/data/quizQuestions";

type Stage = "hero" | "quiz" | "results" | "psychologists";

const Index = () => {
  const [stage, setStage] = useState<Stage>("hero");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selectedCondition, setSelectedCondition] = useState<Condition>("ansiedade");

  const handleStart = () => {
    setStage("quiz");
    setCurrentQuestion(0);
    setScores({});
  };

  const handleAnswer = (questionScores: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(questionScores).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStage("results");
    }
  };

  const handleContinue = (condition: Condition) => {
    setSelectedCondition(condition);
    setStage("psychologists");
  };

  switch (stage) {
    case "hero":
      return <QuizHero onStart={handleStart} />;
    case "quiz":
      return (
        <QuizQuestion
          question={quizQuestions[currentQuestion]}
          currentIndex={currentQuestion}
          total={quizQuestions.length}
          onAnswer={handleAnswer}
        />
      );
    case "results":
      return <QuizResults scores={scores} onContinue={handleContinue} />;
    case "psychologists":
      return (
        <PsychologistList
          condition={selectedCondition}
          onBack={() => setStage("results")}
        />
      );
  }
};

export default Index;
