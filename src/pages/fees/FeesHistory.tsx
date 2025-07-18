
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Download, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const FeesHistory = () => {
  const payments = [
    {
      id: "PAY-001",
      student: "Rahul Sharma",
      course: "Full Stack Development",
      amount: "₹15,000",
      method: "UPI",
      date: "2024-01-20",
      status: "Completed",
      transactionId: "UPI123456789"
    },
    {
      id: "PAY-002",
      student: "Priya Patel",
      course: "Data Science",
      amount: "₹12,000",
      method: "Bank Transfer",
      date: "2024-01-19",
      status: "Completed",
      transactionId: "TXN987654321"
    },
    {
      id: "PAY-003",
      student: "Arjun Kumar",
      course: "DevOps",
      amount: "₹18,000",
      method: "Cash",
      date: "2024-01-18",
      status: "Pending",
      transactionId: "-"
    }
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
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-text-primary">Payment History</h1>
          <p className="text-text-secondary">View and manage all fee payment records</p>
        </div>
        <Button className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <Input
                placeholder="Search by student name, transaction ID..."
                className="pl-10 rounded-soft"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Table */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-text-primary">Payment Records</CardTitle>
          <CardDescription>Complete history of all fee payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-text-secondary font-medium">Payment ID</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Student</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Course</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Amount</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Method</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Date</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Status</th>
                  <th className="text-left p-3 text-text-secondary font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium text-text-primary">{payment.id}</td>
                    <td className="p-3 text-text-primary">{payment.student}</td>
                    <td className="p-3 text-text-secondary text-sm">{payment.course}</td>
                    <td className="p-3 font-medium text-text-primary">{payment.amount}</td>
                    <td className="p-3 text-text-secondary">{payment.method}</td>
                    <td className="p-3 text-text-secondary">{payment.date}</td>
                    <td className="p-3">
                      <Badge className={
                        payment.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                      }>
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesHistory;
