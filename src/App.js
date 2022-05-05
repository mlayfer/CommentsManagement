import "antd/dist/antd.css";
import './App.scss';
import CommentsApp from "./components/CommentsApp";
import DataProvider from './providers/DataProvider';

function App() {
	return (
		<DataProvider>
			<CommentsApp />
		</DataProvider>
	);
}

export default App;
