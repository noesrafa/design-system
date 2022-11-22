import * as icons from "../../../icons/icons";
import styled from "styled-components";

export type Icons = keyof typeof icons;
export interface IconProps {
  icon: Icons;
  size?: "xxsmall" | "xsmall" |"small" | "medium" | "large";
}

export const Icon = ({ size = "medium", icon, ...props }: IconProps) => {
  return (
    <StyledSpan size={size} {...props}>
      {icons[icon]()}
    </StyledSpan>
  );
};

interface Props {
  size?: string;
}

const iconSize = (props:any) => {
	// Fallback value if we can't get access to props
	if (!props || !props.size) return "32px";
	// If no variant is specified, return the primary colour in our theme
	if (!props.size) return "32px";

	// Dynamically determine the background colour based on props
	let size;
	switch (props.size) {
		case "xxsmall":
			size = "8px";
			break;
		case "xsmall":
			size = "16px";
			break;
		case "small":
			size = "32px";
			break;
		case "medium":
			size = "64px";
			break;
		case "large":
			size = "128px";
			break;
		default:
			size = "264px";
			break;
	}

	return size;
};


const StyledSpan = styled.span<Props>`
  & svg {
    width:  ${(props) => iconSize(props)} ;
    height:  ${(props) => iconSize(props)} ;
  }
`;