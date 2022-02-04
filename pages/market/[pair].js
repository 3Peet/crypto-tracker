import React, {useEffect} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {LayoutContainer} from "..";
import Navbar from "../../components/Navbar";
import {Card, Button} from "antd";
import styled from "styled-components";
import Link from "next/link";
import PairDataCard from "../../components/PairDataCard";
import {
	fetch24hrsTicker,
	startPolling,
	stopPolling,
} from "../../redux/actions/market.action";

const Market = () => {
	// Get pair variable from route.
	const router = useRouter();
	const {pair} = router.query;

	// Setup dispatch and selector for interactive to the Redux.
	const dispatch = useDispatch();
	const {lastPrice, quoteVolume, priceChangePercent} = useSelector(
		({marketReducer}) => marketReducer.items
	);

	// Define Button type.
	const ButtonTypes = [
		{name: "BTC_THB"},
		{name: "BUSD_THB"},
		{name: "USDT_THB"},
	];

	// UseEffect active when changing route.
	useEffect(() => {
		dispatch(stopPolling());
		dispatch(startPolling(pair.toLowerCase()));
	}, [pair]);

	return (
		<>
			<Head>
				<title>Market - {pair.replace("_", "/")}</title>
			</Head>
			<LayoutContainer theme="light">
				<Navbar />

				<PairContainer>
					<CardGlass>
						<Card
							style={{width: 300, background: "none", border: "none"}}
							bodyStyle={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								height: 400,
							}}
						>
							<PairDataCard
								title={pair}
								quoteVolume={quoteVolume}
								lastPrice={lastPrice}
								priceChangePercent={priceChangePercent}
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
									<Link href={`/market/${item.name}`}>
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

const VerticalLine = styled.div`
	margin: 25px 0;
	border-left: 1px solid rgba(209, 213, 219, 0.3);
`;

const PairButton = styled(Button)`
	border-radius: 10px;

	:hover {
		transform: translateY(-2px);
		border: 1px solid #6d6875;
		transition: all 0.3s ease;
	}
`;

const PairContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 90px;
`;

const CardGlass = styled.div`
	display: flex;
	flex-direction: row-reverse;
	backdrop-filter: blur(18px) saturate(180%);
	-webkit-backdrop-filter: blur(18px) saturate(180%);
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: 12px;
	border: 1px solid rgba(209, 213, 219, 0.3);
`;

export default Market;
