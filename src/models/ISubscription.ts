import { IAuthor } from './IAuthor';

export interface ISubscription {
  createdAt: string;
  subscriberId: number;
  subscription: IAuthor;
}
