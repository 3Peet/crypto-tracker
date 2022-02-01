import styled from "styled-components";

const TextGradient = ({children, fontSize}) => {
	return (
		<TextGradientContainer fontSize={fontSize}>
			{children}
		</TextGradientContainer>
	);
};

const TextGradientContainer = styled.h1`
	font-size: ${(props) => props.fontSize};
	font-weight: 700;
	display: inline;
	padding-right: 5px;
	line-height: 115%;
	background-image: linear-gradient(
		108deg,
		#b16cea 8%,
		#ff5e69 40%,
		#ff8a56 77%,
		#ffa84b 91%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export default TextGradient;
