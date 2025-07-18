
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      course: "Full Stack Development",
      batch: "FST-2024-01",
      feeStatus: "Paid",
      joinDate: "2024-01-15",
      avatar: "RS"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "+91 9876543211",
      course: "Data Science",
      batch: "DS-2024-01",
      feeStatus: "Pending",
      joinDate: "2024-01-20",
      avatar: "PP"
    },
    {
      id: 3,
      name: "Arjun Kumar",
      email: "arjun@example.com",
      phone: "+91 9876543212",
      course: "DevOps",
      batch: "DO-2024-01",
      feeStatus: "Paid",
      joinDate: "2024-01-10",
      avatar: "AK"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@example.com",
      phone: "+91 9876543213",
      course: "Full Stack Development",
      batch: "FST-2024-02",
      feeStatus: "Overdue",
      joinDate: "2024-02-01",
      avatar: "SR"
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-500";
      case "Pending":
        return "bg-yellow-500";
      case "Overdue":
        return "bg-destructive";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Students</h1>
          <p className="text-text-secondary">Manage and track all student information</p>
        </div>
        <div className="flex gap-3">
          <Link to="/students/search">
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Advanced Search
            </Button>
          </Link>
          <Link to="/students/new">
            <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Student
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <Input
                placeholder="Search students by name, email, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-soft"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="shadow-soft hover:shadow-neo transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary-light text-white font-medium">
                      {student.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-text-primary">{student.name}</CardTitle>
                    <CardDescription className="text-sm">{student.email}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Course:</span>
                  <span className="font-medium text-text-primary">{student.course}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Batch:</span>
                  <span className="font-medium text-text-primary">{student.batch}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Phone:</span>
                  <span className="font-medium text-text-primary">{student.phone}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Joined:</span>
                  <span className="font-medium text-text-primary">{student.joinDate}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t">
                <Badge className={`${getStatusColor(student.feeStatus)} text-white`}>
                  {student.feeStatus}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-6">
        <Button variant="outline">Load More Students</Button>
      </div>
    </div>
  );
};

export default Students;
