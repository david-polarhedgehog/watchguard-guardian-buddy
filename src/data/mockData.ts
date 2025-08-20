export interface Violation {
  id: string;
  name: string;
  origin: string;
  message: string;
  lastSeen: string;
  severity: 'High' | 'Medium' | 'Low';
  confidence: number;
}

export interface Agent {
  id: string;
  name: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  type: string;
  lastActive: string;
  violations: number;
  location: string;
}

export interface Session {
  id: string;
  agentId: string;
  agentName: string;
  startTime: string;
  endTime: string | null;
  duration: string;
  status: 'Active' | 'Completed' | 'Terminated';
  violations: number;
  interactions: number;
}

export interface SessionDetail {
  id: string;
  agentId: string;
  agentName: string;
  startTime: string;
  endTime: string | null;
  duration: string;
  status: 'Active' | 'Completed' | 'Terminated';
  violationCount: number;
  interactions: number;
  metadata: {
    userAgent: string;
    ipAddress: string;
    location: string;
  };
  timeline: Array<{
    timestamp: string;
    event: string;
    description: string;
  }>;
  violations: Violation[];
}

// Mock Violations Data
export const mockViolations: Violation[] = [
  {
    id: '#3877',
    name: 'Malicious Instruction Following',
    origin: 'courthel...',
    message: '# csv_E28F...',
    lastSeen: '8/19/2025, 12:50:08 PM',
    severity: 'Medium',
    confidence: 0.50
  },
  {
    id: '#3876',
    name: 'Malicious Links',
    origin: 'Webportalagent',
    message: '# csv_55CB...',
    lastSeen: '8/19/2025, 12:50:03 PM',
    severity: 'High',
    confidence: 0.90
  },
  {
    id: '#3875',
    name: 'Malicious Instruction Following',
    origin: 'Webportalagent',
    message: '# csv_898B...',
    lastSeen: '8/19/2025, 12:50:02 PM',
    severity: 'Medium',
    confidence: 0.50
  },
  {
    id: '#3874',
    name: 'Malicious Instruction Following',
    origin: 'Webportalagent',
    message: '# csv_C8C0...',
    lastSeen: '8/19/2025, 12:50:02 PM',
    severity: 'Medium',
    confidence: 0.50
  },
  {
    id: '#3873',
    name: 'Malicious Instruction Following',
    origin: 'Webportalagent',
    message: '# csv_0FC8...',
    lastSeen: '8/19/2025, 12:49:57 PM',
    severity: 'Medium',
    confidence: 0.50
  },
  {
    id: '#3872',
    name: 'Malicious Links',
    origin: 'Webportalagent',
    message: '# csv_3BDA...',
    lastSeen: '8/19/2025, 12:49:56 PM',
    severity: 'High',
    confidence: 0.90
  },
  {
    id: '#3871',
    name: 'Malicious Instruction Following',
    origin: 'Webportalagent',
    message: '# csv_3BDA...',
    lastSeen: '8/19/2025, 12:49:56 PM',
    severity: 'Medium',
    confidence: 0.50
  },
  {
    id: '#3870',
    name: 'Malicious Links',
    origin: 'Webportalagent',
    message: '# csv_0FC8...',
    lastSeen: '8/19/2025, 12:49:56 PM',
    severity: 'High',
    confidence: 0.90
  },
  {
    id: '#3869',
    name: 'Secrets',
    origin: 'Webportalagent',
    message: '# csv_0FC8...',
    lastSeen: '8/19/2025, 12:49:56 PM',
    severity: 'High',
    confidence: 0.95
  },
  {
    id: '#3868',
    name: 'Malicious Links',
    origin: 'Webportalagent',
    message: '# csv_5960...',
    lastSeen: '8/19/2025, 12:49:52 PM',
    severity: 'High',
    confidence: 0.90
  }
];

// Mock Agents Data
export const mockAgents: Agent[] = [
  {
    id: 'agent-001',
    name: 'Webportalagent',
    status: 'Active',
    type: 'Web Portal Monitor',
    lastActive: '8/19/2025, 12:50:08 PM',
    violations: 15,
    location: 'US-East-1'
  },
  {
    id: 'agent-002',
    name: 'courthel',
    status: 'Active',
    type: 'Court Helper Agent',
    lastActive: '8/19/2025, 12:45:33 PM',
    violations: 3,
    location: 'US-West-2'
  },
  {
    id: 'agent-003',
    name: 'SecurityScanner',
    status: 'Inactive',
    type: 'Security Monitoring',
    lastActive: '8/19/2025, 11:30:15 PM',
    violations: 0,
    location: 'EU-Central-1'
  },
  {
    id: 'agent-004',
    name: 'DataProcessor',
    status: 'Active',
    type: 'Data Processing Agent',
    lastActive: '8/19/2025, 12:49:45 PM',
    violations: 7,
    location: 'Asia-Pacific-1'
  },
  {
    id: 'agent-005',
    name: 'ContentFilter',
    status: 'Suspended',
    type: 'Content Filtering',
    lastActive: '8/19/2025, 10:15:22 AM',
    violations: 25,
    location: 'US-East-2'
  }
];

// Mock Sessions Data
export const mockSessions: Session[] = [
  {
    id: 'session-001',
    agentId: 'agent-001',
    agentName: 'Webportalagent',
    startTime: '8/19/2025, 12:45:00 PM',
    endTime: null,
    duration: '0:05:08',
    status: 'Active',
    violations: 8,
    interactions: 145
  },
  {
    id: 'session-002',
    agentId: 'agent-002',
    agentName: 'courthel',
    startTime: '8/19/2025, 12:30:15 PM',
    endTime: '8/19/2025, 12:45:33 PM',
    duration: '0:15:18',
    status: 'Completed',
    violations: 2,
    interactions: 67
  },
  {
    id: 'session-003',
    agentId: 'agent-004',
    agentName: 'DataProcessor',
    startTime: '8/19/2025, 12:00:00 PM',
    endTime: null,
    duration: '0:50:08',
    status: 'Active',
    violations: 5,
    interactions: 892
  },
  {
    id: 'session-004',
    agentId: 'agent-005',
    agentName: 'ContentFilter',
    startTime: '8/19/2025, 09:30:22 AM',
    endTime: '8/19/2025, 10:15:22 AM',
    duration: '0:45:00',
    status: 'Terminated',
    violations: 18,
    interactions: 234
  }
];

// Mock Session Details
export const mockSessionDetails: Record<string, SessionDetail> = {
  'session-001': {
    id: 'session-001',
    agentId: 'agent-001',
    agentName: 'Webportalagent',
    startTime: '8/19/2025, 12:45:00 PM',
    endTime: null,
    duration: '0:05:08',
    status: 'Active',
    violationCount: 8,
    interactions: 145,
    metadata: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      ipAddress: '192.168.1.100',
      location: 'Virginia, US'
    },
    timeline: [
      {
        timestamp: '8/19/2025, 12:45:00 PM',
        event: 'Session Started',
        description: 'Agent initiated session with user portal'
      },
      {
        timestamp: '8/19/2025, 12:46:15 PM',
        event: 'First Violation',
        description: 'Detected malicious instruction following behavior'
      },
      {
        timestamp: '8/19/2025, 12:48:30 PM',
        event: 'Multiple Violations',
        description: 'Sequence of malicious link attempts detected'
      },
      {
        timestamp: '8/19/2025, 12:50:08 PM',
        event: 'Latest Activity',
        description: 'Continued monitoring active session'
      }
    ],
    violations: mockViolations.slice(0, 8)
  }
};