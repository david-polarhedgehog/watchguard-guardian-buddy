import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ExternalLink } from "lucide-react";
import { mockSessions } from "@/data/mockData";

const Sessions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredSessions = mockSessions.filter((session) => {
    const matchesSearch = 
      session.agentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || session.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Completed':
        return 'secondary';
      case 'Terminated':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const totalSessions = mockSessions.length;
  const activeSessions = mockSessions.filter(s => s.status === 'Active').length;
  const completedSessions = mockSessions.filter(s => s.status === 'Completed').length;
  const totalViolations = mockSessions.reduce((sum, s) => sum + s.violations, 0);

  const handleRowClick = (sessionId: string) => {
    navigate(`/sessions/${sessionId}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sessions Inventory</h1>
        <p className="text-muted-foreground">
          Monitor all agent sessions and their activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSessions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeSessions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{completedSessions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Violations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{totalViolations}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search sessions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Terminated">Terminated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SESSION ID</TableHead>
              <TableHead>AGENT</TableHead>
              <TableHead>START TIME</TableHead>
              <TableHead>DURATION</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>VIOLATIONS</TableHead>
              <TableHead>INTERACTIONS</TableHead>
              <TableHead className="text-right">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSessions.map((session) => (
              <TableRow 
                key={session.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleRowClick(session.id)}
              >
                <TableCell className="font-mono text-sm">
                  {session.id}
                </TableCell>
                <TableCell className="font-medium">
                  {session.agentName}
                </TableCell>
                <TableCell className="text-sm">
                  {session.startTime}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {session.duration}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(session.status)}>
                    {session.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={session.violations > 5 ? "destructive" : session.violations > 0 ? "secondary" : "outline"}>
                    {session.violations}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {session.interactions}
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRowClick(session.id);
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Sessions;