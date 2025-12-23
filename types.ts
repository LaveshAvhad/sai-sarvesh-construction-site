
export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Renovation';
  image: string;
  description: string;
  location: string;
  status: 'Completed' | 'In Progress' | 'Planned';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
