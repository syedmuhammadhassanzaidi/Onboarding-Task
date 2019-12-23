import React, { Component } from 'react';
import { Grid, Switch } from 'semantic-ui-react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Navbar } from './components/Navbar';
import './custom.css'


export default class App extends Component {
  render() {
  return (
    <>
      <Navbar borderless={true}></Navbar>
      <Grid container columns={1}>
        <Grid.Column>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/customers" component={Counter}></Route>
            <Route path="/products" component={FetchData}></Route>
            {/* <Route path="/sales" component={SalesPage}></Route>
            <Route path="/stores" component={StoresPage}></Route> */}
          </Switch>
        </Grid.Column>
      </Grid>
    </>
  );
}
}



















// export default class App extends Component {
//   static displayName = App.name;

//   render () {
//     return (
//       <Layout>
//         <Route exact path='/' component={Home} />
//         <Route path='/counter' component={Counter} />
//         <Route path='/fetch-data' component={FetchData} />
//         {/* <Route path='/navbar' component={Navbar} /> */}
//       </Layout>
//     );
//   }
// }