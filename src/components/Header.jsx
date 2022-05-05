import React, {useState, useRef, useEffect} from "react";
import { Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = ({item}) => {

	return (
		<header className={'comments-app-header'}>
			    <Image
					width={60}
					src="assets/steps.png"
				/>
		</header>
	)
	
};

export default Header;
