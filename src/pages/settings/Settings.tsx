
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Lock, Bell, Download, Shield, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal information and profile picture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-primary-light text-white text-xl font-medium">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">Change Photo</Button>
                  <p className="text-sm text-text-secondary mt-2">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="admin@mrtechnologies.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+91 9876543210" />
              </div>
              
              <Button className="bg-gradient-to-r from-primary to-primary-light text-white">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security
              </CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              
              <div className="bg-muted/30 p-4 rounded-soft">
                <h4 className="font-medium text-text-primary mb-2">Password Requirements:</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• At least 8 characters long</li>
                  <li>• Include uppercase and lowercase letters</li>
                  <li>• Include at least one number</li>
                  <li>• Include at least one special character</li>
                </ul>
              </div>
              
              <Button className="bg-gradient-to-r from-primary to-primary-light text-white">
                Update Password
              </Button>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Data Management
              </CardTitle>
              <CardDescription>Export and backup your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex-col">
                  <Download className="w-6 h-6 mb-2" />
                  Export Students Data
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Download className="w-6 h-6 mb-2" />
                  Export Fee Records
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Download className="w-6 h-6 mb-2" />
                  Export Course Data
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Download className="w-6 h-6 mb-2" />
                  Full Database Backup
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preferences Sidebar */}
        <div className="space-y-6">
          {/* Theme Settings */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary text-lg">Appearance</CardTitle>
              <CardDescription>Customize the application theme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <Label htmlFor="darkMode">Dark Mode</Label>
                </div>
                <Switch
                  id="darkMode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Theme Color</Label>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-primary cursor-pointer"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-transparent hover:border-green-500 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-transparent hover:border-blue-500 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-transparent hover:border-purple-500 cursor-pointer"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Push Notifications</Label>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="emailAlerts">Email Alerts</Label>
                <Switch
                  id="emailAlerts"
                  checked={emailAlerts}
                  onCheckedChange={setEmailAlerts}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Notify me about:</Label>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <label>New student enrollments</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <label>Fee payments received</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <label>Overdue payments</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <label>System updates</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-text-primary flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Account Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Account Type:</span>
                <span className="font-medium text-text-primary">Administrator</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Last Login:</span>
                <span className="font-medium text-text-primary">Today, 9:30 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Storage Used:</span>
                <span className="font-medium text-text-primary">2.4 GB / 10 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
