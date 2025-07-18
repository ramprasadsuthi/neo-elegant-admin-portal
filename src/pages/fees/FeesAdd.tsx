
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FeesAdd = () => {
  const [formData, setFormData] = useState({
    student: "",
    amount: "",
    paymentMethod: "",
    transactionId: "",
    paymentDate: "",
    notes: ""
  });

  const students = [
    "Rahul Sharma - FST-2024-01",
    "Priya Patel - DS-2024-01",
    "Arjun Kumar - DO-2024-01",
    "Sneha Reddy - FST-2024-02"
  ];

  const paymentMethods = [
    "UPI",
    "Bank Transfer",
    "Cash",
    "Credit Card",
    "Debit Card",
    "Cheque"
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/fees">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Record Payment</h1>
          <p className="text-text-secondary">Add a new fee payment for a student</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary">Payment Details</CardTitle>
              <CardDescription>Enter the payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student" className="text-text-primary">Student *</Label>
                <Select value={formData.student} onValueChange={(value) => setFormData({...formData, student: value})}>
                  <SelectTrigger className="rounded-soft">
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student} value={student}>
                        {student}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-text-primary">Amount (₹) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="rounded-soft"
                    placeholder="15000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentDate" className="text-text-primary">Payment Date *</Label>
                  <Input
                    id="paymentDate"
                    type="date"
                    value={formData.paymentDate}
                    onChange={(e) => setFormData({...formData, paymentDate: e.target.value})}
                    className="rounded-soft"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod" className="text-text-primary">Payment Method *</Label>
                  <Select value={formData.paymentMethod} onValueChange={(value) => setFormData({...formData, paymentMethod: value})}>
                    <SelectTrigger className="rounded-soft">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((method) => (
                        <SelectItem key={method} value={method}>
                          {method}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transactionId" className="text-text-primary">Transaction ID</Label>
                  <Input
                    id="transactionId"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                    className="rounded-soft"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-text-primary">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="rounded-soft"
                  rows={3}
                  placeholder="Any additional information"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-text-primary">Payment Screenshot (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-soft p-6 text-center">
                  <Upload className="w-8 h-8 text-text-secondary mx-auto mb-2" />
                  <p className="text-text-secondary text-sm">
                    Click to upload or drag and drop payment screenshot
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-primary to-primary-light text-white">
                <Save className="w-4 h-4 mr-2" />
                Record Payment
              </Button>
              <Link to="/fees" className="block">
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary text-sm">Student Info</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="p-3 bg-muted/50 rounded-soft">
                <p className="text-text-secondary">Select a student to view their details and pending amounts</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeesAdd;
