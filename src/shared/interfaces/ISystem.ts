import { DateTime } from "luxon";
import IBoard from "./IBoard";

export default interface ISystem {
    id: number,
    name: string,
    photoUrl?: string,
    website: string,
    boards: IBoard [],
    slug: string,
    createdAt: DateTime,
    updatedAt: DateTime
}