import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='md:flex md:flex-row bg-slate-200 h-full items-center justify-center p-4 md:space-x-4'>
            <div className='flex items-center justify-center'>
                <img
                className='w-96 rounded-lg'
                src="https://img.freepik.com/premium-photo/words-with-contact-us-business-concept-idea_352439-357.jpg" alt="contact us" />
            </div>
            <div
                className="">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#a10b04] text-white rounded-md hover:bg-[#a10b20]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;