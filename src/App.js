import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HelloWorld from './example/helloworld/HelloWorld'
import CreateReactAppComponent from './example/create-react-app/App'
import Parent from './example/components-connmunication/Parent'
import JSXExample from './example/basic/JSXExample'
import PropsExample from './example/basic/PropsExample'
import StateExample from './example/basic/StateExample'
import ComponentLifecycle from './example/basic/ComponentLifecycle'
import EventExample from './example/basic/EventExample'
import FormExample from './example/basic/FormExample'
import StyleExample from './example/basic/StyleExample'
import HomeLoanCalculator from './example/home-loan-calculator/HomeLoanCalculator'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basic/jsx-example">JSX</Link>
        </li>
        <li>
          <Link to="/basic/props-example">Props</Link>
        </li>
        <li>
          <Link to="/basic/state-example">State</Link>
        </li>
        <li>
          <Link to="/basic/component-lifecycle">Component Life Cycle</Link>
        </li>
        <li>
          <Link to="/basic/event-example">Event example</Link>
        </li>
        <li>
          <Link to="/basic/Form-example">Form example</Link>
        </li>
        <li>
          <Link to="/basic/style-example">Style example</Link>
        </li>
        <li>
          <Link to="/component-commmunication">Component communication</Link>
        </li>
        <li>
          <Link to="/home-loan-calc">Home Loan Calculator</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/basic/jsx-example" component={JSXExample} />
      <Route exact path="/basic/props-example" component={PropsExample} />
      <Route exact path="/basic/state-example" component={StateExample} />
      <Route path="/basic/component-lifecycle" component={ComponentLifecycle} />
      <Route path="/basic/event-example" component={EventExample} />
      <Route path="/basic/form-example" component={FormExample} />
      <Route path="/basic/style-example" component={StyleExample} />
      <Route path="/component-commmunication" component={Parent} />
      <Route path="/home-loan-calc" component={HomeLoanCalculator} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample