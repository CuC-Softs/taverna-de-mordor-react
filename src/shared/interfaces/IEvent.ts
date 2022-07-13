import { DateTime } from "luxon";
import IBoard from "./IBoard";
import IReviews from "./IReviews";

export default interface IEvent {
    id: number,
    name: string,
    date: DateTime,
    description: string,
    maxBoards: number,
    time: number,
    occupiedBoards: number,
    reviews: IReviews [],
    boards: IBoard [],
    avaluation: number,
    theme: string,
    location: string,
    createdAt: DateTime,
    updatedAt: DateTime
}