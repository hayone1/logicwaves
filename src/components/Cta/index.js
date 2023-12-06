import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Image from '@theme/IdealImage';
import * as yup from 'yup';


// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [message, setMessage] = useState("");

const content = {
    title: "Give us a call today",
    subtitle: "Contact us and let's collaborate move your solution from idea to market.",
    socials: {
        facebook: 'https://web.facebook.com/profile.php?id=100064439572542',
        twitter: 'https://twitter.com/ronkedaini',
        linkedin: 'https://www.linkedin.com/in/ronkedaini/?originalSubdomain=ng'
    },
    phones: [
        {
            number: "tel:+2348185991363",
            display: "+234 818 599 1363"
        },
        {
            number: "tel:+2348032007101",
            display: "+234 803 200 7101"
        },
        {
            number: "tel:+2348032006495",
            display: "+234 803 200 6495"
        }

    ]
}

export default function Cta() {
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [emailError, setEmailError] = useState(null);
    // const [errors, setErrors] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     website: false,
    //   })
    var regexPat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "email" && ! value.match(regexPat)) {
            setEmailError('Please enter a valid email')
            console.log("changed name is:" + name)
        }   
        else if (name == "email"){
            setEmailError(null)
            console.log("email error gone")
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, e.g., send it to a server
        console.log('Form data submitted:', formData);
        // try {
        //     await schem
        // }
    };

    return (
        <section id="contactUs" className="py-md-20 py-12 mt-5">
            <div className="container">
                {/* Hero Section */}
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="mb-4 mb-xl-0 text-center text-md-start">
                            {/* Caption */}
                            <h1 className="display-2 fw-bold mb-3 ls-sm ">
                                {content.title}
                            </h1>
                            <p className="mb-4 lead ">
                                {content.subtitle}
                            </p>
                            {/* List */}
                            <div className="mb-6 mb-0">
                                <ul className="list-unstyled fs-4 ">
                                    {
                                        content.phones.map((phone, index) => (
                                            <li className="mb-2 ">
                                                <span className="ms-2 ">
                                                    <i class="fa-solid fa-phone"></i>
                                                </span>
                                                {" "}
                                                <span className="align-top"><a href={phone.number}>{phone.display}</a></span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-12">
                        {/* Card */}
                        <div className="card smooth-shadow-md" style={{ zIndex: 1 }}>
                            {/* Card body */}
                            <div className="card-body p-6 main-background">
                                <div className="mb-4">
                                    <h1 className="mb-4 lh-1 fw-bold h2 text-center">Get to Know us on</h1>
                                    <div className="mt-3 mb-5 row g-2">
                                        {/* btn group */}
                                        <div
                                            className="btn-group mb-2 mb-md-0 col-lg-4"
                                            role="group"
                                            aria-label="socialButton"
                                        >
                                            <a role="button" class="btn btn-light shadow-sm" aria-label="socialButton" href={content.socials.facebook}>
                                                <i class="fa-brands fa-square-facebook" />
                                                {" "}Facebook
                                            </a>
                                        </div>
                                        {/* btn group */}
                                        <div
                                            className="btn-group mb-2 mb-md-0 col-lg-4"
                                            role="group"
                                            aria-label="socialButton"
                                        >
                                            <a role="button" class="btn btn-light shadow-sm" aria-label="socialButton" href={content.socials.facebook}>
                                                <i class="fa-brands fa-square-x-twitter" />
                                                {" "} Twitter
                                            </a>
                                        </div>
                                        {/* btn group */}
                                        <div
                                            className="btn-group col-lg-4"
                                            role="group"
                                            aria-label="socialButton"
                                        >
                                            <a role="button" class="btn btn-light shadow-sm" aria-label="socialButton" href={content.socials.facebook}>
                                                <i class="fa-brands fa-linkedin" />
                                                {" "} Linkedin
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="border-bottom" />
                                    <div className="text-center mt-n2  lh-1">
                                        <span className="px-2 fs-6 rounded">Contact Us by Mail</span>
                                    </div>
                                </div>
                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Name */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label visually-hidden">
                                            Name
                                        </label>
                                        <input
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="user_name"
                                            placeholder="Name"
                                            required={true}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label visually-hidden">
                                            Email
                                        </label>
                                        <input
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            required={true}
                                        />
                                    </div>
                                    {/* {emailError && <h2 style={{color: 'red'}}>{emailError}</h2>} */}
                                    {emailError && <p className='text-danger'>{emailError}</p>}
                                    {/* <span className="text-danger">{emailError}</span> */}
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label visually-hidden">
                                            Subject
                                        </label>
                                        <input
                                            value={formData.subject}
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            placeholder="Subject"
                                            required={true}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label visually-hidden">
                                            Message
                                        </label>
                                        <textarea
                                            value={formData.message}
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="message"
                                            placeholder="message"
                                            required={true}
                                            style={{ minHeight : '10rem' }}
                                        />
                                    </div>
                                    {/* Button */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* Card Footer */}
                            <div className="px-4 py-4 main-background">
                                <p className="mb-0">
                                    By continuing you accept the{" "}
                                    <a href="#" className="text-inherit fw-semibold">
                                        Terms of Use
                                    </a>
                                    ,
                                    <a href="#" className="text-inherit fw-semibold">
                                        {" "}
                                        Privacy Policy
                                    </a>
                                    , and{" "}
                                    <a href="#" className="text-inherit fw-semibold">
                                        Data Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/* Pattern */}
                        <div className="position-relative">
                            <div className="position-absolute bottom-0 end-0 me-md-n3 mb-md-n6 me-lg-n4 mb-lg-n4 me-xl-n6 mb-xl-n8 d-none d-md-block ">
                                <img
                                    src="../assets/images/pattern/dots-pattern.svg"
                                    alt=""
                                    className="opacity-25"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
}