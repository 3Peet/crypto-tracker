import React, {useEffect} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getPairDataFetch} from "/redux/actions/pair.action";
import {LayoutContainer} from "..";
import Navbar from "../../components/Navbar";
import {Card, Button} from "antd";
import styled from "styled-components";
import Link from "next/link";
import PairDataCard from "../../components/PairDataCard";

const Market = () => {
	const router = useRouter();
	const {pair} = router.query;
	const dispatch = useDispatch();

	const pairData = useSelector(({pairDataReducer}) => pairDataReducer.pairData);

	const pairTypes = [
		{name: "BTC_THB"},
		{name: "BUSD_THB"},
		{name: "USDT_THB"},
		// {name: "ETH_THB"},
	];

	useEffect(() => {
		function FetchPairData() {
			return dispatch(getPairDataFetch(pair.toLowerCase()));
		}
		FetchPairData();

		const interval = setInterval(() => {
			FetchPairData();
		}, 5000);
		return () => clearInterval(interval);
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
								quoteVolume={pairData.quoteVolume}
								lastPrice={pairData.lastPrice}
								priceChangePercent={pairData.priceChangePercent}
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
							{pairTypes.map((item, index) => (
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
