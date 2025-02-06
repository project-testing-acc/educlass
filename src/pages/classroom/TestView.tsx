import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestView = () => {
  const { classId, testId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Test View</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Class ID: {classId}</p>
            <p>Test ID: {testId}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestView;