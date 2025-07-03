import { styled } from "styled-components";
import Button from "./components/Button/Button";
import type { ButtonConfiguration } from "./components/Button/types/ButtonTypes";

const myConfig: ButtonConfiguration = {
  colors: {
    primary: "hsl(127, 41%, 58%)",
    secondary: "hsl(0, 0%, 75%)",
    warning: "hsl(65, 82%, 68%)",
    danger: "hsl(0, 88%, 64%)",
  },
  sizes: {
    sm: { width: "100px", height: "40px" },
    md: { width: "150px", height: "50px" },
    lg: { width: "200px", height: "60px" },
  },
};

// Flexbox component for layout, using styled-components
const FlexBox = styled.div<{ $direction?: "row" | "column"; $gap?: number }>`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.$gap || 1}rem;
  flex-wrap: wrap;
`;
function App() {
  // Handle button click
  const handleClick = (e: React.MouseEvent) => {
    alert(`clicked ${(e.target as HTMLElement).innerText}`);
  };

  return (
    <FlexBox $direction="row" $gap={2}>
      <h2 style={{ textAlign: "center", width: "100%" }}>Buttons</h2>
      <Button type="primary" size="lg" fontSize="lg" radius="2rem" onClick={handleClick} config={myConfig}>
        Enter
      </Button>
    </FlexBox>
  );
}

export default App;
