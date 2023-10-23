import styled, { css } from "styled-components";

export const H1 = styled.h1`
    background: -webkit-linear-gradient(dodgerblue, black);
    font-family: "ff-serif";
    font-weight: normal;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${(props) => css`
        font-size: ${props.fontSize};
    `}
`;
