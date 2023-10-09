export interface IMeta {
  limit: number;
  page: number;
  size: number;
  total: number;
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message?: string;
  errorMessages: IGenericErrorMessage[];
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
