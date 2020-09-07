export const API_ENDPOINT = "http://localhost:8080"
export interface ResultList {
  count: number
  results: any
}
export interface Attribute {
  id: string
  name?: string
  desc?: string
}
export interface Character {
  nickname: string
  name: string
  age: Number
  mainClass: Attribute
  subClass: Attribute
  race: Attribute
  equipments?: Attribute[]
  spells?: Attribute[]
}

export interface CharacterNicknameResponse {
  nickname: string
  exists: boolean
}

export interface CharacterReferenceResponse {
  id: string
  nickname: string
  url: string
}
