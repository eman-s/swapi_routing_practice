import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Explorer from './components/Explorer'
import Films from './components/Films'
import BaseLayout from './components/Layout'
import People from './components/People'
import Starships from './components/Starships'

ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/' component={Explorer} />
      <Route path='/starships' component={Starships} />
      <Route path='/films' component={Films} />
      <Route path='/people' component={People} />
    </Switch>
  </BaseLayout>
</BrowserRouter>
        /* >>>>>>>>>>>>>>>>>>>>>
          Add a router components with routes to:
          Explorer. Use an exact path to "/"
          Starships
          Films
          People
          <<<<<<<<<<<<<<<<<<<<<<
          */
,document.getElementById('root'));
registerServiceWorker();
