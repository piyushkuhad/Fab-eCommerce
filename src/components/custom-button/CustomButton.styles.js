import styled, { css } from 'styled-components';

const ButtonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border-color: transparent;
    }
`

const GoogleSignInStyles = css`
    background-color: #DB4437;
    color: #fff;

    &:hover{
        color: #DB4437;
        background-color: #fff;
        border-color: #DB4437;
    }
`

const GetButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return GoogleSignInStyles;
    }

    return props.inverted ? InvertedButtonStyles : ButtonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 14px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: normal;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
    display: flex;
    justify-content: center;

    ${GetButtonStyles}
`