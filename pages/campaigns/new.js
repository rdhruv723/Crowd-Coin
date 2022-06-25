import React, { Component } from "react";
import CampaignIndex from '../index';
import Layout from '../../components/layout';
import { Form, Button, Input,Message } from "semantic-ui-react";
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3';
import {Link,Router} from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution:'',
        errorMessage : '',
        loading : false
    };

    onSubmit = async (e) => {
        e.preventDefault();

        this.setState({loading : true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err){
            this.setState({errorMessage : err.message});
        }

        this.setState({loading : false});
    };

    render() {
        return <Layout>
            <h1>New Campaign </h1>

            <Form onSubmit={this.onSubmit} error = {!!this.state.errorMessage}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input
                        labelPosition="right" label="wei"
                        value={this.state.minimumContribution}
                        onChange={e => this.setState({ minimumContribution: e.target.value })}
                    />
                </Form.Field>

                <Message error header="Oops!" content={this.state.errorMessage} />

                <Button loading={this.state.loading} primary >Create</Button>
            </Form>
        </Layout>
    }
}

export default CampaignNew;