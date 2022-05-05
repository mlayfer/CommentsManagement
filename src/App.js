import './App.scss';
import CommentsApp from "./components/CommentsApp";
import "antd/dist/antd.css";
import DataProvider from './providers/DataProvider';

function App() {
	return (
		<DataProvider>
			<CommentsApp />
		</DataProvider>
	);
}

export default App;
