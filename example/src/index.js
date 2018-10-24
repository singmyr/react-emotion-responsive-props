import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App prop1={[1,2,3]} prop2={[4,5,6]} />
    </ThemeProvider>, document.getElementById('root'));
