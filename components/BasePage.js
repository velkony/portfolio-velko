import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const BasePage = (props) => {
    const { className, title } = props;

    return (
        <div className={`base-page ${className}`}>
            { title && <div className="page-header"><h1 className="page-header-title">{ title }</h1></div>}
            <Container>
                {props.children}
            </Container>
        </div>
    )
};

BasePage.defaultProps = {
    className: ''
};

BasePage.propTypes = {
    className: PropTypes.any.isRequired
};

export default BasePage;