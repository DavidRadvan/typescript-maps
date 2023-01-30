import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string
  location: {
    lng: number,
    lat: number
  }
  color: string = 'blue'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

  markerContent(): string {
    return `<div><h1>User name: ${this.name}</h1></div>`;
  }

}