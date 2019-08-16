import React, { useState } from 'react';
import axios from 'axios';

export const NewSmurf = () => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
      });
      
    const handleSubmit = e => {
        console.log("Submit button clicked!");
        e.preventDefault();
        console.log("New smurf", newSmurf);
        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then(res => console.log(res))
            .catch(err => console.log(err.response));

        setNewSmurf({
            name: '',
            age: '',
            height:'' 
        })
    };

    const changeHandler = event => {
        setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
    };
    

	return (
		<form onSubmit={ handleSubmit } className='smurf-form'>
			<h1>Add a Smurf!</h1>
            <label>
                Smurf Name
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Papa Smurf' 
                    value={ newSmurf.name }
                    onChange={ changeHandler }
                />
            </label>
				
            <label>
                Age
                <input 
                    type='text'
                    name='age' 
                    placeholder='76' 
                    value={ newSmurf.age }
                    onChange={ changeHandler }
                />
            </label>
				
            <label>
                Height
                <input 
                    type='text'
                    name='height' 
                    placeholder='7cm' 
                    value={ newSmurf.height }
                    onChange={ changeHandler }
                />
            </label>
				
            <button type="submit">Smurf's Up!</button>
		</form>
	)
}