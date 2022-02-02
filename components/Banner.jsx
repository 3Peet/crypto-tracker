import {Layout} from "antd";
import styled from "styled-components";

import TextGradient from "../components/TextGradient";
import ButtonGradient from "./ButtonGradient";

const {Content} = Layout;
const Banner = () => {
	return (
		<Content style={{marginTop: "100px"}}>
			<BannerWrapper>
				<TextContainer>
					<TextGradient fontSize={"70px"}>Thailand's most trusted</TextGradient>
					<br />
					<TextBanner fontSize={"70px"}>digital asset exchange.</TextBanner>
					<br />
					<TextDetail>
						Buy, Sell and Store Tether, Bitcoin, Ethereum, Zcoin and
						cryptocurrencies with secure platform.
					</TextDetail>
					<ButtonGradient link="/market/BTC_THB" type="link">
						Market
					</ButtonGradient>

					<BlogLink>See the Blog</BlogLink>
				</TextContainer>

				<ImageBannerConatainer>
					<img src="sheild-dynamic-gradient.png" alt="demo" />
				</ImageBannerConatainer>
			</BannerWrapper>
		</Content>
	);
};

const BlogLink = styled.a`
	color: #000;
	font-size: 18px;
	line-height: 100%;
	font-weight: 700;
	margin-left: 40px;
	&:hover {
		color: #000;
	}
`;

const TextDetail = styled.p`
	margin: 30px 0;
	font-size: 22px;
	line-height: 150%;
	color: #666;
`;

const TextBanner = styled.h1`
	font-size: ${(props) => props.fontSize};
	font-weight: 700;
	line-height: 115%;
	margin: 0;
	display: inline;
`;

const BannerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TextContainer = styled.div`
	width: 40%;
`;

const ImageBannerConatainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: auto;
	img {
		width: 600px;
		height: 600px;
	}
`;

export default Banner;
