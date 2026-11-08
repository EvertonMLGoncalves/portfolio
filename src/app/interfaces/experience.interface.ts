export type EmploymentType = 'fullTime' | 'internship' | 'apprenticeship';
export type WorkMode = 'hybrid' | 'onSite';

export interface Role {
  id: string;
  start: string;
  end: string | null;
  type: EmploymentType;
  mode: WorkMode;
  skills: string[];
}

export interface Experience {
  company: {
    name: string;
    url: string;
  };
  roles: Role[];
}

