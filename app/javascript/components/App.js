import React from "react"
import Greeting from "./Greeting";
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
        Greeting: {this.props.greeting}
          <Router>
            <Switch>
              <Route  path="/" element={<Greeting />}/>
            </Switch>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
