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
      id: i,
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

export const dummyBusinesses: Business[] = [
  {
    "id": 1,
    "name": "ABC Bookstore",
    "category": "Books",
    "logoUrl": "https://example.com/logos/abc-bookstore.png",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zipcode": "12345"
    },
    "onlineOnly": false,
    "owner": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890"
    }
  },
  {
    "id": 2,
    "name": "XYZ Electronics",
    "category": "Electronics",
    "logoUrl": "https://example.com/logos/xyz-electronics.png",
    "address": {
      "street": "456 Elm St",
      "city": "Othertown",
      "state": "NY",
      "zipcode": "54321"
    },
    "onlineOnly": true,
    "owner": {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "987-654-3210"
    }
  },
  {
    "id": 3,
    "name": "Fresh Groceries",
    "category": "Grocery",
    "logoUrl": "https://example.com/logos/fresh-groceries.png",
    "address": {
      "street": "789 Oak St",
      "city": "Smalltown",
      "state": "TX",
      "zipcode": "67890"
    },
    "owner": {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "555-123-4567"
    }
  },
  {
    "id": 4,
    "name": "Happy Pets",
    "category": "Pet Store",
    "logoUrl": "https://example.com/logos/happy-pets.png",
    "address": {
      "street": "101 Pine St",
      "city": "Sometown",
      "state": "FL",
      "zipcode": "54321"
    },
    "onlineOnly": false,
    "owner": {
      "name": "Michael Brown",
      "email": "michael.brown@example.com",
      "phone": "321-654-9870"
    }
  },
  {
    "id": 5,
    "name": "Fashion World",
    "category": "Clothing",
    "logoUrl": "https://example.com/logos/fashion-world.png",
    "address": {
      "street": "222 Maple St",
      "city": "Bigtown",
      "state": "CA",
      "zipcode": "98765"
    },
    "owner": {
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "phone": "111-222-3333"
    }
  },
  {
    "id": 6,
    "name": "Tech Solutions",
    "category": "Technology",
    "logoUrl": "https://example.com/logos/tech-solutions.png",
    "address": {
      "street": "333 Cedar St",
      "city": "Mediumtown",
      "state": "IL",
      "zipcode": "23456"
    },
    "onlineOnly": true,
    "owner": {
      "name": "Chris Wilson",
      "email": "chris.wilson@example.com",
      "phone": "444-555-6666"
    }
  },
  {
    "id": 7,
    "name": "Health Haven",
    "category": "Health",
    "logoUrl": "https://example.com/logos/health-haven.png",
    "address": {
      "street": "444 Walnut St",
      "city": "Largetown",
      "state": "OH",
      "zipcode": "34567"
    },
    "owner": {
      "name": "Jessica Lee",
      "email": "jessica.lee@example.com",
      "phone": "777-888-9999"
    }
  },
  {
    "id": 8,
    "name": "Home Decor Emporium",
    "category": "Home Goods",
    "logoUrl": "https://example.com/logos/home-decor-emporium.png",
    "address": {
      "street": "555 Ash St",
      "city": "Hometown",
      "state": "WA",
      "zipcode": "45678"
    },
    "owner": {
      "name": "Robert Garcia",
      "email": "robert.garcia@example.com",
      "phone": "222-333-4444"
    }
  },
  {
    "id": 9,
    "name": "Gourmet Delights",
    "category": "Food",
    "logoUrl": "https://example.com/logos/gourmet-delights.png",
    "address": {
      "street": "777 Oak St",
      "city": "Greenville",
      "state": "SC",
      "zipcode": "56789"
    },
    "onlineOnly": false,
    "owner": {
      "name": "Samantha Clark",
      "email": "samantha.clark@example.com",
      "phone": "999-000-1111"
    }
  },
  {
    "id": 10,
    "name": "Sports Central",
    "category": "Sports",
    "logoUrl": "https://example.com/logos/sports-central.png",
    "address": {
      "street": "888 Pine St",
      "city": "Mountaintown",
      "state": "CO",
      "zipcode": "76543"
    },
    "owner": {
      "name": "David Martinez",
      "email": "david.martinez@example.com",
      "phone": "666-777-8888"
    }
  }
]