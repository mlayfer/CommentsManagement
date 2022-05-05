import React from "react";
import { Image } from 'antd';
import constants from "../utils/constants";

const Header = () => {

	return (
		<header className={'comments-app-header'}>
			<Image
				width={constants.HEADER_LOGO_WIDTH}
				src="assets/steps.png"
			/>
		</header>
	)
	
};

export default Header;
