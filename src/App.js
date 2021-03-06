import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/Global/Header/Header';
import Landing from './components/Pages/Landing/Landing';
import UserHome from './components/Pages/UserHome/UserHome';
import Resources from './components/Pages/Resources/Resources';
import Admin from './components/Pages/Admin/Admin';
import './styles/main.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#475c87',
      light: '#7589b7',
      dark: '#18335a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#772424',
      light: '#aa514c',
      dark: '#470000',
      contrastText: '#ffffff',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Router>
        <div>
         <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/home"
              component={Landing}
              className='appFrame'
            />
            <Route
              path="/user-profile"
              component={UserHome}
            />
            <Route 
              path="/resources"
              component={Resources}
            />
            <Route 
              path="/admin"
              component={Admin}
              className='appFrame'
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  </MuiThemeProvider>
);

export default App;
