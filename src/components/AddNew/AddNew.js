import React from 'react';
import './AddNew.css';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddNew = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://shocking-citadel-21143.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A new package added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h1 className="text-center mt-5">Add A New Tour Package</h1>
            <p className="text-center mb-4">*This Route is for Admin to add new Tour Package</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="submit-form" {...register("title", { required: true, maxLength: 20 })} placeholder="Add package title" />
                <textarea className="submit-form" {...register("description")} placeholder="Add package description" />
                <input className="submit-form" type="number" {...register("price")} placeholder="Add package price" />
                <input className="submit-form" {...register("img")} placeholder="Add package image url" />
                <input className="submit-btn submit-form" type="submit" />
            </form>
        </div>

    );
};

export default AddNew;