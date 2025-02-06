import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AssignmentView = () => {
  const { classId, assignmentId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Assignment View</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Class ID: {classId}</p>
            <p>Assignment ID: {assignmentId}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssignmentView;