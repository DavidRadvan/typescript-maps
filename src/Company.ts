import { faker } from "@faker-js/faker";

export class Company {
  companyName: string
  catchphrase: string
  location: {
    lng: number,
    lat: number
  }

  constructor() {
    this.companyName = faker.name.firstName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

}