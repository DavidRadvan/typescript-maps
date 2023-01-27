import { faker } from "@faker-js/faker";

export class User {
  name: string
  location: {
    lng: number,
    lat: number
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

}