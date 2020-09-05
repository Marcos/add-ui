export const API_ENDPOINT = "https://radd-api.herokuapp.com"
export interface ResultList {
  count: number
  results: any
}
export interface Attribute {
  index: string
  name: string
  desc?: string
}
