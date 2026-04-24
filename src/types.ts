export type Contact = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type CvData = {
  name: string;
  title: string;
  avatar: string;
  contact: Contact;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
};
