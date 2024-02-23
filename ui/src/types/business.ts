export type Business = {
  id: number,
  name: string,
  category: string,
  logoUrl: string,
  address: Address,
  onlineOnly?: boolean,
  owner: Owner
}

export type Address = {
  street: string,
  city: string,
  state: string,
  zipcode: string
}

export type Owner = {
  name: string,
  email: string,
  phone: string
}