import styled, { css } from "styled-components";

const Button1 = styled.button`
	${(props) =>
		props.devEnvironment
			? css`
					background-color: #5579fe;
			  `
			: css`
					background-color: #ffffff;

			  `}

`;

export default Button1;