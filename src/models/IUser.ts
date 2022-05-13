export interface IUsers {
  id: number;
  name: string;
  email: string;
}

export interface IUsersInfo {
  data: Array<IUsers>,
  page: number,
  per_page: number,
  support: any,
  total: number,
  total_pages: 2
}

export interface ICreate {
  name: string,
  job: string
}

export interface IEdit extends ICreate {
  id: number
}
