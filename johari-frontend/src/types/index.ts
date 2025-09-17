export interface User {
  id: number;
  name: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
  projects: Project[];
}

export interface Adjective {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  user: number;
  created_at: string;
  updated_at: string;
  slug: string;
  adjectives?: number[];
}

export interface Feedback {
  id: number;
  created_at: string;
  updated_at: string;
  user: number;
  project: number;
  adjectives: number[];
}

export interface Language {
  code: 'en' | 'fa';
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface CreateProjectRequest {
  slug: string;
  user: number;
  adjectives: number[];
}

export interface CreateFeedbackRequest {
  user: number;
  project: number;
  adjectives: number[];
}