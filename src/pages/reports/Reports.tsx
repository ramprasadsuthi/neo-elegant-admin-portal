
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Filter, BarChart3, Users, DollarSign, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 92000 },
    { month: 'Mar', revenue: 78000 },
    { month: 'Apr', revenue: 105000 },
    { month: 'May', revenue: 118000 },
    { month: 'Jun', revenue: 134000 },
    { month: 'Jul', revenue: 142000 },
    { month: 'Aug', revenue: 128000 },
    { month: 'Sep', revenue: 156000 },
    { month: 'Oct', revenue: 167000 },
    { month: 'Nov', revenue: 184000 },
    { month: 'Dec', revenue: 195000 }
  ];

  const reportStats = [
    {
      title: "Total Revenue",
      value: "₹18,45,000",
      change: "+15.2%",
      icon: DollarSign,
      color: "bg-green-500"
    },
    {
      title: "Active Students",
      value: "387",
      change: "+8.1%",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Completed Courses",
      value: "156",
      change: "+12.5%",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: BarChart3,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Reports & Analytics</h1>
          <p className="text-text-secondary">Comprehensive insights and data analysis</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button className="bg-gradient-to-r from-primary to-primary-light text-white flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Reports
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, index) => (
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

      {/* Tabbed Reports */}
      <Tabs defaultValue="students" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="fees">Fees</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Student Enrollment Trends</CardTitle>
                <CardDescription>Monthly enrollment statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-soft flex items-center justify-center">
                  <div className="text-text-secondary">Enrollment chart visualization</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Course Popularity</CardTitle>
                <CardDescription>Students by course distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Full Stack Development</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Data Science</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">DevOps</span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fees" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Payment Collection</CardTitle>
                <CardDescription>Monthly fee collection trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-t from-green-500/5 to-transparent rounded-soft flex items-center justify-center">
                  <div className="text-text-secondary">Payment collection chart</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Outstanding Dues</CardTitle>
                <CardDescription>Pending payments analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Current Month</span>
                    <Badge className="bg-green-500">₹12,000</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">30+ Days</span>
                    <Badge className="bg-yellow-500">₹8,000</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">60+ Days</span>
                    <Badge className="bg-destructive">₹5,000</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary">Course Performance</CardTitle>
              <CardDescription>Success rates and completion statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-text-secondary">Course</th>
                      <th className="text-left p-3 text-text-secondary">Students</th>
                      <th className="text-left p-3 text-text-secondary">Completion Rate</th>
                      <th className="text-left p-3 text-text-secondary">Avg Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 text-text-primary">Full Stack Development</td>
                      <td className="p-3 text-text-primary">45</td>
                      <td className="p-3">
                        <Badge className="bg-green-500">92%</Badge>
                      </td>
                      <td className="p-3 text-text-primary">4.8</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-text-primary">Data Science</td>
                      <td className="p-3 text-text-primary">32</td>
                      <td className="p-3">
                        <Badge className="bg-green-500">89%</Badge>
                      </td>
                      <td className="p-3 text-text-primary">4.7</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-text-primary">DevOps</td>
                      <td className="p-3 text-text-primary">28</td>
                      <td className="p-3">
                        <Badge className="bg-yellow-500">76%</Badge>
                      </td>
                      <td className="p-3 text-text-primary">4.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Monthly Revenue Trend</CardTitle>
                <CardDescription>Revenue growth over the past 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyRevenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`₹${value}`, 'Revenue']} />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-text-primary">Revenue Analytics</CardTitle>
                <CardDescription>Financial performance insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Average Monthly Growth</span>
                    <Badge className="bg-green-500">+12.3%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Best Performing Month</span>
                    <span className="font-medium">December 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Total YTD Revenue</span>
                    <span className="font-bold text-xl">₹22,15,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
