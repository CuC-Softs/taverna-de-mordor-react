import { DateTime } from "luxon";
import IEvent from "./IEvent";
import IReviews from "./IReviews";
import ISystem from "./ISystem";
import IUserCardProps from "./IUserCardProps";

export default interface IBoard {
    id: number,
    name: number,
    systemId: number,
    maxPlayers: number,
    masterId: number,
    master: IUserCardProps,
    system: ISystem [],
    reviews: IReviews [],
    events: IEvent [],
    players: IUserCardProps [],
    avaluation: number,
    currentSection: number,
    createdAt: DateTime,
    updatedAt: DateTime
}