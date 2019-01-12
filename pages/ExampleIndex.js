import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

class ExampleIndex extends SuperComponent {

    static async getInitialProps() {
        let userData = {};

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
            // console.log(response.data);
        } catch (err) {
            console.error(err);
        }

        return { userData };
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { userData } = this.props;
        return (
            <BaseLayout>
                <h1> I am Index Page</h1>
                <h2> { userData.id } </h2>
            </BaseLayout>

        )
    }
}

export default ExampleIndex;