import {User} from "./user";
import {Task} from "./task";

export  class Meeting {
  id : number;
  title : string;
  venue : string;
  meeting_date : Date;
  date : string;
  user : User;
  task : Task;
}

