
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, BookOpen, AlertCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [counters, setCounters] = useState({
    totalStudents: 0,
    activeStudents: 0,
    feesCollected: 0,
    duesPending: 0
  });

  // Animate counters
  useEffect(() => {
    const targetValues = {
      totalStudents: 450,
      activeStudents: 387,
      feesCollected: 125000,
      duesPending: 25000
    };

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        totalStudents: Math.floor(targetValues.totalStudents * progress),
        activeStudents: Math.floor(targetValues.activeStudents * progress),
        feesCollected: Math.floor(targetValues.feesCollected * progress),
        duesPending: Math.floor(targetValues.duesPending * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const kpiCards = [
    {
      title: "Total Students",
      value: counters.totalStudents,
      icon: Users,
      color: "bg-blue-500",
      change: "+12%",
      isPositive: true
    },
    {
      title: "Active Students",
      value: counters.activeStudents,
      icon: Users,
      color: "bg-green-500",
      change: "+8%",
      isPositive: true
    },
    {
      title: "Fees Collected",
      value: `₹${counters.feesCollected.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-accent",
      change: "+15%",
      isPositive: true
    },
    {
      title: "Dues Pending",
      value: `₹${counters.duesPending.toLocaleString()}`,
      icon: AlertCircle,
      color: "bg-destructive",
      change: "-5%",
      isPositive: false
    }
  ];

  const recentTransactions = [
    { student: "Rahul Sharma", amount: "₹15,000", course: "Full Stack Development", date: "Today", status: "Paid" },
    { student: "Priya Patel", amount: "₹12,000", course: "Data Science", date: "Yesterday", status: "Paid" },
    { student: "Arjun Kumar", amount: "₹18,000", course: "DevOps", date: "2 days ago", status: "Pending" },
    { student: "Sneha Reddy", amount: "₹15,000", course: "Full Stack Development", date: "3 days ago", status: "Paid" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary">Welcome back! Here's what's happening at MR Technologies.</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-light text-white shadow-soft">
          Generate Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, index) => (
          <Card key={card.title} className="shadow-soft hover:shadow-neo transition-all duration-300 animate-counter-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                {card.title}
              </CardTitle>
              <div className={`w-10 h-10 ${card.color} rounded-soft flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary mb-2">
                {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
              </div>
              <div className="flex items-center text-sm">
                {card.isPositive ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-destructive mr-1" />
                )}
                <span className={card.isPositive ? "text-green-600" : "text-destructive"}>
                  {card.change}
                </span>
                <span className="text-text-secondary ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-text-primary">Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue vs expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-soft flex items-end justify-center">
              <div className="text-text-secondary">Chart placeholder - Revenue visualization</div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-text-primary">Recent Transactions</CardTitle>
            <CardDescription>Latest fee payments and enrollments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-soft bg-muted/50 hover:bg-muted transition-colors">
                  <div>
                    <div className="font-medium text-text-primary">{transaction.student}</div>
                    <div className="text-sm text-text-secondary">{transaction.course}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-text-primary">{transaction.amount}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-secondary">{transaction.date}</span>
                      <Badge variant={transaction.status === "Paid" ? "default" : "destructive"} className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-text-primary">Quick Actions</CardTitle>
          <CardDescription>Frequently used tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Users className="w-6 h-6 mb-2" />
              Add Student
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <DollarSign className="w-6 h-6 mb-2" />
              Record Payment
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <BookOpen className="w-6 h-6 mb-2" />
              New Course
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <AlertCircle className="w-6 h-6 mb-2" />
              Send Reminders
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
