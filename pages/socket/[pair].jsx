import React, {useEffect, useState} from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import {useRouter} from "next/router";
import {LayoutContainer} from "..";
import {CardGlass, PairContainer, VerticalLine} from "../market/[pair]";
import {Card, Button} from "antd";
import styled from "styled-components";
import Link from "next/link";
import PairDataCard from "../../components/PairDataCard";

const Websocket = () => {
	// Get pair variable from route.
	const router = useRouter();
	const {pair} = router.query;

	// Define Button type.
	const ButtonTypes = [
		{name: "BTC_THB"},
		{name: "BUSD_THB"},
		{name: "USDT_THB"},
	];

	// manage pair data
	const [data, setData] = useState([{c: 0, q: 0}]);

	useEffect(() => {
		// Create WebSocket connection. [Updating data every 3 seconds.]
		const socket = new WebSocket("wss://ws.satangcorp.com/ws/!miniTicker@arr");

		// Listen for messages
		socket.addEventListener("message", function (event) {
			setData(
				JSON.parse(event.data).filter((item) => item.s === pair.toLowerCase())
			);
		});

		// Unmount WebSocket | Disconnected
		return () => {
			socket.close();
		};
	}, [pair]);

	return (
		<>
			<Head>
				<title>WebSocket - {pair.replace("_", "/")}</title>
			</Head>
			<LayoutContainer>
				<Navbar />
				<PairContainer>
					<CardGlass>
						<Card
							style={{width: 300, background: "none", border: "none"}}
							bodyStyle={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								height: 400,
							}}
						>
							<PairDataCard
								title={pair}
								lastPrice={data[0].c}
								quoteVolume={data[0].q}
							/>
						</Card>
						<VerticalLine />
						<Card
							style={{width: 300, background: "none", border: "none"}}
							bodyStyle={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								height: 400,
							}}
						>
							{ButtonTypes.map((item, index) => (
								<PairButton key={index} style={{margin: 10, height: 50}}>
									<Link href={`/socket/${item.name}`}>
										{item.name.replace("_", "/")}
									</Link>
								</PairButton>
							))}
						</Card>
					</CardGlass>
				</PairContainer>
			</LayoutContainer>
		</>
	);
};

const PairButton = styled(Button)`
	border-radius: 10px;
	:hover {
		transform: translateY(-2px);
		border: 1px solid #6d6875;
		transition: all 0.3s ease;
	}
`;

export default Websocket;
