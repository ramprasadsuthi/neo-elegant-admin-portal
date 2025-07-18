
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Mail, Phone, MapPin, Star } from "lucide-react";
import { useState } from "react";

const Trainers = () => {
  const [trainers] = useState([
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      email: "rajesh@mrtechnologies.com",
      phone: "+91 9876543210",
      specialization: ["Full Stack", "React", "Node.js"],
      experience: "8 years",
      rating: 4.8,
      coursesAssigned: 3,
      studentsCount: 45,
      status: "Active",
      location: "Bangalore",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@mrtechnologies.com",
      phone: "+91 9876543211",
      specialization: ["Data Science", "Python", "Machine Learning"],
      experience: "6 years",
      rating: 4.9,
      coursesAssigned: 2,
      studentsCount: 32,
      status: "Active",
      location: "Hyderabad",
      avatar: "SW"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@mrtechnologies.com",
      phone: "+91 9876543212",
      specialization: ["DevOps", "AWS", "Docker"],
      experience: "5 years",
      rating: 4.7,
      coursesAssigned: 2,
      studentsCount: 28,
      status: "On Leave",
      location: "Mumbai",
      avatar: "AP"
    }
  ]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Trainers</h1>
          <p className="text-text-secondary">Manage instructor profiles and assignments</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Trainer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary">{trainers.length}</div>
              <div className="text-text-secondary">Total Trainers</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">{trainers.filter(t => t.status === "Active").length}</div>
              <div className="text-text-secondary">Active</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">7</div>
              <div className="text-text-secondary">Courses</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">4.8</div>
              <div className="text-text-secondary">Avg Rating</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="shadow-soft hover:shadow-neo transition-all duration-300">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-r from-primary to-primary-light text-white text-lg font-medium">
                  {trainer.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-text-primary">{trainer.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {trainer.location}
                </CardDescription>
              </div>
              <Badge className={trainer.status === "Active" ? "bg-green-500" : "bg-orange-500"}>
                {trainer.status}
              </Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Experience:</span>
                  <span className="font-medium text-text-primary">{trainer.experience}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Courses:</span>
                  <span className="font-medium text-text-primary">{trainer.coursesAssigned}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Students:</span>
                  <span className="font-medium text-text-primary">{trainer.studentsCount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-text-primary">{trainer.rating}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="text-text-secondary text-sm">Specialization:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {trainer.specialization.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 pt-2 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="w-3 h-3 mr-1" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
