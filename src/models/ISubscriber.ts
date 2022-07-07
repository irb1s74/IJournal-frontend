import { IAuthor } from './IAuthor';

export interface ISubscriber {
  createdAt: string;
  userId: number;
  subscriber: IAuthor;
}
