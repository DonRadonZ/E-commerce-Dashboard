import styled, { css } from "styled-components";

type FormProps = {
    type?: "regular" | "modal"
}

const Form = styled.form<FormProps>`
${(props) => 
    props.type === "regular" && css`
    padding: 2.4rem 4rem;

    background-color: var(--color-gray-0);
    border: var(--color-gray-100);
    border-radius: var(--border-radius-md);
    `
}

${(props) => 
    props.type === "modal" && css`
    width: 80rem;
    `}

    overflow: hidden;
    font-size: 1.4rem;
`;

Form.defaultProps = {
    type: "regular"
}

export default Form;