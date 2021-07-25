import Routes from './routes';
import CreateGlobalStyle from './globalStyled';
import Home from './views/Home';

const App = () => {
  return (
    <>
      <CreateGlobalStyle />
      <Routes>
        <Home />
      </Routes>
    </>
  );
}

export default App;