import React from 'react';
import { render } from 'react-dom';

import Checkboxlist from './components/Checkboxlist.jsx';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World from React!!<br/>
      <Checkboxlist list={ ['First', 'Second']} />
      </div>
    );
  }
}

render(
  <HelloWorld/>,
  document.getElementById('ReactApp')
);
