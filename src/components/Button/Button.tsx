import styled from "styled-components";
import type {
  ButtonType,
  Sizes,
  ButtonProps,
  ButtonConfiguration,
} from "./types/ButtonTypes";

const StyledButton = styled.button<{
  $textColor?: string;
  $fontSize?: Sizes;
  $type: ButtonType;
  $radius?: string;
  $config: ButtonConfiguration;
  $size: Sizes;
}>`
  padding: 0.5rem 1rem;
  width: ${(props) => props.$config.sizes[props.$size].width};
  height: ${(props) => props.$config.sizes[props.$size].height};
  border-radius: ${(props) => props.$radius};
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.$config.colors[props.$type]};
  color: ${(props) => props.$textColor};
  font-size: ${(props) => {
    switch (props.$fontSize) {
      case "sm":
        return "0.875rem";
      case "md":
        return "1rem";
      case "lg":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.9);
  }
`;

export default function Button({
  children,
  type = "primary",
  size = "md",
  fontSize = "md",
  radius = "0.5rem",
  textColor = "#fff",
  onClick = () => {},
  config,
}: ButtonProps) {
  if (config === undefined) {
    config = {
      colors: {
        primary: "blue",
        secondary: "gray",
        warning: "yellow",
        danger: "red",
      },
      sizes: {
        sm: {width: "100px", height: "40px"},
        md: {width: "150px", height: "50px"},
        lg: {width: "200px", height: "60px"},
      },
    };
  }

  if (!config.colors) {
    config.colors = {
      primary: "blue",
      secondary: "gray",
      warning: "yellow",
      danger: "red",
    };
  }

  if (!config.sizes) {
    config.sizes = {
      sm: {width: "100px", height: "40px"},
      md: {width: "150px", height: "50px"},
      lg: {width: "200px", height: "60px"},
    };
  }

  return (
    <StyledButton
      $type={type}
      $size={size}
      $radius={radius}
      $fontSize={fontSize}
      $textColor={textColor}
      $config={config}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
