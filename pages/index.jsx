import React from "react";
import styled from "styled-components";
import Head from "next/head";
import {Layout} from "antd";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export default function Home() {
	return (
		<>
			<Head>
				<title>Crypto Tracker 24/7</title>
			</Head>
			<LayoutContainer theme="light">
				<Navbar />
				<Banner />
			</LayoutContainer>
		</>
	);
}

export const LayoutContainer = styled(Layout)`
	height: 100vh;
	width: 85%;
	max-width: 1215px;
	margin: 0 auto;
	padding: 20px 0 0 0;
	background-image: url("/bg-light-gradient.png");
	background-repeat: repeat-y;
	background-position: center;
`;
