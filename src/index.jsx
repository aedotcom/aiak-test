import { createRoot } from 'react-dom/client';

// styles
import './index.css';

// project-imports
import App from './App';
import { PrimeReactProvider } from "primereact/api";
import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ConfigProvider>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
