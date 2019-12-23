import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
  }
}



















// import React from "react";
// import { Menu, Container } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
// import { render } from "react-dom";


// export class Navbar extends React.Component{
//     render(){
//         return (
//             <div>
//                 <NavBar borderless={true}></NavBar>
//                 <Grid container columns={1}>
//                     <Grid.Column>
//                         <Switch>
//                             <Route path="/" exact component={HomePage}></Route>
//                             <Route path="/customers" component={CustomersPage}></Route>
//                             <Route path="/products" component={ProductsPage}></Route>
//                             <Route path="/sales" component={SalesPage}></Route>
//                             <Route path="/stores" component={StoresPage}></Route>
//                         </Switch>
//                     </Grid.Column>
//                 </Grid>
//             </div>
//         );
//     };
// }