
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import api from "../utils/api";

const dataContext = React.createContext();

export const useCommentsData = () => {
	return useContext(dataContext);
};

const DataProvider = ({children}) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = () => {
		axios.get(`${api.getComments}?_limit=20`).then(res => {
			setData([...data, ...res.data]);
		}).catch(function (error) {
			console.log(error.message);
		})
	}

	const addComment = (comment) => {
		axios.post(api.addComment, {comment}).then(res => {
			setData([...data, ...res.data]);
		}).catch(function (error) {
			console.log(error.message);
		})
	}

	return (
		<dataContext.Provider value={{
			data,
			getComments,
			addComment,
		}}>
			{children}
		</dataContext.Provider>
	);

};

export default DataProvider;
