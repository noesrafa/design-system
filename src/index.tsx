import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "styled-components";
import themeDefault from './stories/particles/themeDefault';
import GlobalStyles from './stories/particles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
);;
