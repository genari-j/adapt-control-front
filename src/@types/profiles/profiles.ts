export interface Profiles {
  id: number
  name: string
  description: string
  active: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface ProfilesProps  {
  data: Profiles[]
}