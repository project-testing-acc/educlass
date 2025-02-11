
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Timer } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer?: number;
}

interface Test {
  id: string;
  title: string;
  description: string;
  duration: number;
  totalPoints: number;
  questions: Question[];
}

const TestView = () => {
  const { classId, testId } = useParams();
  const [test] = useState<Test>({
    id: testId || "1",
    title: "Calculus Mid-Term",
    description: "Test covering derivatives and limits",
    duration: 60,
    totalPoints: 100,
    questions: [
      {
        id: "1",
        text: "What is the derivative of x²?",
        options: ["x", "2x", "2x²", "x½"],
        correctAnswer: 1,
      },
      {
        id: "2",
        text: "What is the limit of sin(x)/x as x approaches 0?",
        options: ["0", "1", "∞", "undefined"],
        correctAnswer: 1,
      },
    ],
  });

  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleSubmit = () => {
    console.log("Submitting test:", { classId, testId, answers });
    // TODO: Implement submission logic
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>{test.title}</CardTitle>
                <CardDescription>
                  Total Points: {test.totalPoints}
                </CardDescription>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Timer className="h-4 w-4 mr-2" />
                Duration: {test.duration} minutes
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {test.questions.map((question, index) => (
                <Card key={question.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Question {index + 1}
                    </CardTitle>
                    <p className="mt-2">{question.text}</p>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={answers[question.id]?.toString()}
                      onValueChange={(value) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [question.id]: parseInt(value),
                        }))
                      }
                    >
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={optionIndex.toString()}
                            id={`q${question.id}-${optionIndex}`}
                          />
                          <Label htmlFor={`q${question.id}-${optionIndex}`}>
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Button onClick={handleSubmit}>Submit Test</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestView;
