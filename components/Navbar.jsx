import {Layout, Menu} from "antd";
import styled from "styled-components";
import Link from "next/link";
const {Header} = Layout;

const Navbar = () => {
	return (
		<HeaderContainer>
			<NavbarContainer>
				<TextLogo className="logo">
					<Link href="/">Crypto.</Link>
				</TextLogo>
				<MenuContainer
					theme="light"
					mode="horizontal"
					triggerSubMenuAction="click"
				>
					<MenuItemText key={"home"}>
						<Link href="/">Home</Link>
					</MenuItemText>
					<MenuItemText key={"market"}>
						<Link href="/market/BTC_THB">Market</Link>
					</MenuItemText>
					<MenuItemText key={"websocket"}>
						<Link href="/socket/BTC_THB">Websocket</Link>
					</MenuItemText>
					<MenuItemText key={"contact"}>Contact</MenuItemText>
				</MenuContainer>
			</NavbarContainer>
		</HeaderContainer>
	);
};

export default Navbar;

const MenuItemText = styled(Menu.Item)`
	font-weight: 500;
	font-size: 16px;
`;

const MenuContainer = styled(Menu)`
	background: none;
	display: flex;
	justify-content: flex-end;
	width: 500px !important;
	.ant-menu-horizontal,
	.ant-menu-item::after {
		border: none !important;
	}
	.ant-menu-item-selected {
		color: black !important;
	}
	.ant-menu-item:hover {
		color: #666 !important;
	}
	border: none;
`;

const HeaderContainer = styled(Header)`
	background: none;
	padding: 0;
`;

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TextLogo = styled.div`
	color: black;
	font-size: 28px;
	font-weight: 700;
	:hover {
		cursor: pointer;
	}
`;
