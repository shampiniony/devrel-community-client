import { IUser } from './MailingTypes';

export interface IEvent {
  id: number;
  title: string;
  speakers: string;
  banner: string | null;
  description: string;
  event_type: string;
  location: string;
  participants: IUser[];
  start_time: string;
  end_time: string;
  social_media_link: string;
}