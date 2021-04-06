import { Wand } from "./wand.model";

export class Teacher {
  actor?: string;
  alive?: boolean;
  ancestry?: string;
  dateOfBirth?: string;
  eyeColour?: string;
  gender?: string;
  hairColour?: string;
  hogwartsStaff?: boolean;
  hogwartsStudent?: boolean;
  house?: string;
  image?: string;
  name?: string;
  patronus?: string;
  species?: string;
  wand?: Wand;
  yearOfBirth: number = 0;
}
