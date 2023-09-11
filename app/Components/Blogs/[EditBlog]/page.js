"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function EditBlog(props) {

    const route = useRouter()

    let [user, setuser] = useState({
        title: "",
        url: "",
        description: ""
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const submit = () => {
    
// let  EditId = props.params.userid
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/blog/64f99dce6d59d6d7a577e0b7',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : {
                        title:user.title,
                        imagelink:user.url,
                        description:user.description,
                       userid:localStorage.getItem("user_id")
                    }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            route.back("/Components/Blogs/EditBlog")
          })
          .catch((error) => {
            console.log(error);
          });
          
     }




    return (

        <>

            <div className='mt-20  text-5xl text-pink-700 '  >
                <h1 style={{ marginLeft: "60%" }}><b>Edit Your Blogs</b></h1>
            </div>

            <img className='h-full max-w-2xl absolute left-0 top-0   '

                src={"https://img.freepik.com/free-photo/creative-company-professional-movie-footage-editor-sitting-multi-monitor-workstation-while-editing-film-frames-expert-videographer-improving-video-quality-using-specialized-software_482257-41680.jpg?size=626&ext=jpg&ga=GA1.1.1537368850.1669180647&semt=sph"} />

            <div style={{ marginLeft: "61%" }} className='mt-20  ' >
                <input type="text"
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    placeholder={"Blog Title"} value={user.title}
                    name="title" />

            </div>

            <div style={{ marginLeft: "61%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="url" placeholder={"Blog Image"} value={user.url} name="url" />
            </div>

            <div style={{ marginLeft: "61%" }} className='mt-10  ' >
                <input
                    className='w-72 p-2 outline outline-offset-2 outline-gray-200 rounded-md '
                    onChange={handleChange}
                    type="text" placeholder={"Blog Description"} value={user.description} name="description" />
            </div>

            {/* <div style={{ marginLeft: "61%" }} className='mt-10  ' >
                 <Link href={"SignUp"} className='w-36 p-3   rounded-md bg-violet-700 text-white ' ><b>Sign up</b></Link>
            </div> */}

            <div style={{ marginLeft: "73%", marginTop: "40px" }}  >
                <button className='w-28 p-2   rounded-md bg-violet-700 text-white ' onClick={() => submit()}><b>Edit Blogs</b></button>
            </div>






        </>




    )



}
export default EditBlog;




// let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'http://localhost:3000/api/blog/myblog',
//     headers: { 
//       'Content-Type': 'application/json'
//     },
//     data : {
//         title:user.title,
//         imagelink:user.url,
//         description:user.description,
//        userid:localStorage.getItem("user_id")
//     }
  
//   };
  
//   axios.request(config)
//   .then((response) => {
//     console.log("test")
//     console.log(JSON.stringify(response.data));
//     route.push("Home")
//   })
//   .catch((error) => {
//     console.log(error);
//   });