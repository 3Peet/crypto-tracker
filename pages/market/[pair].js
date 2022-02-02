import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getPairDataFetch} from "/redux/actions/pairData.action";
import {LayoutContainer} from "..";
import Navbar from "../../components/Navbar";
import {Card, Statistic, Button} from "antd";
import styled from "styled-components";
import Link from "next/link";

const Market = () => {
	const router = useRouter();
	const {pair} = router.query;
	const dispatch = useDispatch();

	const pairData = useSelector(
		({pairDataReducer}) => pairDataReducer.pairData.lastPrice
	);

	useEffect(() => {
		console.log(pair);
		dispatch(getPairDataFetch(pair.toLowerCase()));
		const interval = setInterval(() => {
			dispatch(getPairDataFetch(pair.toLowerCase()));
		}, 5000);
		return () => clearInterval(interval);
	}, [pair]);

	return (
		<LayoutContainer theme="light">
			<Navbar />
			<PairContainer>
				<Card style={{width: 300}}>
					<Statistic
						title={pair.replace("_", "/")}
						value={pairData}
						precision={2}
					></Statistic>
				</Card>
				<Card
					bodyStyle={{
						display: "flex",
						flexDirection: "column",
					}}
					style={{width: 300}}
				>
					<Button
						style={{margin: 10}}
						onClick={() => {
							console.log(pair);
						}}
					>
						<Link href="/market/BTC_THB">BTC/THB</Link>
					</Button>
					<Button
						style={{margin: 10}}
						onClick={() => {
							console.log(pair);
						}}
					>
						<Link href="/market/BUSD_THB">BUSD/THB</Link>
					</Button>
					<Button
						style={{margin: 10}}
						onClick={() => {
							console.log(pair);
						}}
					>
						<Link href="/market/USDT_THB">USDT/THB</Link>
					</Button>
					<Button
						style={{margin: 10}}
						onClick={() => {
							console.log(pair);
						}}
					>
						<Link href="/market/ETH_THB">ETH/THB</Link>
					</Button>
				</Card>
			</PairContainer>
		</LayoutContainer>
	);
};

const PairContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default Market;
