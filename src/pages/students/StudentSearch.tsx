
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Search, Filter, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const StudentSearch = () => {
  const [filters, setFilters] = useState({
    name: "",
    course: "",
    batch: "",
    feeStatus: "",
    dateFrom: "",
    dateTo: ""
  });

  const searchResults = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      course: "Full Stack Development",
      batch: "FST-2024-01",
      feeStatus: "Paid",
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@example.com",
      course: "Data Science",
      batch: "DS-2024-01",
      feeStatus: "Pending",
      joinDate: "2024-01-20"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/students">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Advanced Student Search</h1>
          <p className="text-text-secondary">Find students using advanced filters and criteria</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Panel */}
        <Card className="lg:col-span-1 shadow-soft">
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </CardTitle>
            <CardDescription>Refine your search criteria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-text-primary">Student Name</Label>
              <Input
                placeholder="Enter name..."
                value={filters.name}
                onChange={(e) => setFilters({...filters, name: e.target.value})}
                className="rounded-soft"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-text-primary">Course</Label>
              <Select value={filters.course} onValueChange={(value) => setFilters({...filters, course: value})}>
                <SelectTrigger className="rounded-soft">
                  <SelectValue placeholder="All Courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="fullstack">Full Stack Development</SelectItem>
                  <SelectItem value="datascience">Data Science</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-text-primary">Fee Status</Label>
              <Select value={filters.feeStatus} onValueChange={(value) => setFilters({...filters, feeStatus: value})}>
                <SelectTrigger className="rounded-soft">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-text-primary">Join Date From</Label>
              <Input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                className="rounded-soft"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-text-primary">Join Date To</Label>
              <Input
                type="date"
                value={filters.dateTo}
                onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                className="rounded-soft"
              />
            </div>

            <div className="pt-4 space-y-2">
              <Button className="w-full bg-gradient-to-r from-primary to-primary-light text-white">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="lg:col-span-3 space-y-6">
          {/* Results Header */}
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Search Results</h3>
                  <p className="text-text-secondary">Found {searchResults.length} students</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results List */}
          <div className="space-y-4">
            {searchResults.map((student) => (
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
                        <p className="text-text-secondary text-sm">{student.email}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-text-secondary">
                          <span>{student.course}</span>
                          <span>•</span>
                          <span>{student.batch}</span>
                          <span>•</span>
                          <span>Joined {student.joinDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={
                        student.feeStatus === "Paid" ? "bg-green-500" :
                        student.feeStatus === "Pending" ? "bg-yellow-500" : "bg-destructive"
                      }>
                        {student.feeStatus}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSearch;
