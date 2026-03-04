


export type Styles = {
  primary: string;
  small: string;
  secondary: string; 
  round: string;
}

type handleClick = () => void;

export interface ButtonProps {
  children: string[] | string;
  disabled?: boolean;
  route?: string;
  onClick?: handleClick;
  type: keyof Styles;
}

export interface LinkButtonProps {
  children: string; 
  route: string;
}

export interface ControlItemProps {
  pizzaId: number;
  quantity : number
}