
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FeesPending = () => {
  const pendingStudents = [
    {
      id: 1,
      name: "Arjun Kumar",
      course: "DevOps",
      batch: "DO-2024-01",
      pendingAmount: "₹18,000",
      dueDate: "2024-01-25",
      daysPending: 5,
      phone: "+91 9876543212",
      email: "arjun@example.com"
    },
    {
      id: 2,
      name: "Neha Singh",
      course: "Full Stack Development",
      batch: "FST-2024-02",
      pendingAmount: "₹15,000",
      dueDate: "2024-01-20",
      daysPending: 10,
      phone: "+91 9876543213",
      email: "neha@example.com"
    },
    {
      id: 3,
      name: "Vikram Reddy",
      course: "Data Science",
      batch: "DS-2024-01",
      pendingAmount: "₹12,000",
      dueDate: "2024-01-15",
      daysPending: 15,
      phone: "+91 9876543214",
      email: "vikram@example.com"
    }
  ];

  const getDueSeverity = (days: number) => {
    if (days <= 7) return "bg-yellow-500";
    if (days <= 14) return "bg-orange-500";
    return "bg-destructive";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/fees">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-text-primary">Pending Dues</h1>
          <p className="text-text-secondary">Students with outstanding fee payments</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Send Email Reminders
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Send SMS Reminders
          </Button>
        </div>
      </div>

      {/* Summary Card */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-text-primary">Dues Summary</CardTitle>
          <CardDescription>Overview of pending payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">₹45,000</div>
              <div className="text-text-secondary">Total Pending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary">{pendingStudents.length}</div>
              <div className="text-text-secondary">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">12</div>
              <div className="text-text-secondary">Avg Days Overdue</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending Students */}
      <div className="space-y-4">
        {pendingStudents.map((student) => (
          <Card key={student.id} className="shadow-soft hover:shadow-neo transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary-light text-white font-medium">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-text-primary">{student.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>{student.course}</span>
                      <span>•</span>
                      <span>{student.batch}</span>
                      <span>•</span>
                      <span>Due: {student.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-text-secondary">Contact:</span>
                      <span className="text-sm text-text-primary">{student.email}</span>
                      <span className="text-sm text-text-secondary">•</span>
                      <span className="text-sm text-text-primary">{student.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-destructive">{student.pendingAmount}</div>
                    <Badge className={`${getDueSeverity(student.daysPending)} text-white`}>
                      {student.daysPending} days overdue
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      Email
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-primary-light text-white">
                      Record Payment
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bulk Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-text-primary">Bulk Actions</CardTitle>
          <CardDescription>Send reminders to multiple students at once</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex-col">
              <Mail className="w-6 h-6 mb-2" />
              Email All Pending
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <MessageCircle className="w-6 h-6 mb-2" />
              SMS All Overdue
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Phone className="w-6 h-6 mb-2" />
              Generate Call List
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesPending;
