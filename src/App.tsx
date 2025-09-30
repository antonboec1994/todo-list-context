import { lazy, Suspense } from 'react';
import './App.css';
import './assets/variables.scss';
import { TodoContextProvider } from './context/TodoContext';
import { BrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const fallback = <div>Идёт загрузка...</div>;

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={fallback}>
					<TodoContextProvider>
						<HomePage />
					</TodoContextProvider>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
