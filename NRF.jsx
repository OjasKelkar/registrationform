import React, { useState } from 'react';

function RegistrationForm() {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://127.0.0.1:5000/register', {
            method: "post",
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setPassword("");

        }
    }

    return (
        <>
            <div>
                <form action="">
                    <div>
                        <label>Username</label>
                        <input
                            type="text" 
                            placeholder="username"
                            value={username} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type='email'
                            placeholder="Enter an email..."
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            placeholder="Enter a password..."
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </button>
                </form>
            </div >
        </>


    );
}

export default RegistrationForm;