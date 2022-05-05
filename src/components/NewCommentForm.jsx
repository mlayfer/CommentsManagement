import React, {useState, useRef, useEffect} from "react";
import { Input, Button } from 'antd';
import {useCommentsData} from './../providers/DataProvider';

const { TextArea } = Input;

const NewCommentForm = (params) => {

	const { addComment } = useCommentsData();
	const [comment, setComment] = useState('');

	const onSend = () => {
		addComment(comment);
		setComment('');
	}

	return (
		<div className={'new-comment-form'}>
			   <Input.Group compact>
					<TextArea 
						style={{ width: 'calc(100% - 63px)', height: 55 }} 
						showCount 
						maxLength={100} 
						autoSize={{ minRows: 2, maxRows: 2 }}
						allowClear 
						value={comment}
						placeholder="Feel free to add a comment"
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button 
						type="primary" 
						style={{ backgroundColor: '#d0368a', height: 55 }}
						onClick={onSend}
					>
						Send
					</Button>
				</Input.Group>
		</div>
	);
};

export default NewCommentForm;
