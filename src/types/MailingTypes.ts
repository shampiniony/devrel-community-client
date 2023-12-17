export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string | null;
  middle_name: string | null;
  phone_number: string | null;
  telegram_url: string;
  telegram_id: string;
  city: string | null;
  sex: string | null;
  birth_date: string | null;
  grade: string | null;
  work_experience: number;
  specializations: string[];
  skills: string[];
}

export interface IMail {
  text: string;
  subject: string;
  message: string;
  html_message: string;
}
