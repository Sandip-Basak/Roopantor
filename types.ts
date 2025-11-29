export interface Play {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

export interface Film {
  id: string;
  title: string;
  director: string;
  description: string;
  image: string;
  category: string;
  time: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface NavItem {
  label: string;
  path: string;
}