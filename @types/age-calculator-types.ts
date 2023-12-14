export interface InitialValues {
  day: number;
  month: number;
  year: number;
}

export interface AgeInputTypes {
  label: string;
  name: string;
  value: string | number;
  error: undefined | null | string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  placeholder?: string;
  min: number;
  max: number;
}
