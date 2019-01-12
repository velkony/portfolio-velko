import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import { getSecretData } from "../actions";

class Secret extends React.Component {

    static async getInitialProps({req}) {
        const anotherSecretData = await getSecretData(req);

        console.log(anotherSecretData);

        return { anotherSecretData };
    }

    state = {
        secretData: []
    };

    async componentDidMount() {
        const secretData = await getSecretData();

        this.setState({
            secretData
        });
    }


    render() {
        const { superSecretValue } = this.props;

        return (
            <BaseLayout {...this.props.auth} >
                <BasePage>
                    <h1> I am Secret Page</h1>
                    <p> Secret Containe Here </p>
                    <h2> {superSecretValue} </h2>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth()(Secret);