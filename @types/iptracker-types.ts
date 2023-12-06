import { Dispatch, SetStateAction } from "react";

export interface ContextProviderPropTypes {
  children?: React.ReactNode;
}

export interface ContextTypes {
  ipData: any;
  getUserInfoByIP: (ip: string) => void;
}
