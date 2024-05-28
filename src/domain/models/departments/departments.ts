export interface Departments {
  id: number
  name: string
  active: number
  created_at: string | null
}

export interface DepartmentsProps  {
  data: Departments[]
}