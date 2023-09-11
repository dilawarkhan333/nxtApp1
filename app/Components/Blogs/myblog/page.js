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

    let [res, setres] = useState([])

    useEffect(() => {

        let userid = localStorage.getItem("user_id")


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/blog/myblog/${userid}`,
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
            <Form className="d-flex mr-72 ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2  "
                aria-label="Search"
              />

            </Form>

          </Navbar.Collapse>

        </Container>
      </Navbar>

            {
                res.map((v, i) => {
                    return (
                        <div className="mt-20 capitalize w-1/2 mx-auto">

                            <h1>{v.title}</h1>
                            <img src={v.imagelink} />
                            <br/>
                            {v.description != null
                                ?
                                <>
                                    <b>{v.description}</b>
                                    <br />
                                </>
                                :
                                <b></b>
                            }
                 
                            

                        </div>
                    )
                })
            }
        </>
    )
}

export default Home