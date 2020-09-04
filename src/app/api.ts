
export const API_ENDPOINT = "https://radd-api.herokuapp.com"

export interface Character {
  id?: string
  nickname: string
  name: string
  race?: Attribute,
  mainClass?: Attribute,
  subClass?: Attribute
  spells?: Attribute[],
  equipments?: Attribute[]
}

export interface ResultList {
  count: number
  results: any
}

export interface Attribute {
  index: string
  name: string
  desc?: string
}
