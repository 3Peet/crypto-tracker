import React from "react";
import {Card, Avatar} from "antd";
import styled from "styled-components";
import {Layout, Menu, Breadcrumb} from "antd";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
// import backgroundImage from "../bg-light-gradient.png";

const {Header, Content, Footer} = Layout;

export default function Home() {
	return (
		<BackgroundWrapper>
			{/* <img src="/bg-light-gradient.png" alt="1" /> */}
			<LayoutContainer className="layout">
				<Navbar />
				<Banner />
			</LayoutContainer>
		</BackgroundWrapper>
	);
}

const BackgroundWrapper = styled.div`
	background-image: url("/bg-light-gradient.png");
	background-repeat: no-repeat;
	background-position: center;
`;

const LayoutContainer = styled.div`
	height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px 0 0 0;
`;
