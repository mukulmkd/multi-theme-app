import logo from './logo.svg';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import ThemeSelector from './ThemeSelector';
import { useSelector } from 'react-redux';

const SytledH1 = styled.h1`
  color: ${(props) => props.theme.primary};
`;
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};;
  }
`;
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <header className='App-header'>
          <SytledH1>React Themes Demo</SytledH1>
          <ThemeSelector></ThemeSelector>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
