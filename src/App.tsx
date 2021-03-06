import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';


const App = () => {  
  return (
  <>
    <BrowserRouter>
        <Routes/>
        <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  </>
  )
};

export default App;