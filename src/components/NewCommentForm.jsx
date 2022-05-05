import React, { useState } from "react";
import { Input, Button } from 'antd';
import { useCommentsData } from './../providers/DataProvider';
import constants from "../utils/constants";

const { TextArea } = Input;

const NewCommentForm = () => {

	const { addComment } = useCommentsData();
	const [comment, setComment] = useState('');

	const onSend = () => {
		addComment(comment);
		setComment('');
	}

	return (
		<section className={'new-comment-form'}>
			   <Input.Group compact>
					<TextArea 
						className={'new-comment-form-textarea'} 
						maxLength={constants.COMMENT_MAX_LENGTH} 
						autoSize={{ 
							minRows: constants.COMMENT_ROWS, 
							maxRows: constants.COMMENT_ROWS 
						}}
						placeholder="Feel free to add a new comment"
						allowClear 
						showCount
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button 
						className={'new-comment-form-btn'}
						type="primary" 
						onClick={onSend}
					>
						Send
					</Button>
				</Input.Group>
		</section>
	);

};

export default NewCommentForm;
