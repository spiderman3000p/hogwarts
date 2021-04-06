import { Wand } from "./wand.model";

export class Teacher {
  actor: string = "";
  alive: boolean = false;
  ancestry: string = "";
  dateOfBirth: string = "";
  eyeColour: string = "";
  gender: string = "";
  hairColour: string = "";
  hogwartsStaff: boolean = false;
  hogwartsStudent: boolean = false;
  house: string = "";
  image: string = "";
  name: string = "";
  patronus: string = "";
  species: string = "";
  wand: Wand = new Wand();
  yearOfBirth: number = 0;
}
