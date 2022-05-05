import React from "react";
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Comment = ({ item }) => {

	return (
		<List.Item key={item.id}>
			<List.Item.Meta
				className={'comment-info'}
				avatar={
					<Avatar icon={<UserOutlined />} />
				}
				title={item.name}
				description={item.email}
			/>
			<article 
				className={'comment-body'}
			>
				{item.body}
			</article>
		</List.Item>
	);

};

export default Comment;
