import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bot, Clock, Shield } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Violations",
      value: "47",
      description: "12 high priority",
      icon: AlertTriangle,
      trend: "+5 from yesterday"
    },
    {
      title: "Active Agents",
      value: "8",
      description: "2 require attention",
      icon: Bot,
      trend: "2 offline"
    },
    {
      title: "Active Sessions",
      value: "15",
      description: "Average duration 24m",
      icon: Clock,
      trend: "+3 from last hour"
    },
    {
      title: "Security Score",
      value: "87%",
      description: "Good standing",
      icon: Shield,
      trend: "-2% from last week"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Security Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your agents, sessions, and security violations in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest security events and agent activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">High severity violation detected</p>
                  <p className="text-xs text-muted-foreground">Webportalagent • 2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Agent session started</p>
                  <p className="text-xs text-muted-foreground">DataProcessor • 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Security scan completed</p>
                  <p className="text-xs text-muted-foreground">SecurityScanner • 10 minutes ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>
              Overall system performance and status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Agent Connectivity</span>
                <Badge variant="secondary">98.5%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Response Time</span>
                <Badge variant="secondary">142ms</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Threat Detection</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data Processing</span>
                <Badge variant="secondary">Normal</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;