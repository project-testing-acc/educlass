import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, FileText, Book, MessageSquare } from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  points: number;
}

interface Material {
  id: string;
  title: string;
  type: "document" | "video" | "link";
  uploadedAt: string;
}

interface Announcement {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

const ClassView = () => {
  const { classId } = useParams();
  const [classData] = useState({
    name: "Mathematics 101",
    teacher: "Dr. Smith",
    description: "Introduction to Calculus",
    students: 25,
    code: "MATH101",
  });

  const [assignments] = useState<Assignment[]>([
    {
      id: "1",
      title: "Derivatives Practice",
      dueDate: "2024-03-20",
      points: 100,
    },
    {
      id: "2",
      title: "Limits Quiz",
      dueDate: "2024-03-25",
      points: 50,
    },
  ]);

  const [materials] = useState<Material[]>([
    {
      id: "1",
      title: "Introduction to Calculus Slides",
      type: "document",
      uploadedAt: "2024-03-15",
    },
    {
      id: "2",
      title: "Derivatives Video Lecture",
      type: "video",
      uploadedAt: "2024-03-16",
    },
  ]);

  const [announcements] = useState<Announcement[]>([
    {
      id: "1",
      content: "Welcome to Calculus! Please review the syllabus.",
      createdAt: "2024-03-15",
      author: "Dr. Smith",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>{classData.name}</CardTitle>
                <CardDescription>Class Code: {classData.code}</CardDescription>
              </div>
              <Button variant="outline" onClick={() => navigator.clipboard.writeText(classData.code)}>
                Copy Class Code
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Teacher: {classData.teacher}</p>
            <p className="mt-2">{classData.description}</p>
            <p className="mt-2">{classData.students} students enrolled</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="assignments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Materials
            </TabsTrigger>
            <TabsTrigger value="announcements" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Announcements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assignments">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Assignments</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  {assignments.map((assignment) => (
                    <Link
                      key={assignment.id}
                      to={`/class/${classId}/assignment/${assignment.id}`}
                      className="block"
                    >
                      <Card className="mb-4 hover:bg-accent/5">
                        <CardHeader>
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                          <CardDescription>
                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                            <span className="ml-4">Points: {assignment.points}</span>
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Class Materials</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Material
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  {materials.map((material) => (
                    <Card key={material.id} className="mb-4">
                      <CardHeader>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <CardDescription>
                          Type: {material.type}
                          <span className="ml-4">
                            Added: {new Date(material.uploadedAt).toLocaleDateString()}
                          </span>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Announcements</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Announcement
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  {announcements.map((announcement) => (
                    <Card key={announcement.id} className="mb-4">
                      <CardHeader>
                        <CardDescription className="text-sm">
                          {announcement.author} • {new Date(announcement.createdAt).toLocaleDateString()}
                        </CardDescription>
                        <p className="mt-2">{announcement.content}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClassView;