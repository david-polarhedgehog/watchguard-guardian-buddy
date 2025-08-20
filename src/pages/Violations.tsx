import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockViolations } from "@/data/mockData";
import { ViolationsTable } from "@/components/ViolationsTable";
import { AlertTriangle, TrendingUp, Clock, Shield } from "lucide-react";

const Violations = () => {
  const totalViolations = mockViolations.length;
  const highSeverity = mockViolations.filter(v => v.severity === 'High').length;
  const mediumSeverity = mockViolations.filter(v => v.severity === 'Medium').length;
  const recentViolations = mockViolations.filter(v => {
    const violationTime = new Date(v.lastSeen);
    const now = new Date();
    const hourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    return violationTime > hourAgo;
  }).length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Violations Inventory</h1>
        <p className="text-muted-foreground">
          Monitor and analyze security violations across all agents
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Violations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViolations}</div>
            <p className="text-xs text-muted-foreground">
              Across all agents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Severity</CardTitle>
            <TrendingUp className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{highSeverity}</div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Severity</CardTitle>
            <Shield className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{mediumSeverity}</div>
            <p className="text-xs text-muted-foreground">
              Monitor closely
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent (1h)</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentViolations}</div>
            <p className="text-xs text-muted-foreground">
              Last hour activity
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Violations</CardTitle>
        </CardHeader>
        <CardContent>
          <ViolationsTable violations={mockViolations} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Violations;