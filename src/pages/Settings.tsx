import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Configure your security monitoring preferences and system settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Configuration</CardTitle>
              <CardDescription>
                Configure how you want to receive security alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email alerts for violations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Show instant notifications
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>High Severity Only</Label>
                  <p className="text-sm text-muted-foreground">
                    Only alert for high severity violations
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="alert-frequency">Alert Frequency</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Summary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Thresholds</CardTitle>
              <CardDescription>
                Configure violation detection sensitivity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                <Input 
                  id="confidence-threshold"
                  type="number"
                  defaultValue="0.75"
                  min="0"
                  max="1"
                  step="0.01"
                />
                <p className="text-sm text-muted-foreground">
                  Minimum confidence level to trigger violation alerts
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-violations">Max Violations per Hour</Label>
                <Input 
                  id="max-violations"
                  type="number"
                  defaultValue="50"
                  min="1"
                />
                <p className="text-sm text-muted-foreground">
                  Maximum violations before agent suspension
                </p>
              </div>

              <div className="space-y-2">
                <Label>Auto-Suspend Agents</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Automatically suspend agents exceeding limits
                  </p>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>
                Current system status and information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">System Version</span>
                <Badge variant="outline">v2.1.4</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Database Status</span>
                <Badge variant="default">Connected</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Backup</span>
                <span className="text-sm text-muted-foreground">8/19/2025, 3:00 AM</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Uptime</span>
                <span className="text-sm text-muted-foreground">15 days, 8 hours</span>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Active Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Slack</Badge>
                  <Badge variant="secondary">Email SMTP</Badge>
                  <Badge variant="secondary">Webhook API</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>
                Manage your violation data and exports
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Data Retention Period</Label>
                <Select defaultValue="90">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">6 months</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Export Data</h4>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Export Violations
                  </Button>
                  <Button variant="outline" size="sm">
                    Export Sessions
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Maintenance</h4>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Clear Cache
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    Reset Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;