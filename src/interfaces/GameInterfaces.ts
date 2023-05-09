export interface Platforms {
  platform: {
    id: number
    name: string
    slug: string
  }
}

export interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: Platforms[]
}
export interface GamesData {
  results: Games[]
  count: number
}
