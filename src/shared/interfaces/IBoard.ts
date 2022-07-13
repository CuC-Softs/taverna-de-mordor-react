import { DateTime } from "luxon";
import IEvent from "./IEvent";
import IReviews from "./IReviews";
import ISystem from "./ISystem";
import IUser from "./IUser";

export default interface IBoard {
  id: number;
  name: number;
  systemId: number;
  maxPlayers: number;
  masterId: number;
  master: IUser;
  system: ISystem[];
  reviews: IReviews[];
  events: IEvent[];
  players: IUser[];
  avaluation: number;
  currentSection: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}
