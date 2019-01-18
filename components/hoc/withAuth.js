import React from 'react';
import BaseLayout from "../layouts/BaseLayout";
import BasePage from '../BasePage';

// const namespace = 'http://localhost:3000/';

export default role => Component =>
    class withAuth extends React.Component {

        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

            return { ...pageProps };
        }


        renderProtectedPage() {
            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${process.env.NAMESPACE}/role`];
            let isAuthorized = false;

            if (role) {
                if (userRole && userRole === role ) { isAuthorized = true }
            } else {
                isAuthorized = false
            }


            if(!isAuthenticated) {
                return (
                    <BaseLayout {...this.props.auth} >
                        <BasePage>
                            <h1> You are not authenticated. Please Login to access this page. </h1>
                        </BasePage>
                    </BaseLayout>
                )
            } else if (!isAuthorized) {
                return (
                    <BaseLayout {...this.props.auth} >
                        <BasePage>
                            <h1> You are not authenticated. Please Login to access this page. </h1>
                        </BasePage>
                    </BaseLayout>
                )
            } else {
                return ( <Component {...this.props} />)
            }

            // if (isAuthenticated) {
            //     return ( <Component {...this.props} />)
            // } else {
            //     return (
            //         <BaseLayout {...this.props.auth} >
            //             <BasePage>
            //                 <h1> You are not authenticated. Please Login to access this page. </h1>
            //             </BasePage>
            //         </BaseLayout>
            //     )
            // }
        }

        render() {
            return this.renderProtectedPage();
        }

    }



