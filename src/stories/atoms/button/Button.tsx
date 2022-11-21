import { func, string, node } from "prop-types";
import StyledButton from "./button.styles";

interface Props {
  children: any;
  onClick?: () => void;
  variant?: string;
}

export default function Button({
  children,
  variant = "primary",
  ...props
}:Props) {
  return (
    <StyledButton
      onClick={() => props.onClick?.()}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: func,
  variant: string,
  children: node.isRequired
};