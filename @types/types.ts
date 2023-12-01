export interface ContextTypes {
  data: string;
}

export interface ContextProviderPropTypes {
  children?: React.ReactNode;
}

export interface InitialValueTypes {
  bill_amount: number | null;
  tip: number | null;
  number_of_peoples: number | null;
}
