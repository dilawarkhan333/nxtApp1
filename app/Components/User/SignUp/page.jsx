"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


function SignUp() {
    const route = useRouter()

    let [user, setuser] = useState({
        email: "",
        password: "",
        name: "",
        number: ""
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })


    }

    const submit = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/users/SignUp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: user
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert(response.data.message)
                route.push("/Components/User/Login")
            })
            .catch((error) => {
                console.log(error);
            });

    }



    return (
        <>


            <div className='mt-16  text-5xl text-sky-600 '  >
                <h1 style={{ marginLeft: "60%" }}><b>Create Account</b></h1>
            </div>



            <img className='h-full  absolute left-0 top-0   '

                src={"https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg?w=740&t=st=1693674771~exp=1693675371~hmac=f26b0b6bbb45a8dccc00e48bba663f581a2114d618d3206978a955e51c52ce86"} />
            
            <div style={{ marginLeft: "63%" }} className='mt-10' >
                <input type="text"
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    placeholder={"Enter Name"} value={user.name}
                    name="name" />

            </div>
            <div style={{ marginLeft: "63%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="email" placeholder={"Enter Email"} value={user.email} name="email" />
            </div>
            <div style={{ marginLeft: "63%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="password" placeholder={"Enter Password"} value={user.password} name="password" />
            </div>

            <div style={{ marginLeft: "63%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="password" placeholder={"Confirm Password "} value={user.password} name="password" />
            </div>
           
            <div style={{ marginLeft: "63%" }} className='mt-8  ' >
                <button className='w-72 p-2   rounded-md bg-violet-700 text-white ' onClick={() => submit()}><b>Sign up</b></button>
            </div>

            <div style={{ marginLeft: "73%" }} className='mt-2 text-slate-500 ' >
            <b>Or</b>
                {/* <button className='w-72 p-2   rounded-md bg-violet-700 text-white ' onClick={() => submit()}><b>Sign up</b></button> */}
            </div>

            <div style={{ marginLeft: "63%" }} className='mt-2  ' >
                <button className='w-72 p-2   rounded-md bg-violet-700 text-white no-underline ' onChange={() => submit()}><Link href={"/Components/User/Login"}> <b>Sign in</b></Link></button>
            </div>



        </>

    )
}

// export const Input = ({ type, placeholder, value, name, handleChange }) => {
//     return (
//         <input className='border-2 '
//             value={value}
//             onChange={(e) => handleChange(e)}
//             type={type} placeholder={placeholder} name={name} />
//     )
// }



export default SignUp



// const submit = () => {
//     let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'http://localhost:3000/api/users/SignUp',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: user
//     };

//     axios.request(config)
//         .then((response) => {
//             console.log(JSON.stringify(response.data));
//             alert(response.data.message)
//         })
//         .catch((error) => {
//             console.log(error);
//         });

// }


