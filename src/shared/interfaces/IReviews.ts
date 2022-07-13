import { DateTime } from "luxon";
import IBoard from "./IBoard";
import IEvent from "./IEvent";
import IUser from "./IUser";

export default interface IReviews {
  id: number;
  rating: number;
  comment: string;
  senderId: number;
  sender: IUser;
  board: IBoard[];
  event: IEvent[];
  master: IUser[];
  createdAt: DateTime;
  updatedAt: DateTime;
}
