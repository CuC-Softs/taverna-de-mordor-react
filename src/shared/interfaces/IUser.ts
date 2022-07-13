import { DateTime } from "luxon";
import IReviews from "./IReviews";

export default interface IUser {
  id: number;
  email: string;
  name: string;
  username: string;
  description: string;
  remember_me_token?: string;
  is_master: boolean;
  is_adm: boolean;
  cell_phone_number: string;
  instagram_ref?: string;
  photo_url?: string;
  created_at: DateTime;
  updated_at: DateTime;
  reviews: IReviews[];
  avaluation: number;
}
