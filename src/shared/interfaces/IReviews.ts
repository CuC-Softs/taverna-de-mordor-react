import { DateTime } from "luxon";
import IBoard from "./IBoard";
import IEvent from "./IEvent";
import IUserCardProps from "./IUserCardProps";

export default interface IReviews {
    id: number,
    rating: number,
    comment: string,
    senderId: number,
    sender: IUserCardProps,
    board: IBoard [],
    event: IEvent [],
    master: IUserCardProps [],
    createdAt: DateTime,
    updatedAt: DateTime
}