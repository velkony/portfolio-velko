import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
// import axios from "axios";
import { Link } from '../routes'
import BasePage from '../components/BasePage';
import {Col, Row, Button, Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';
import PortfolioCard from '../components/portfolios/PortfolioCard';

import { getPortfolios, deletePortfolio } from "../actions";

import { Router } from '../routes';

class Portfolios extends React.Component {

    static async getInitialProps() {
        // let posts = [];
        //
        // try {
        //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //     posts = response.data;
        //     // console.log(response.data);
        // } catch (err) {
        //     console.error(err);
        // }
        //
        // return { posts: posts.splice(0,10) };

        let portfolios = [];

        try {
            portfolios = await getPortfolios();
        } catch (err) {
            console.log(err);
        }

        return { portfolios };

    }

    navigateToEdit(portfolioId, e) {
        e.stopPropagation();
        Router.pushRoute(`/portfolios/${portfolioId}/edit`)
    }

    displayDeleteWarning(portfolioId, e) {
        e.stopPropagation();
        const isConfirm = confirm('Are you sure you want to delete this portfolio???');

        if (isConfirm) {
            this.deletePortfolio(portfolioId);
        }
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId)
            .then(() => {
                Router.pushRoute('/portfolios');
            })
            .catch(err => console.error(err));
    }



    renderPortfolios(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;

        return portfolios.map((portfolio, index) => {
            return (
                <Col key={index} md="4">

                    <PortfolioCard portfolio={portfolio} >

                        { isAuthenticated && isSiteOwner &&
                          <React.Fragment>
                              <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} color="warning" >Edit</Button>{' '}
                              <Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} color="danger" >Delete</Button>
                          </React.Fragment>
                        }

                    </PortfolioCard>

                </Col>
            )
        })
    }

    render() {
        const {portfolios} = this.props;
        const { isAuthenticated, isSiteOwner } = this.props.auth;

        return (
            <BaseLayout {...this.props.auth} >
                <BasePage className="portfolio-page" title="Portfolios">
                    { isAuthenticated && isSiteOwner &&

                        <Button onClick={() => Router.pushRoute('/portfolioNew')}
                                color="success"
                                className="create-port-btm">Create Portfolio
                        </Button>

                    }

                    <Row>
                        { this.renderPortfolios(portfolios) }
                    </Row>
                </BasePage>

            </BaseLayout>
        )
    }
}

export default Portfolios;