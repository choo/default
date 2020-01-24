import { h, Component } from 'preact';

import Header from './header';
import Container from './container';
import Main from './main';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header title='Sample' />
        <Container style={{marginTop: '54px', width: '640px'}}>
          <Main />
        </Container>
      </div>
    );
  }
}
