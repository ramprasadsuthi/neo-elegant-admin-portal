
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Users, Clock, Play } from "lucide-react";
import { useState } from "react";

const Batches = () => {
  const [batches] = useState([
    {
      id: 1,
      name: "FST-2024-01",
      course: "Full Stack Development",
      trainer: "Dr. Rajesh Kumar",
      students: 25,
      maxCapacity: 30,
      startDate: "2024-01-15",
      endDate: "2024-07-15",
      schedule: "Mon, Wed, Fri - 6:00 PM",
      status: "Active",
      progress: 65
    },
    {
      id: 2,
      name: "DS-2024-01",
      course: "Data Science",
      trainer: "Sarah Williams",
      students: 20,
      maxCapacity: 25,
      startDate: "2024-02-01",
      endDate: "2024-09-01",
      schedule: "Tue, Thu, Sat - 7:00 PM",
      status: "Active",
      progress: 45
    },
    {
      id: 3,
      name: "DO-2024-01",
      course: "DevOps",
      trainer: "Amit Patel",
      students: 18,
      maxCapacity: 20,
      startDate: "2024-03-01",
      endDate: "2024-06-01",
      schedule: "Mon, Wed - 8:00 PM",
      status: "Upcoming",
      progress: 0
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Upcoming":
        return "bg-blue-500";
      case "Completed":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Batches</h1>
          <p className="text-text-secondary">Manage course batches and schedules</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Calendar View
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Batch
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary">{batches.length}</div>
              <div className="text-text-secondary">Total Batches</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">{batches.filter(b => b.status === "Active").length}</div>
              <div className="text-text-secondary">Active</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">{batches.filter(b => b.status === "Upcoming").length}</div>
              <div className="text-text-secondary">Upcoming</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">63</div>
              <div className="text-text-secondary">Total Students</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Batches List */}
      <div className="space-y-4">
        {batches.map((batch) => (
          <Card key={batch.id} className="shadow-soft hover:shadow-neo transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-text-primary">{batch.name}</CardTitle>
                  <CardDescription className="text-text-secondary">{batch.course}</CardDescription>
                </div>
                <Badge className={`${getStatusColor(batch.status)} text-white`}>
                  {batch.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-text-secondary" />
                    <span className="text-sm text-text-secondary">Students</span>
                  </div>
                  <div className="text-lg font-semibold text-text-primary">
                    {batch.students}/{batch.maxCapacity}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(batch.students / batch.maxCapacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-text-secondary" />
                    <span className="text-sm text-text-secondary">Duration</span>
                  </div>
                  <div className="text-sm text-text-primary">
                    <div>{batch.startDate}</div>
                    <div>to {batch.endDate}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-text-secondary" />
                    <span className="text-sm text-text-secondary">Schedule</span>
                  </div>
                  <div className="text-sm text-text-primary">{batch.schedule}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-text-secondary" />
                    <span className="text-sm text-text-secondary">Progress</span>
                  </div>
                  <div className="text-lg font-semibold text-text-primary">{batch.progress}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${batch.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-secondary">
                    Trainer: <span className="text-text-primary font-medium">{batch.trainer}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Students</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-primary-light text-white">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Batches;
