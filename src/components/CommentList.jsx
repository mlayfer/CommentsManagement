import React from "react";
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCommentsData } from './../providers/DataProvider';
import Comment from './Comment';
import constants from "../utils/constants";

const CommentList = () => {

	const { getComments, data, loading } = useCommentsData();

	return (
		<div
			id="scrollableDiv"
			className={'comments-list'}
		>
			<InfiniteScroll
				dataLength={data.length}
				next={getComments}
				hasMore={data.length < constants.MESSAGES_LIMIT}
				loader={
					<Skeleton 
						avatar 
						paragraph={{ rows: constants.COMMENT_ROWS }} 
						active={loading} 
					/>
				}
				endMessage={
					<Divider plain>It is all, nothing more 🤐</Divider>
				}
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
