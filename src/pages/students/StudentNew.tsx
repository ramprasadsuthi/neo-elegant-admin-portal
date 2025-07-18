
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const StudentNew = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    batch: "",
    feeAmount: "",
    emergencyContact: "",
    notes: ""
  });

  const courses = [
    "Full Stack Development",
    "Data Science",
    "DevOps",
    "Mobile App Development",
    "UI/UX Design"
  ];

  const batches = [
    "FST-2024-01",
    "FST-2024-02",
    "DS-2024-01",
    "DO-2024-01",
    "MAD-2024-01"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

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
          <h1 className="text-3xl font-bold text-text-primary">Add New Student</h1>
          <p className="text-text-secondary">Create a new student profile with all required information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Personal Information</CardTitle>
                <CardDescription>Basic student details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-text-primary">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="rounded-soft"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-text-primary">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="rounded-soft"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="rounded-soft"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-text-primary">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="rounded-soft"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-text-primary">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="rounded-soft"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyContact" className="text-text-primary">Emergency Contact</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                    className="rounded-soft"
                    placeholder="Name and phone number"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Academic Information</CardTitle>
                <CardDescription>Course enrollment and batch details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-text-primary">Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                      <SelectTrigger className="rounded-soft">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batch" className="text-text-primary">Batch *</Label>
                    <Select value={formData.batch} onValueChange={(value) => setFormData({...formData, batch: value})}>
                      <SelectTrigger className="rounded-soft">
                        <SelectValue placeholder="Select a batch" />
                      </SelectTrigger>
                      <SelectContent>
                        {batches.map((batch) => (
                          <SelectItem key={batch} value={batch}>
                            {batch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feeAmount" className="text-text-primary">Course Fee (₹)</Label>
                  <Input
                    id="feeAmount"
                    type="number"
                    value={formData.feeAmount}
                    onChange={(e) => setFormData({...formData, feeAmount: e.target.value})}
                    className="rounded-soft"
                    placeholder="15000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-text-primary">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="rounded-soft"
                    rows={3}
                    placeholder="Any additional information about the student"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Student
                </Button>
                <Link to="/students" className="block">
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary text-sm">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-text-secondary space-y-2">
                <p>• All fields marked with * are required</p>
                <p>• Email address must be unique</p>
                <p>• Phone number should include country code</p>
                <p>• Emergency contact is recommended for safety</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentNew;
