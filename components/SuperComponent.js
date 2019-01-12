import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor(props) {
        super(props);
        this.someVarialble = 'Just some variable';
    }

    alertName(title) {
        alert(title);
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am blog page</h1>
            </BaseLayout>
        );
    }

}

export default SuperComponent;