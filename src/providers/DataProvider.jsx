import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../utils/api";
import constants from "../utils/constants";

const dataContext = React.createContext();

export const useCommentsData = () => {
	return useContext(dataContext);
};

const DataProvider = ({ children }) => {

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = () => {
		if (loading) {
			return;
		}
		setLoading(true);
		axios.get(`${api.getComments}?_limit=${constants.COMMENTS_RESULTS_BULK}`).then(res => {
			setData([...data, ...res.data]);
			setLoading(false);
		}).catch(function (error) {
			console.log(error.message);
			setLoading(false);
		})
	}

	const addComment = (text) => {
		const comment = {
			body: text,
			email: 'aviad@steps.me',
			name: 'Aviad Coppenhagen'
		}
		setData([comment, ...data]);
		axios.post(api.addComment, comment).then(res => {
			setData([...data, ...res.data]);
			console.log(`We're not really going to get here.. right?!`);
		}).catch(function (error) {
			console.log(error.message);
			console.log(`Don't be sad, it was a rigged game from the beginning`);
		})
	}

	return (
		<dataContext.Provider value={{
			data,
			loading,
			getComments,
			addComment,
		}}>
			{children}
		</dataContext.Provider>
	);

};

export default DataProvider;
