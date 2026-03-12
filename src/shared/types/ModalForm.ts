export type TextFieldConfig = {
  type: "text";
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
};

export type DateFieldConfig = {
  type: "date";
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
};

export type MultiInputFieldConfig = {
  type: "multi-input";
  name: string;
  label: string;
  defaultValue?: string[];
};

export type FileFieldConfig = {
  type: "file";
  name: string;
  label: string;
};

export type YearFieldConfig = {
  type: "year";
  name: string;
  label: string;
  defaultValue?: string;
};

type RoleList = 
"UI/UX Designer" | 
"Frontend" | 
"Backend" | 
"Project Manager" | 
"Data Science" | 
"Data Engineer" | 
"Product Design" | 
"Product Manager" | 
"Fullstack"|
"AI/ML Engineer" |
"Cyber Security";

export type RoleOptions = {
  label: RoleList;
  value: RoleList;
};

export type RoleFieldConfig = {
  type: "role";
  name: string;
  label: string;
  options: RoleOptions[];
  defaultValue?: RoleList;
};

export type FormValue = string | string[] | File | null;

export type FormState = Record<string, FormValue>;

export type FieldConfig =
  | TextFieldConfig
  | DateFieldConfig
  | MultiInputFieldConfig
  | FileFieldConfig
  | YearFieldConfig
  | RoleFieldConfig;
