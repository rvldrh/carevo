export interface Comment {
  id: string;
  author: string;
  role: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
}