import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileUp } from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  instructions: string;
}

const AssignmentView = () => {
  const { classId, assignmentId } = useParams();
  const [assignment] = useState<Assignment>({
    id: assignmentId || "1",
    title: "Derivatives Practice",
    description: "Practice problems on derivatives",
    dueDate: "2024-03-20",
    points: 100,
    instructions: "Complete all problems in the worksheet. Show your work clearly.",
  });

  const [submission, setSubmission] = useState("");

  const handleSubmit = () => {
    console.log("Submitting assignment:", { classId, assignmentId, submission });
    // TODO: Implement submission logic
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{assignment.title}</CardTitle>
            <CardDescription>
              Due: {new Date(assignment.dueDate).toLocaleDateString()} • {assignment.points} points
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Instructions</h3>
                <p className="text-muted-foreground">{assignment.instructions}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{assignment.description}</p>
              </div>

              <div className="border rounded-lg p-4 space-y-4">
                <Label htmlFor="submission">Your Work</Label>
                <Textarea
                  id="submission"
                  placeholder="Enter your answer here..."
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  className="min-h-[200px]"
                />
                
                <div className="flex gap-4">
                  <Button variant="outline" className="w-full">
                    <FileUp className="h-4 w-4 mr-2" />
                    Attach Files
                  </Button>
                  <Button className="w-full" onClick={handleSubmit}>
                    Turn In
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssignmentView;