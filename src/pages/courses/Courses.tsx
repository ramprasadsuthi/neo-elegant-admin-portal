
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Clock, DollarSign, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "Full Stack Development",
      description: "Complete web development course covering frontend and backend technologies",
      duration: "6 months",
      fee: "₹15,000",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      students: 45,
      batches: 3,
      status: "Active"
    },
    {
      id: 2,
      title: "Data Science",
      description: "Comprehensive data science program with machine learning and analytics",
      duration: "8 months",
      fee: "₹18,000",
      techStack: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
      students: 32,
      batches: 2,
      status: "Active"
    },
    {
      id: 3,
      title: "DevOps Engineering",
      description: "Learn DevOps practices, CI/CD, and cloud technologies",
      duration: "4 months",
      fee: "₹12,000",
      techStack: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      students: 28,
      batches: 2,
      status: "Active"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications",
      duration: "5 months",
      fee: "₹16,000",
      techStack: ["React Native", "Flutter", "Firebase"],
      students: 15,
      batches: 1,
      status: "Draft"
    }
  ]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Courses</h1>
          <p className="text-text-secondary">Manage course offerings and curriculum</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Course
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Total Courses</p>
                <p className="text-2xl font-bold text-text-primary">{courses.length}</p>
              </div>
              <div className="w-10 h-10 bg-primary rounded-soft flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Total Students</p>
                <p className="text-2xl font-bold text-text-primary">120</p>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-soft flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Active Batches</p>
                <p className="text-2xl font-bold text-text-primary">8</p>
              </div>
              <div className="w-10 h-10 bg-accent rounded-soft flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Revenue</p>
                <p className="text-2xl font-bold text-text-primary">₹18.5L</p>
              </div>
              <div className="w-10 h-10 bg-yellow-500 rounded-soft flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-soft hover:shadow-neo transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-text-primary">{course.title}</CardTitle>
                  <CardDescription className="mt-2">{course.description}</CardDescription>
                </div>
                <Badge className={course.status === "Active" ? "bg-green-500" : "bg-gray-500"}>
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary">Duration:</span>
                  <div className="font-medium text-text-primary">{course.duration}</div>
                </div>
                <div>
                  <span className="text-text-secondary">Fee:</span>
                  <div className="font-medium text-text-primary">{course.fee}</div>
                </div>
                <div>
                  <span className="text-text-secondary">Students:</span>
                  <div className="font-medium text-text-primary">{course.students}</div>
                </div>
                <div>
                  <span className="text-text-secondary">Batches:</span>
                  <div className="font-medium text-text-primary">{course.batches}</div>
                </div>
              </div>
              
              <div>
                <span className="text-text-secondary text-sm">Tech Stack:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {course.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
