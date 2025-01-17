import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClinic } from "../store/clinicClise";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";


function AddClinicForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
         
        try {

            const response = await axios.post('http://localhost:8080/clinics', {name, address});
            const { id: id, name: clinicName, address: clinicAddress } = response.data;
            dispatch(addClinic({ id, clinicName, clinicAddress }));
            setName('');
            setAddress('');
         } catch (error) {
            console.log(error.response.data.details);
            alert(error.response.data.details)
         }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
            <div className="form-group mb-3">
                <label htmlFor="institutionName">Название поликлиники</label>
                <input
                    type="text"
                    className="form-control"
                    id="institutionName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="institutionAddress">Адрес</label>
                <input
                    type="text"
                    className="form-control"
                    id="institutionAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Добавить поликлинику</button>
        </form>
    );

}

export default AddClinicForm;
