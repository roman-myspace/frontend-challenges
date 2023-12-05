import { Dispatch, SetStateAction } from "react";

export interface ContextProviderPropTypes {
  children?: React.ReactNode;
}

export interface ContextTypes {
  toggleDarkMode?: () => void;
  isDarkTheme: boolean;
  countries?: any | null;
  data: any | null;
  filter: string | null;
  regions: any | [];
  resetFilter: boolean;
  setFilter: any;
  setResetFilter: Dispatch<SetStateAction<boolean>>;
  handleSearchCountry: (e: any) => void;
  handleFilterResult: (data: string) => void;
  resetFilterResults: () => void;
  handleSetFilterData: (data: any) => void;
}
