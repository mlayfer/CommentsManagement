import React, {useState, useRef, useEffect} from "react";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentList";

const CommentsApp = (params) => {

	return (
		<div className={'comments-app-container'}>
			<h2>Welcome to the Comments app</h2>
			<h4>The best place in town for reading fake comments and express yourself with data which will not be added to any database</h4>
			<NewCommentForm />
			<CommentList />
		</div>	);
};

export default CommentsApp;
