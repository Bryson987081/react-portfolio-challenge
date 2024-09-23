import { useState } from "react";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'text') {
            setText(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Invalid Email');
            return;
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setText('');
        alert(`Thank you ${firstName}!  I look forward to speaking to you!`)
    };

    return (
        <div className="m-6 p-5 container text-center">
            <h1>Submit the form to contact me!</h1>
            <form className="form p-5" onSubmit={handleFormSubmit}>
                <input
                    className="mb-1 form-control"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="example@email.com"
                />
                <input
                    className="mb-1 form-control"
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    className="mb-1 form-control"
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    className="mb-1 p-4 input-group-text form-control"
                    value={text}
                    name="text"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Input text here!"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}