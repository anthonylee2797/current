import React from 'react';
import Form from './Form'

require('normalize.css/normalize.css');
require('../styles/App.css');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
				<Form />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
