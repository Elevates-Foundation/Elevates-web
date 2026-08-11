export interface Advisor {
  name: string;
  role: string;
  department: string;
  college: string;
  campusSlug?: string;
}

export const ADVISORS: Advisor[] = [
  {
    name: "Jasira KT",
    role: "Faculty Head",
    department: "Computer Science & Engineering",
    college: "Eranad Knowledge City, Manjeri",
    campusSlug: "eranad-knowledge-city",
  },
  {
    name: "Anu K Soman",
    role: "HOD",
    department: "Computer Science & Engineering",
    college: "Eranad Knowledge City, Manjeri",
    campusSlug: "eranad-knowledge-city",
  },
];
