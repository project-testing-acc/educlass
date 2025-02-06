import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, BookOpen, ClipboardList, GraduationCap } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [classes] = useState([
    {
      id: "1",
      name: "Mathematics 101",
      teacher: "Dr. Smith",
      description: "Introduction to Calculus",
      students: 25,
    },
    {
      id: "2",
      name: "Physics 101",
      teacher: "Prof. Johnson",
      description: "Basic Physics Concepts",
      students: 30,
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={() => navigate("/class/create")}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Class
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{classes.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">55</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <Card
                  key={classItem.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/class/${classItem.id}`)}
                >
                  <CardHeader>
                    <CardTitle>{classItem.name}</CardTitle>
                    <CardDescription>{classItem.teacher}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{classItem.description}</p>
                    <p className="text-sm mt-2">{classItem.students} students enrolled</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;