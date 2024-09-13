import Router from './components/contexts/Router';
import { paths } from './constant';
import './styles/_index.scss';

function App() {
  return (
    <>
      <Router defaultRoute={paths.home} />
    </>
  );
}

export default App;
