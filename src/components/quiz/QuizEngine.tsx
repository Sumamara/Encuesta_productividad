
import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import QuizWelcome from "./QuizWelcome";
import { sections } from "./quizData";
import { supabase } from "@/integrations/supabase/client";

const QuizEngine = () => {
    // Flattened total questions = 6 sections * 4 questions = 24
    const totalQuestions = sections.length * 4;

    const [currentGlobalIndex, setCurrentGlobalIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>(new Array(totalQuestions).fill(0));
    const [showResult, setShowResult] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [userName, setUserName] = useState("");
    const [startTime, setStartTime] = useState<number | null>(null);

    const handleStart = (name: string) => {
        setUserName(name);
        setHasStarted(true);
        setStartTime(Date.now());
    };

    // Derive current section and question from global index
    const currentSectionIndex = Math.floor(currentGlobalIndex / 4);
    const currentQuestionInGlobal = currentGlobalIndex % 4;
    const currentSection = sections[currentSectionIndex];
    const currentQuestionText = currentSection.questions[currentQuestionInGlobal];

    const saveResults = async (finalAnswers: number[]) => {
        if (!startTime) return;

        const endTime = Date.now();
        const durationSeconds = Math.floor((endTime - startTime) / 1000);
        const totalScore = finalAnswers.reduce((a, b) => a + b, 0);

        // Aggregate scores for JSON storage (optional, or just for local calc)
        const scores: Record<string, number> = {};
        sections.forEach((section, index) => {
            const startIndex = index * 4;
            const sectionAnswers = finalAnswers.slice(startIndex, startIndex + 4);
            const total = sectionAnswers.reduce((a, b) => a + b, 0);
            scores[section.id] = total;
        });

        // Flatten answers for columns q1...q24
        const flatAnswers: Record<string, number> = {};
        finalAnswers.forEach((score, index) => {
            flatAnswers[`q${index + 1}`] = score;
        });

        try {
            const { error } = await supabase
                .from('Tipo_productividad')
                .insert([
                    {
                        user_name: userName,
                        total_score: totalScore,
                        time_taken_seconds: durationSeconds,
                        // Section scores
                        agotado_score: scores['agotado'],
                        saturado_score: scores['saturado'],
                        improvisador_score: scores['improvisador'],
                        distraido_score: scores['distraido'],
                        procrastinador_score: scores['procrastinador'],
                        evitador_score: scores['evitador'],
                        ...flatAnswers // Spread q1...q24
                    }
                ]);

            if (error) {
                console.error('Error saving results:', error);
            } else {
                console.log('Results saved successfully!');
            }
        } catch (err) {
            console.error('Unexpected error saving results:', err);
        }
    };

    const handleAnswer = (score: number) => {
        // 1. Save answer
        const newAnswers = [...answers];
        newAnswers[currentGlobalIndex] = score;
        setAnswers(newAnswers);

        // 2. Auto-advance
        if (currentGlobalIndex < totalQuestions - 1) {
            setCurrentGlobalIndex(currentGlobalIndex + 1);
        } else {
            saveResults(newAnswers);
            setShowResult(true);
        }
    };

    const handleBack = () => {
        if (currentGlobalIndex > 0) {
            setCurrentGlobalIndex(currentGlobalIndex - 1);
        }
    };

    const handleRetake = () => {
        setAnswers(new Array(totalQuestions).fill(0));
        setCurrentGlobalIndex(0);
        setShowResult(false);
        setHasStarted(false);
        setStartTime(null);
    };

    // Aggregate scores for Result component
    const getAggregatedScores = () => {
        const scores: Record<string, number> = {};
        sections.forEach((section, index) => {
            const startIndex = index * 4;
            const sectionAnswers = answers.slice(startIndex, startIndex + 4);
            const total = sectionAnswers.reduce((a, b) => a + b, 0);
            scores[section.id] = total;
        });
        return scores;
    };

    if (!hasStarted) {
        return <QuizWelcome onStart={handleStart} />;
    }

    if (showResult) {
        return <QuizResult scores={getAggregatedScores()} onRetake={handleRetake} userName={userName} />;
    }

    return (
        <div className="w-full flex justify-center">
            <QuizQuestion
                key={currentGlobalIndex} // Force re-render for animation
                section={currentSection}
                question={currentQuestionText}
                onAnswer={handleAnswer}
                onBack={handleBack}
                currentGlobalIndex={currentGlobalIndex}
                totalQuestions={totalQuestions}
                selectedValue={answers[currentGlobalIndex] > 0 ? answers[currentGlobalIndex] : undefined}
            />
        </div>
    );
};

export default QuizEngine;
