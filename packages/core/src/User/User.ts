import { UserConfig } from "../UserConfig";

export class User {
  name: string;
  age: number;

  constructor(config: UserConfig) {
    this.name = config.name;
    this.age = config.age;
  }

  sayHello() {
    return `Hello. I'm ${this.name} and I'm ${this.age}.`;
  }
}
