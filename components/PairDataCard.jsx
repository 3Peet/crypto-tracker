import styled from "styled-components";
import Image from "next/image";
import {Statistic} from "antd";
import {
	ArrowUpOutlined,
	ArrowDownOutlined,
	CaretUpFilled,
	CaretDownFilled,
} from "@ant-design/icons";

const PairDataCard = ({
	title,
	lastPrice,
	quoteVolume,
	priceChangePercent = false,
}) => {
	return (
		<PariDataCardContainer>
			<PairDataCardTitle>
				<p>{title.replace("_", "/")}</p>
				<PairLogo
					src={`https://storage.googleapis.com/satang-pro/public/assets/icons/coins/${title
						.split("_")[0]
						.toLowerCase()}.png`}
					alt="coin"
					width={24}
					height={24}
				/>
			</PairDataCardTitle>
			<Statistic
				value={lastPrice}
				precision={2}
				valueStyle={{marginTop: "-10px"}}
			/>
			<PairDataCardButtom>
				{priceChangePercent && (
					<div>
						{priceChangePercent >= 0 ? (
							<CaretUpFilled
								style={{
									fontSize: "0.8rem",
									color: "green",
									display: "flex",
									alignItems: "center",
									marginRight: "5px",
								}}
							/>
						) : (
							<CaretDownFilled
								style={{
									fontSize: "0.8rem",
									color: "red",
									display: "flex",
									alignItems: "center",
									marginRight: "5px",
								}}
							/>
						)}
						<PercentStatistic value={priceChangePercent}>
							{" "}
							{`${Number(priceChangePercent).toFixed(2)}%`}
						</PercentStatistic>
					</div>
				)}

				<Statistic
					prefix={"Volume:"}
					value={quoteVolume}
					precision={2}
					valueStyle={{color: "#8b8e99", fontSize: "0.8071rem"}}
				/>
			</PairDataCardButtom>
		</PariDataCardContainer>
	);
};

const PairDataCardButtom = styled.div`
	display: flex;

	& > div {
		display: flex;
	}
`;

const PercentStatistic = styled.div`
	margin-right: 10px;
	font-size: 0.8071rem;
	font-weight: 500;
	color: ${(props) => (props.value > 0 ? "green" : "red")};
`;

const PairLogo = styled(Image)`
	position: relative;
`;

const PairDataCardTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
const PariDataCardContainer = styled.div`
	width: 100%;
	height: 130px;
	padding: 20px 15px;
	box-shadow: 0 10px 40px rgb(0 0 0 / 4%);
	border-radius: 10px;
	background-color: white;
`;

export default PairDataCard;
