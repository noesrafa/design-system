import styled from "styled-components";

export default function Button ({children, onClick, href,...props}) {
    if (href) return (
        <a href={href}>{children}</a>
    )
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: green;
`