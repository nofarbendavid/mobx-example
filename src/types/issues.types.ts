export interface Issue {
  id: number;
  title: string;
  state: string;
  number: number;
  created_at: Date
  user: {
    login: string;
  };
  comments: number;
}

export interface IssuesMap {
  [key: number]: Issue;
}

export type IssuesApiResponse = Issue[];
