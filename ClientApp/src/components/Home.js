import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export class Home extends Component {
    render() {
        return (
            <div>
                <Modal trigger={<Button className="ui primary">Add Customer</Button>}>
                    <Modal.Header>Create Customer</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size="medium" src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>                
                
                <table className="table table-striped" aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
}


//{
//    forecasts.map(forecast =>
//        <tr key={forecast.date}>
//            <td>{forecast.date}</td>
//            <td>{forecast.temperatureC}</td>
//            <td>{forecast.temperatureF}</td>
//            <td>{forecast.summary}</td>
//        </tr>
//    )
//}