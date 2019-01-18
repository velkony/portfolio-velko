import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
    const headerType = props.headerType || 'default';

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>

                <meta name="description" content="My name is Velko Nedev and I am an experienced software engineer and freelance developer." />
                <meta name="keywords" content="velko portfolio, velko developer, velko freelancig, velko programming"/>
                <meta property="og:title" content="Velko Nedev - programmer, developer, bloger" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My name is Velko Nedev and I am an experienced software engineer and freelance developer."/>

                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>

                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}

                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div className="layout-container" >
                <Header className={`port-nav-${headerType}`}
                        isAuthenticated={isAuthenticated}
                        user={user}
                        isSiteOwner={isSiteOwner} />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </React.Fragment>

    )
};

export default BaseLayout;