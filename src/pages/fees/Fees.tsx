
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, DollarSign, Clock, AlertCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Fees = () => {
  const stats = [
    {
      title: "Total Collected",
      value: "₹12,45,000",
      icon: DollarSign,
      color: "bg-green-500",
      change: "+15%"
    },
    {
      title: "Pending Amount",
      value: "₹2,25,000",
      icon: Clock,
      color: "bg-yellow-500",
      change: "-8%"
    },
    {
      title: "Overdue Amount",
      value: "₹45,000",
      icon: AlertCircle,
      color: "bg-destructive",
      change: "-12%"
    },
    {
      title: "This Month",
      value: "₹1,85,000",
      icon: TrendingUp,
      color: "bg-primary",
      change: "+22%"
    }
  ];

  const recentPayments = [
    {
      id: 1,
      student: "Rahul Sharma",
      amount: "₹15,000",
      date: "2024-01-20",
      method: "UPI",
      status: "Completed"
    },
    {
      id: 2,
      student: "Priya Patel",
      amount: "₹12,000",
      date: "2024-01-19",
      method: "Bank Transfer",
      status: "Completed"
    },
    {
      id: 3,
      student: "Arjun Kumar",
      amount: "₹18,000",
      date: "2024-01-18",
      method: "Cash",
      status: "Pending"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Fee Management</h1>
          <p className="text-text-secondary">Track payments, manage dues, and financial overview</p>
        </div>
        <div className="flex gap-3">
          <Link to="/fees/pending">
            <Button variant="outline" className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Pending Dues
            </Button>
          </Link>
          <Link to="/fees/history">
            <Button variant="outline" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Payment History
            </Button>
          </Link>
          <Link to="/fees/add">
            <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Record Payment
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="shadow-soft hover:shadow-neo transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                {stat.title}
              </CardTitle>
              <div className={`w-10 h-10 ${stat.color} rounded-soft flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-green-600">
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-text-primary">Recent Payments</CardTitle>
            <CardDescription>Latest fee transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 rounded-soft bg-muted/50">
                  <div>
                    <div className="font-medium text-text-primary">{payment.student}</div>
                    <div className="text-sm text-text-secondary">{payment.date} • {payment.method}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-text-primary">{payment.amount}</div>
                    <Badge variant={payment.status === "Completed" ? "default" : "destructive"} className="text-xs">
                      {payment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link to="/fees/history">
                <Button variant="outline" className="w-full">
                  View All Payments
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-text-primary">Payment Methods</CardTitle>
            <CardDescription>Distribution of payment modes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">UPI Payments</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Bank Transfer</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">35%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Cash</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">20%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-text-primary">Quick Actions</CardTitle>
          <CardDescription>Common fee management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/fees/add">
              <Button variant="outline" className="h-20 flex-col w-full">
                <Plus className="w-6 h-6 mb-2" />
                Record Payment
              </Button>
            </Link>
            <Link to="/fees/pending">
              <Button variant="outline" className="h-20 flex-col w-full">
                <AlertCircle className="w-6 h-6 mb-2" />
                Send Reminders
              </Button>
            </Link>
            <Button variant="outline" className="h-20 flex-col">
              <DollarSign className="w-6 h-6 mb-2" />
              Generate Invoice
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              Fee Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fees;
