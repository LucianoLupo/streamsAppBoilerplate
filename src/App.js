import React from 'react';
import { Router , Route, Switch} from 'react-router-dom';
import './App.css';
import history from './history';
import StreamEdit from './components/StreamEdit';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamList from './components/StreamList';
import StreamShow from './components/StreamShow';

import StreamNavbar from './components/StreamNavbar';


function App() {
  return (
    <div className="ui container">
      
      <Router history={history}>
        <div>
        <StreamNavbar/>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>

        </div>
      </Router>
      
    </div>
  );
}

export default App;
