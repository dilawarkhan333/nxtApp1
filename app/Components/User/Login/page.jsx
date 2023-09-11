"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function SignUp() {

    const route = useRouter()

    let [user, setuser] = useState({
        email: "",
        password: ""
      
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })


    }

    const submit = () => {
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:3000/api/users/Login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: user
                };
        
                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        alert(response.data.message)
                        localStorage.setItem("user_id",response.data.data._id)
                        route.push("/Components/Blogs/Home")
        
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        
            }



    return (
        <>
             <div className='mt-20  text-5xl text-pink-700 '  >
                <h1 style={{ marginLeft: "65%" }}><b>Sign In</b></h1>
            </div>

            <img className='h-full  absolute left-0 top-0   '

src={"https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1693682755~exp=1693683355~hmac=8d62215f37410fd566d0c9919f81892f29f1cf08a8b387e58d52c66b74a8e08c"} />

<div style={{ marginLeft: "61%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="email" placeholder={"Enter Email"} value={user.email} name="email" />
            </div>

            <div style={{ marginLeft: "61%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="password" placeholder={"Enter Password"} value={user.password} name="password" />
            </div>

            {/* <div style={{ marginLeft: "61%", textDecoration:"none" }} className='mt-10  ' >
                 <Link href={"SignUp"} className='w-36 p-3   rounded-md bg-violet-700 text-white ' ><b>Sign up</b></Link>
            </div>
             */}

<div style={{ marginLeft: "61%", marginTop:"33px" }}  >
                
              <button className='w-28 p-2   rounded-md bg-violet-700 text-white no-underline ' onChange={() => submit()}><Link href={"SignUp"}><b>Sign up</b></Link></button>
            
            </div> 

            <div style={{ marginLeft: "73%", marginTop:"-38px" }}  >
                <button className='w-28 p-2   rounded-md bg-violet-700 text-white ' onClick={() => submit()}><b>Sign in</b></button>
            </div> 
            


        </>

    )
}



export default SignUp

