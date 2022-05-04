import React, {useState, useRef, useEffect} from "react";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentList";

const CommentsApp = (params) => {

	return (
		<div>
			<NewCommentForm />
			<CommentList />
		</div>	);
};

export default CommentsApp;
