// lib/mockData.ts
export interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
}

export interface Submission {
  id: string;
  title: string;
  status: 'approved' | 'disapproved' | 'pending';
  submittedBy: string;
  submittedDate: string;
  message: string;
  categories: string[];
  tags: string[];
  organization: string;
  requestType: string;
  uploadedFiles: UploadedFile[];
}

export const mockSubmissions: Submission[] = [
  {
    id: '1',
    title: 'Website Redesign Proposal',
    status: 'pending',
    submittedBy: 'John Doe',
    submittedDate: '2024-01-15',
    message: 'I propose a complete redesign of our website to improve user experience and modernize the interface. This includes new color schemes, better navigation, and mobile responsiveness.',
    categories: ['Design', 'Development'],
    tags: ['urgent', 'frontend', 'ui-ux'],
    organization: 'Department of Information Technology',
    requestType: 'Project Proposal',
    uploadedFiles: [
      { id: 'f1', name: 'website-mockup.pdf', size: '2.4 MB', type: 'application/pdf', uploadedAt: '2024-01-15T10:30:00Z' },
      { id: 'f2', name: 'design-guidelines.docx', size: '856 KB', type: 'application/docx', uploadedAt: '2024-01-15T10:32:00Z' },
      { id: 'f3', name: 'wireframes.fig', size: '3.2 MB', type: 'application/figma', uploadedAt: '2024-01-15T10:35:00Z' }
    ]
  },
  {
    id: '2',
    title: 'Q1 Marketing Campaign',
    status: 'approved',
    submittedBy: 'Jane Smith',
    submittedDate: '2024-01-14',
    message: 'Marketing campaign proposal for Q1 focusing on social media engagement and email marketing strategies.',
    categories: ['Marketing'],
    tags: ['campaign', 'social-media', 'email'],
    organization: 'Marketing Department',
    requestType: 'Campaign Request',
    uploadedFiles: [
      { id: 'f4', name: 'Q1-marketing-plan.pdf', size: '1.8 MB', type: 'application/pdf', uploadedAt: '2024-01-14T14:20:00Z' },
      { id: 'f5', name: 'budget-breakdown.xlsx', size: '245 KB', type: 'application/excel', uploadedAt: '2024-01-14T14:25:00Z' }
    ]
  },
  {
    id: '3',
    title: 'New Feature Request: Dark Mode',
    status: 'pending',
    submittedBy: 'Mike Johnson',
    submittedDate: '2024-01-13',
    message: 'Request to implement dark mode across the application to improve user experience during night time usage.',
    categories: ['Development', 'Design'],
    tags: ['feature', 'accessibility', 'ui'],
    organization: 'Product Development Team',
    requestType: 'Feature Request',
    uploadedFiles: [
      { id: 'f6', name: 'dark-mode-spec.pdf', size: '1.2 MB', type: 'application/pdf', uploadedAt: '2024-01-13T09:15:00Z' }
    ]
  },
  {
    id: '4',
    title: 'Budget Increase Request',
    status: 'disapproved',
    submittedBy: 'Sarah Williams',
    submittedDate: '2024-01-12',
    message: 'Request for additional budget allocation for the development team to hire two new developers.',
    categories: ['Finance', 'HR'],
    tags: ['budget', 'hiring'],
    organization: 'Human Resources Department',
    requestType: 'Budget Request',
    uploadedFiles: [
      { id: 'f7', name: 'budget-request.pdf', size: '980 KB', type: 'application/pdf', uploadedAt: '2024-01-12T11:00:00Z' },
      { id: 'f8', name: 'hiring-justification.docx', size: '456 KB', type: 'application/docx', uploadedAt: '2024-01-12T11:05:00Z' },
      { id: 'f9', name: 'cost-analysis.xlsx', size: '678 KB', type: 'application/excel', uploadedAt: '2024-01-12T11:10:00Z' }
    ]
  },
  {
    id: '5',
    title: 'Security Audit Report',
    status: 'approved',
    submittedBy: 'David Brown',
    submittedDate: '2024-01-11',
    message: 'Comprehensive security audit report with findings and recommendations for improving application security.',
    categories: ['Security', 'Development'],
    tags: ['security', 'audit', 'critical'],
    organization: 'IT Security Division',
    requestType: 'Audit Report',
    uploadedFiles: [
      { id: 'f10', name: 'security-audit-2024.pdf', size: '5.6 MB', type: 'application/pdf', uploadedAt: '2024-01-11T16:45:00Z' },
      { id: 'f11', name: 'vulnerability-scan.csv', size: '234 KB', type: 'text/csv', uploadedAt: '2024-01-11T16:50:00Z' },
      { id: 'f12', name: 'remediation-plan.docx', size: '1.1 MB', type: 'application/docx', uploadedAt: '2024-01-11T16:55:00Z' }
    ]
  },
  {
    id: '6',
    title: 'Employee Training Program',
    status: 'pending',
    submittedBy: 'Emily Davis',
    submittedDate: '2024-01-10',
    message: 'Proposal for a new employee training program focused on professional development and skill enhancement.',
    categories: ['HR', 'Training'],
    tags: ['training', 'development', 'employees'],
    organization: 'Learning & Development',
    requestType: 'Training Proposal',
    uploadedFiles: [
      { id: 'f13', name: 'training-program-outline.pdf', size: '1.5 MB', type: 'application/pdf', uploadedAt: '2024-01-10T13:30:00Z' }
    ]
  },
  {
    id: '7',
    title: 'Infrastructure Upgrade',
    status: 'approved',
    submittedBy: 'Robert Miller',
    submittedDate: '2024-01-09',
    message: 'Plan to upgrade server infrastructure to improve performance and scalability.',
    categories: ['IT', 'Infrastructure'],
    tags: ['infrastructure', 'servers', 'performance'],
    organization: 'Infrastructure Team',
    requestType: 'Infrastructure Request',
    uploadedFiles: [
      { id: 'f14', name: 'infrastructure-proposal.pdf', size: '3.8 MB', type: 'application/pdf', uploadedAt: '2024-01-09T08:00:00Z' },
      { id: 'f15', name: 'cost-estimate.xlsx', size: '567 KB', type: 'application/excel', uploadedAt: '2024-01-09T08:15:00Z' },
      { id: 'f16', name: 'timeline.pdf', size: '890 KB', type: 'application/pdf', uploadedAt: '2024-01-09T08:20:00Z' },
      { id: 'f17', name: 'vendor-quotes.zip', size: '4.2 MB', type: 'application/zip', uploadedAt: '2024-01-09T08:25:00Z' }
    ]
  },
  {
    id: '8',
    title: 'Customer Feedback Analysis',
    status: 'pending',
    submittedBy: 'Lisa Anderson',
    submittedDate: '2024-01-08',
    message: 'Detailed analysis of customer feedback from the last quarter with actionable insights.',
    categories: ['Customer Service', 'Analytics'],
    tags: ['feedback', 'analytics', 'customers'],
    organization: 'Customer Experience Team',
    requestType: 'Analysis Report',
    uploadedFiles: [
      { id: 'f18', name: 'feedback-analysis.pdf', size: '2.7 MB', type: 'application/pdf', uploadedAt: '2024-01-08T15:40:00Z' },
      { id: 'f19', name: 'survey-results.xlsx', size: '1.3 MB', type: 'application/excel', uploadedAt: '2024-01-08T15:45:00Z' }
    ]
  }
];

export const availableCategories = [
  'Design',
  'Development',
  'Marketing',
  'Finance',
  'HR',
  'Security',
  'Training',
  'IT',
  'Infrastructure',
  'Customer Service',
  'Analytics'
];

export const availableTags = [
  'urgent',
  'frontend',
  'ui-ux',
  'campaign',
  'social-media',
  'email',
  'feature',
  'accessibility',
  'ui',
  'budget',
  'hiring',
  'security',
  'audit',
  'critical',
  'training',
  'development',
  'employees',
  'infrastructure',
  'servers',
  'performance',
  'feedback',
  'analytics',
  'customers'
];

export const availableRequestTypes = [
  'Project Proposal',
  'Feature Request',
  'Budget Request',
  'Campaign Request',
  'Audit Report',
  'Training Proposal',
  'Infrastructure Request',
  'Analysis Report',
  'Data Request',
  'Policy Change'
];