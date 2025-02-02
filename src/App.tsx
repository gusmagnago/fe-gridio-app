import { Layout } from './components/layout/Layout';
import { Login } from './pages/Login';

const App = () => {
  return (
    <Layout>
      <h1 className='text-2xl text-sky-500'>Hello world</h1>
      <Login />
    </Layout>
  );
};

export default App;
