// UserForm.jsx
import React, { useState } from 'react';
import './App.css';

const UserForm = ({ addUser }) => {
    const [name, setName] = useState('');
    const [ratio, setRatio] = useState(1); // Default ratio is 1

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ name, ratio });
        setName('');
        setRatio(1); // Reset ratio after adding user
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className={"input"} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add user name" />
            <input className={"input"} type="number" value={ratio} onChange={(e) => setRatio(e.target.value)} placeholder="Split Ratio (optional)" />
            <button className={"button"} type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
