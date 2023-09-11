"use client"
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { CgProfile } from 'react-icons/cg';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const route = useRouter()
  let [res, setres] = useState([])



  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/blog',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setres(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });


  }, [])






  const submit = () => {

    route.push("addblog")

  }




  return (
    <>


      <Navbar expand="lg" className="bg-gradient-to-l hover:bg-gradient-to-r contrast-125 from-cyan-500  bg-green-400 ">
        <Container fluid>
          <Navbar.Brand ><h4><b>Blogs</b></h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link href={"/Components/Blogs/Home"} className="ml-28  " ><h5>All Blog</h5></Nav.Link>
              <Nav.Link href={"/Components/Blogs/myblog"} className="ml-28" ><h5>My blog</h5></Nav.Link>
              {/* <h3> Lets go for a <CgProfile /> </h3> */}
            </Nav>
            <Form className="d-flex mr-20 ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2  "
                aria-label="Search"
              />
 <Nav.Link href={"/Components/User/Login"} className="ml-28" ><h5><b>Logout</b></h5></Nav.Link>
            </Form>

          </Navbar.Collapse>

        </Container>
      </Navbar>



      {
        res.map((v, i) => {
          return (
            <div className=" mt-10 " >

              {/* <h1 className="ml-40  "  >{v.title}</h1> */}

              <h1 className="ml-16 text-7xl  mt-14 capitalize underline decoration-slate-400 hover:decoration-gray-200 "  ><b>{v.title}</b></h1>


              <img style={{ marginLeft: "695px", height: "450px", width: "650px" }} className="rounded-l-3xl mb-20 bg-fixed " src={v.imagelink} />
              {/* <br/>
                         <br/>
                          */}

              {/* <h1 className="ml-40 text-7xl text-slate-400 underline decoration-sky-500 decoration-dashed "  ><b>{v.title}</b></h1> */}


              {v.description != null
                ?
                <>

                  <p className=" ml-24 mr-24 text-lg italic  " >{v.description}</p>
                  {/* <br /> */}
                  <Button className="ml-20 w-24"><Link href={"/Components/Blogs/EditBlog/"} className=" no-underline  text-white " ><b> Edit</b></Link> </Button>
                  <Button className="ml-14 w-24 " ><b>Delete</b> </Button>
                </>
                :
                <b></b>

              }


            </div>

          )

        })
      }

      <div style={{ marginLeft: "40%" }}  >
        <button className='w-72 p-2   rounded-md bg-violet-700 text-white mt-20 ' onClick={() => submit()}><b>Add Blogs</b></button>
      </div>

    </>
  )
}

export default Home



