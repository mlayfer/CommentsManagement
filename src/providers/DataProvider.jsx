
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import api from "../utils/api";

const dataContext = React.createContext();

export const useData = () => {
	return useContext(dataContext);
};

const DataProvider = ({children}) => {

	const [data, setData] = useState();

	useEffect(() => {
		getComments();
	}, []);

	const getComments = () => {
		axios.get(api.getComments).then(res => {
			console.log(res);
			setData(res);
		}).catch(function (error) {
			console.log(error.message);
		})
	}

	return (
		<dataContext.Provider value={{
			data,
		}}>
			{children}
		</dataContext.Provider>
	);

};

export default DataProvider;
