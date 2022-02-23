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
	const [data, setData] = useState([{s: pair.toLowerCase(), c: 0, q: 0}]);
	const [filteredData, serFilteredData] = useState([{c: 0, q: 0}]);
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		// Create WebSocket connection.
		const socket = new WebSocket("wss://ws.satangcorp.com/ws/!miniTicker@arr");

		// Listen for messages
		socket.addEventListener("message", function (event) {
			if (!isConnected) setIsConnected(true);
			setData(JSON.parse(event.data));
		});

		// Unmount WebSocket | Disconnected
		return () => {
			socket.close();
		};
	}, []);

	// Filtering data
	useEffect(() => {
		serFilteredData(data.filter((item) => item.s === pair.toLowerCase()));
	}, [data, pair]);

	return (
		<>
			<Head>
				<title>WebSocket - {pair.replace("_", "/")}</title>
			</Head>
			<LayoutContainer>
				<Navbar />
				{!isConnected ? (
					<LoadingContainer>Loading . . .</LoadingContainer>
				) : (
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
									lastPrice={filteredData[0].c}
									quoteVolume={filteredData[0].q}
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
				)}
			</LayoutContainer>
		</>
	);
};

const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 200px;
`;

const PairButton = styled(Button)`
	border-radius: 10px;
	:hover {
		transform: translateY(-2px);
		border: 1px solid #6d6875;
		transition: all 0.3s ease;
	}
`;

export default Websocket;
