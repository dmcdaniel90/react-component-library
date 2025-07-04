type ButtonType = "primary" | "secondary" | "warning" | "danger";
type Sizes = "sm" | "md" | "lg";
type colorConfiguration = {
  primary: string;
  secondary: string;
  warning: string;
  danger: string;
  default?: string;
};

type sizeConfiguration = {
  sm: {width: string; height: string};
  md: {width: string; height: string};
  lg: {width: string; height: string};
};

type ButtonProps = {
  type?: ButtonType;
  size?: Sizes;
  fontSize?: Sizes;
  textColor?: string;
  radius?: string;
  children?: React.ReactNode;
  config?: ButtonConfiguration;
  onClick?: (e: React.MouseEvent) => void;
};

type ButtonConfiguration = {
  colors: colorConfiguration;
  sizes: sizeConfiguration;
};

export type {
  ButtonType,
  Sizes,
  colorConfiguration,
  sizeConfiguration,
  ButtonProps,
  ButtonConfiguration,
};
