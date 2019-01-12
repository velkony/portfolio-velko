// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
    let errors = {};

    Object.entries(values).forEach(([key, value]) => {
        if (!values[key]) {
            errors[key] = `Field ${key} is required`
        }
    });

    return errors;
};

const INITIAL_VALUES = {    title: '',
                            company: '',
                            location: '',
                            position: '',
                            description: '',
                            startDate: '',
                            endDate: '' };

const PortfolioCreateForm = () => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={INITIAL_VALUES}
            validate= {validateInputs}


            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>

                    <Field type="text" name="title" label="Title" component={PortInput} />

                    <Field type="text" name="company" label="Company" component={PortInput} />

                    <Field type="text" name="location" label="Location" component={PortInput} />

                    <Field type="text" name="position" label="Position" component={PortInput} />

                    <Field type="textarea" name="description" label="Description" component={PortInput} />

                    <Field name="startDate" label="Start Date" component={PortDate} />

                    <Field name="endDate" label="End Date" component={PortDate} />

                    <PortDate />

                    <button type="submit" disabled={isSubmitting}>
                        Create
                    </button>

                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;



































// export default class PortfolioCreateForm extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {title: '', description: '', lenguage: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         const field = event.target.name;
//         this.setState({[field]: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.lenguage);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Description:
//                     <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//                 </label>
//                 <label>
//                     Pick your favorite flavor programing language:
//                     <select name="lenguage" value={this.state.lenguage} onChange={this.handleChange}>
//                         <option value="javascript">Javascript</option>
//                         <option value="java">Java</option>
//                         <option value="c++">C++</option>
//                         <option value="c#">C#</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
