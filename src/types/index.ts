export interface TimeEntry {
  id: string;
  projectId: string;
  description: string;
  startTime: Date;
  endTime?: Date;
  duration: number;
  tags: string[];
}

export interface Project {
  id: string;
  name: string;
  clientId: string;
  status: 'active' | 'completed' | 'archived';
  hourlyRate: number;
  currency: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  address: string;
}