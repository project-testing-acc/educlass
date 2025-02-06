import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ClassView = () => {
  const { classId } = useParams();
  const [classData] = useState({
    name: "Mathematics 101",
    teacher: "Dr. Smith",
    description: "Introduction to Calculus",
    students: 25,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{classData.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Teacher: {classData.teacher}</p>
            <p className="mt-2">{classData.description}</p>
            <p className="mt-2">{classData.students} students enrolled</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassView;