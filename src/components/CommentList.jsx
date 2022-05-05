import React, {useState, useRef, useEffect} from "react";
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useCommentsData} from './../providers/DataProvider';
import Comment from './Comment';

const CommentList = (params) => {

	const [loading, setLoading] = useState(false);
	const { getComments, data } = useCommentsData();

	return (
		<div
			id="scrollableDiv"
			className={'comments-list'}
		>
			<InfiniteScroll
				dataLength={data.length}
				next={getComments}
				hasMore={data.length < 500}
				loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
				endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
				scrollableTarget="scrollableDiv"
			>
				<List
					dataSource={data}
					renderItem={item => (
						<Comment item={item} />
					)}
				/>
			</InfiniteScroll>
		</div>
	);
};

export default CommentList;
