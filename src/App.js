import './App.css';
import CommentsApp from "./components/CommentsApp";
import DataProvider from "./providers/DataProvider";
import "antd/dist/antd.css";

function App() {
	return (
		<DataProvider>
			<CommentsApp />
		</DataProvider>
	);
}

export default App;
