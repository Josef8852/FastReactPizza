


export interface ButtonProps {
  children: string[] | string 
  disabled?: boolean;
  route?: string;
   type : keyof Styles
}

export type Styles = {
  primary: string;
  small: string;
  secondary: string; 
}

export interface LinkButtonProps {
  children: string; 
  route: string;
}