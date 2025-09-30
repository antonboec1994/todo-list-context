import Content from '../components/Layout/Content/Content';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';
import Layout from '../components/Layout/Layout';
import TodoForm from '../components/Todos/TodoForm/TodoForm';
import TodoList from '../components/Todos/TodoList/TodoList';
import TodosCounter from '../components/Todos/TodosCounter/TodosCounter';

const HomePage = () => {
	return (
		<>
			<Layout>
				<Header>
					<TodoForm />
				</Header>
				<Content>
					<TodoList />
				</Content>
				<Footer>
					<TodosCounter />
				</Footer>
			</Layout>
		</>
	);
};

export default HomePage;
