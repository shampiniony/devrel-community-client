export interface IField {
  name: string;
  display_name: string;
  required: boolean;
}

export interface IFormData {
  name: string;
  fields: IField[];
}
  