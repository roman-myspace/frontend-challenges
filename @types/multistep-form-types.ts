import { Dispatch, SetStateAction } from "react";

export interface ContextProviderPropTypes {
  children?: React.ReactNode;
}

export interface ContextTypes {
  totalSteps: number;
  currentStep: number;
  stepFormData: any;
  handleSetCurrentStep: (step: number) => void;
  handleSetFieldValue: (data: any) => void;
  handleSetSingleFieldValue: (key: string, value: any) => void;
}

export interface PersonalInfoTypes {
  name: string;
  email: string;
  phone: string;
}
