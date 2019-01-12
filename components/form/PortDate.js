import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default class PortDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateValue: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            dateValue: date
        });
    }

    render() {
        return (
            <DatePicker
                selected={this.state.dateValue}
                onChange={this.handleChange}
            />
        );
    }
}






















// import React from "react";
// import DatePicker from "react-datepicker";
//
// import "react-datepicker/dist/react-datepicker.css";
//
// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';
//
// export default class PortDate extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dateValue: new Date()
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(date) {
//         this.setState({
//             dateValue: date
//         });
//     }
//
//     render() {
//         return (
//             <DatePicker
//                 selected={this.state.dateValue}
//                 onChange={this.handleChange}
//             />
//         );
//     }
// }