import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setsearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* <TopNavbar /> */}
      <div className='container mt-5 mb-5  d-flex gap-2 align-items-center my-3  flex-wrap'>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("nature");
            navigate('/')
          }}
        >
          Nature
        </Button>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Travel");
            navigate('/')
          }}
        >
          Travel
        </Button>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("car");
            navigate('/')
          }}
        >
          car
        </Button>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("fashion");
            navigate('/')
          }}
        >
          fashion
        </Button>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("technology");
            navigate('/')
          }}
        >
          technology
        </Button>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("tokyo");
            navigate('/')
          }}
        >
          tokyo
        </Button>
        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("dubai");
            navigate('/')
          }}
        >
          Dubai
        </Button>


        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("animal");
            navigate('/')
          }}
        >
          Animal
        </Button>


        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("Finance");
            navigate('/')
          }}
        >
          Business & Finance
        </Button>


        <Button className='search-button'
          variant="outline-light"
          size="lg"
          onClick={() => {
            setsearch("school");
            navigate('/')
          }}
        >
          school
        </Button>
        {location.pathname == '/saved' ? (
          <Button className='button btn btn-bm mx-3' onClick={() => navigate('/')} >Home</Button>
        ) : (
          <Button className='button btn btn-outline mx-3' onClick={() => navigate('/saved')}>saved</Button>

        )}

      </div>
      {location.pathname === '/' &&
        (
          <div className='container'>
            <Form.Group className="m-auto" controlId="formBasicEmail" style={{ width: '100%', maxWidth: '780px' }}>
              <Form.Control type="email" placeholder='search heare' className='bg-dark text-light text-center my-5' onChange={(e) => setsearch(e.target.value)} />
            </Form.Group>
          </div>

        )}
    </>
  )
}

export default Navbar