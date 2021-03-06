import {Button} from "antd";
import styled from "styled-components";

const ButtonGradient = ({children, link}) => {
	return (
		<ButtonGradientContainer>
			<ButtonGradientText>
				<a href={link}>{children}</a>
			</ButtonGradientText>
			<ShadowGradient />
		</ButtonGradientContainer>
	);
};

const ButtonGradientContainer = styled.div`
	position: relative;
	overflow: visible;
	max-width: 100%;
	display: inline-block;
`;

const ShadowGradient = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	padding: 20px 30px;
	background-image: linear-gradient(
		108deg,
		#b16cea 8%,
		#ff5e69 40%,
		#ff8a56 77%,
		#ffa84b 91%
	);
	-webkit-transform: translate(7px, 7px);
	-ms-transform: translate(7px, 7px);
	transform: translate(7px, 7px);
`;

const ButtonGradientText = styled(Button)`
	transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
		rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
	transform-style: preserve-3d;
	position: relative;
	z-index: 1;
	padding: 20px 30px;
	background-color: #000;
	color: #fff;
	font-size: 18px;
	line-height: 100%;
	font-weight: 500;
	height: auto;
	border: none;
	&:hover {
		color: #fff;
		background-color: #000;
		transform: translate3d(7px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
		transform-style: preserve-3d;
	}
`;

export default ButtonGradient;
