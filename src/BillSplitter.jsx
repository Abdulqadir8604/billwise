import React, { useState } from 'react';
import UserForm from "./UserForm";
import Bill from "./Bill";
import Payee from "./Payee";
import './App.css';

const BillSplitter = () => {
    const [users, setUsers] = useState([]);
    const [billAmount, setBillAmount] = useState(0);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const handleBillChange = (e) => {
        setBillAmount(e.target.value);
    };

    const calculateSplit = () => {
        if (users.length > 0 && billAmount > 0) {
            const bill = new Bill(parseFloat(billAmount));
            users.forEach((user) => {
                bill.addPayee(new Payee(user.name, user.ratio));
            });
            bill.calculateAmounts();
            return bill.payees.map((payee) => ({ id: payee.name, name: payee.name, splitAmount: payee.amount }));
        }
        return [];
    };

    return (
        <div className={"container"}>
            <UserForm addUser={addUser} />
            <ul className={"userList"}>
                {users.map((user) => (
                    <li key={user.id} className={"userItem"}>
                        {user.name} (Percentage: {user.ratio}%)
                    </li>
                ))}
            </ul>
            <input className={"input"} type="number" value={billAmount} onChange={handleBillChange} placeholder="Enter bill amount" />
            {users.length > 0 && billAmount > 0 && (
                <div className={"splitAmountContainer"}>
                    <p className={"splitAmountTitle"}>Split amount per user:</p>
                    {calculateSplit().map((user) => (
                        <p key={user.id} className={"splitAmountItem"}>
                            {user.name}: ₹{user.splitAmount.toFixed(2)}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BillSplitter;
