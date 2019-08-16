import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export const NewSmurf = ({ errors, touched }) => {

	return (
		<div className='smurf-form'>
			<h1>Add a Smurf!</h1>
			<Form>
				<label>
					Smurf Name
					<Field 
						type='text' 
						name='name' 
						placeholder='Papa Smurf' 
					/>
				</label>
				{touched.name && errors.name && 
				<p className="error">A smurf has to have a name!</p>}
				<label>
					Age
					<Field 
						type='text'
						name='age' 
						placeholder='76' 
					/>
				</label>
				{touched.age && errors.age && 
				<p className="error">A smurf has to have an age!</p>}
				<label>
					Height
					<Field 
						type='text'
						name='height' 
						placeholder='7cm' 
					/>
				</label>
				{touched.height && errors.height && 
				<p className="error">A smurf has to have a height!</p>}
				<button type="submit">Smurf's Up!</button>
			</Form>
		</div>
	)
}

const FormikNewSmurf = withFormik({
	mapPropsToValues(values) {
		return {
			name: values.name || '',
            age: values.age || '',
            height: values.height || '',
			smurfs: []
		};
	},

	validationSchema: Yup.object().shape({
		name: Yup.string().required(),
		age: Yup.string().required(),
		height: Yup.string().required(),
	}),

	handleSubmit(values, { setStatus }) {
		console.log('Smurf submitted!' )
		axios 
			.post('http://localhost:3333/smurfs', values)
			.then(res => {
				setStatus(res.data);
				console.log(res.data)
			})
			.catch(err => console.log(err.response));
	}
})(NewSmurf)

export default FormikNewSmurf;

