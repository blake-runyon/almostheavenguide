import { faker } from '@faker-js/faker';
import { Business } from '../types/business';

export function generateFakeBusiness(): Business {
  let business: Business = {
    id: faker.number.int({ min: 1, max: 10000 }),
    name: faker.company.name(),
    category: faker.company.buzzNoun(),
    logoUrl: faker.image.urlPlaceholder(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: 'WV',
      zipcode: faker.location.zipCode()
    },
    owner: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number()
    },
    onlineOnly: faker.datatype.boolean()
  };

  return business;
}

export function generateFakeBusinessArray(amount?: number): Business[] {
  let retVal = [] as Business[];
  if(!amount) {
    amount = 5;
  }

  for(let i = 0; i < amount; i++) {
    let business: Business = {
      id: faker.number.int({ min: 1, max: 10000 }),
      name: faker.company.name(),
      category: faker.company.buzzNoun(),
      logoUrl: faker.image.urlPlaceholder(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: 'WV',
        zipcode: faker.location.zipCode()
      },
      owner: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number()
      },
      onlineOnly: faker.datatype.boolean()
    };

    retVal.push(business);
  }

  return retVal;
}