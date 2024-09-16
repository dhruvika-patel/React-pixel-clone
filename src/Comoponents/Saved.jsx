import React from 'react'
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Saved = ({saved ,loader}) => {
  const location = useLocation()
  return (
    <>
    
    <div className=" container-fluid">
      {loader | saved.length === 0   ? (
        <Loader />
      ) : (
        <div className="flex">
          {saved.map((image) => (
            <div
              key={image.id}
              className="items" 
            >
              <img src={image.src.medium} alt={image.photographer} />
            </div>
          ))}
        </div>
      )}

      <div className="text-center my-5" >
        {
          saved.length !=0 && (
            <Button href='#top' variant='outline-light' size='fg' >
              Back to top
            </Button>
          )
        }
      </div>

    </div>

    </>
  )
}

export default Saved