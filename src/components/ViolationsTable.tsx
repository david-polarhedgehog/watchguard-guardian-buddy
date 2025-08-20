import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Search } from "lucide-react";
import { Violation } from "@/data/mockData";

interface ViolationsTableProps {
  violations: Violation[];
}

export function ViolationsTable({ violations }: ViolationsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredViolations = violations.filter((violation) => {
    const matchesSearch = 
      violation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      violation.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      violation.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      violation.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = severityFilter === "all" || violation.severity === severityFilter;
    const matchesType = typeFilter === "all" || violation.name === typeFilter;

    return matchesSearch && matchesSeverity && matchesType;
  });

  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'secondary';
      case 'Low':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const uniqueTypes = Array.from(new Set(violations.map(v => v.name)));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredViolations.length} of {violations.length} total violations (page 1 of {Math.ceil(violations.length / 20)})
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search violations by type, agent, session, or message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={severityFilter} onValueChange={setSeverityFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="All Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Severity</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {uniqueTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          All Time
        </Button>

        <Button variant="outline" size="sm">
          All Status
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>ORIGIN</TableHead>
              <TableHead>MESSAGE</TableHead>
              <TableHead>LAST SEEN</TableHead>
              <TableHead>SEVERITY</TableHead>
              <TableHead>CONFIDENCE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredViolations.map((violation) => (
              <TableRow key={violation.id}>
                <TableCell className="font-mono text-sm">
                  {violation.id}
                </TableCell>
                <TableCell className="font-medium">
                  {violation.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-border rounded-sm" />
                    {violation.origin}
                    <span className="text-muted-foreground">→</span>
                    <div className="w-2 h-2 bg-primary rounded-sm" />
                    <span className="text-sm text-muted-foreground">Webportalagent</span>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">
                  {violation.message}
                </TableCell>
                <TableCell className="text-sm">
                  {violation.lastSeen}
                </TableCell>
                <TableCell>
                  <Badge variant={getSeverityVariant(violation.severity)}>
                    {violation.severity}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">
                  {violation.confidence.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}