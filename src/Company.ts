import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string
  catchphrase: string
  location: {
    lng: number,
    lat: number
  }
  color: string = 'red'

  constructor() {
    this.companyName = faker.name.firstName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

  markerContent(): string {
    return `<div><h1>Company name: ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchphrase}</h3></div>`;
  }

}