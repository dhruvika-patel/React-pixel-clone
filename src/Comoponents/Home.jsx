import React from 'react'
import Button from 'react-bootstrap/Button';
import Loader from './Loader';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ images, loader, setsaved, saved }) => {

  const saveImage = (img) => {
    let flag = true;
    
    if (saved && saved.length > 0) {
      for (let i= 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          //react toastify
          toast.info('it is alrady exist',{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }

    if (flag) {
      //react toastify
      setsaved([...saved, img]);
      toast.success('Image is saved', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };


  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        {loader ? (
          <Loader />
        ) : (
          <div className="flex">
            {images.map((image) => (
              <div
                key={image.id}
                className="items"
                onClick={() => saveImage(image)}
              >
                <img src={image.src.medium} alt={image.photographer} />
              </div>
            ))}
          </div>
        )}
        <div className="text-center my-5">
          {images.length !== 0 && <Button href='#top' size='lg' variant='outline-light'>Back to top</Button>}
        </div>
      </div>
    </>
  );
};

export default Home;
