import { Address } from "./Address";
import { PhotoModel } from "./PhotoModel";
import { User } from "./User";

export class Advertise{
    
  constructor(public company:string,public contact:string,public address:Address,public category:string,public adv_id?:number,public user?:User,public photo?:PhotoModel){

  }

	
}