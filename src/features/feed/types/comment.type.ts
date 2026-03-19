export interface Reply {
  id: string;
  name: string;
  role: string;
  content: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  name: string;
  role: string;
  content: string;
  createdAt: string;
  replies?: Reply[];
}   