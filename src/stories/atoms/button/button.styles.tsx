import styled from 'styled-components'

const buttonBackground = (props:any) => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.primary) return "#ff00ea";
	// If no variant is specified, return the primary colour in our theme
	if (!props.variant) return props.theme.primary;

	// Dynamically determine the background colour based on props
	let colour;
	switch (props.variant) {
		case "primary":
			colour = props.theme.primary;
			break;
		case "secondary":
			colour = props.theme.secondary;
			break;
		case "tertiary":
			colour = props.theme.tertiary;
			break;
		default:
			colour = props.theme.primary;
			break;
	}

	return colour;
};

interface Props {
	variant: string;
}

const StyledButton = styled.button<Props>`
    cursor: pointer;
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 100px;
    background-color: ${(props) => buttonBackground(props)};
    color: #fff;
    transition: 300ms;
    &:hover {
        opacity: 0.8;
    }
`

export default StyledButton;