export type FieldType = "text" | "date" | "textarea" | "select" | "checkbox";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value: string }[];
};