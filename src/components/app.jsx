import React, { useState, useEffect } from 'react';

import {
  App,
  Panel,
  View,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  f7,
  f7ready,
} from 'framework7-react';

import routes from '../js/routes';

const MainApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const f7params = {
    name: 'myproject', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: routes,
    // Register service worker
    /*serviceWorker: {
      path: 'http://localhost:8080/service-worker.js',
    }*/
  };

  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  useEffect(() => {
    f7ready(() => {
      // Call F7 APIs here
    });
  }, []);

  return (
    <App {...f7params} >

      {/* Left panel with cover effect when hidden */}
      <Panel left cover themeDark visibleBreakpoint={960}>
        <View>
          <Page>
            <Navbar title="Left Panel"/>
            <BlockTitle>Left View Navigation</BlockTitle>
            <List>
              <ListItem link="/left-page-1/" title="Left Page 1"/>
              <ListItem link="/left-page-2/" title="Left Page 2"/>
            </List>
            <BlockTitle>Control Main View</BlockTitle>
            <List>
              <ListItem link="/about/" view=".view-main" panelClose title="About"/>
              <ListItem link="/form/" view=".view-main" panelClose title="Form"/>
              <ListItem link="#" view=".view-main" back panelClose title="Back in history"/>
            </List>
          </Page>
        </View>
      </Panel>


      {/* Right panel with reveal effect*/}
      <Panel right reveal themeDark>
        <View>
          <Page>
            <Navbar title="Right Panel"/>
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel>


      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />

      {/* Popup */}
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}

export default MainApp;