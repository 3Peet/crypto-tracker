import React from "react";
import styled from "styled-components";
import {Layout} from "antd";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export default function Home() {
	return (
		<LayoutContainer theme="light">
			<Navbar />
			<Banner />
		</LayoutContainer>
	);
}

export const LayoutContainer = styled(Layout)`
	height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px 0 0 0;
	background-image: url("/bg-light-gradient.png");
	background-repeat: repeat-y;
	background-position: center;
`;
