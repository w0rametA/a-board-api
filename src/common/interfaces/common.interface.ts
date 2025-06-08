export interface IBaseEntity {
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface IPaginateQuery {
  page: number
  limit: number
}

export interface IPaginateResponse<T> {
  data: T[]
  total: number
}
