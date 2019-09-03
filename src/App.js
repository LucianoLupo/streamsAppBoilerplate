import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';

import StreamEdit from './components/StreamEdit';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamList from './components/StreamList';
import StreamShow from './components/StreamShow';

import StreamNavbar from './components/StreamNavbar';


function App() {
  return (
    <div className="ui container">
      
      <Router>
      <StreamNavbar/>
        <div>
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
