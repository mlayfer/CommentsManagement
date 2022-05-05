import React, {useState, useRef, useEffect} from "react";
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Comment = ({item}) => {

	return (
		<List.Item key={item.id}>
			<List.Item.Meta
				className={'comment'}
				avatar={<Avatar icon={<UserOutlined />} />}
				title={<a href="#">{item.name}</a>}
				description={item.email}
			/>
			<div>{item.body}</div>
		</List.Item>
	);
};

export default Comment;
