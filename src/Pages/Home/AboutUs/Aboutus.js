import './Aboutus.css';
import TitleBasic from '../../../Components/TitleBasic/TitleBasic';
import ImgAbout01 from '../../../assets/Images/about01.jpg';
import ImgAbout02 from '../../../assets/Images/about02.jpg';
import ImgAbout03 from '../../../assets/Images/about03.jpg';
import ImgAbout04 from '../../../assets/Images/about04.jpg';
import Motion01 from '../../../assets/Images/bg02.png';
import { useEffect, useState, useRef } from 'react'; // Import the useRef hook
import Modal from 'react-modal';
import Motion02 from '../../../assets/Images/bg06.png';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxAboutUs/apiSlice';
import { PropagateLoader } from "react-spinners";
import { BsTag } from "react-icons/bs";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'65%',
    
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  
  },
};

Modal.setAppElement('#root');

const Aboutus = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const subtitle = useRef(null); // Declare subtitle using a functional ref

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Access the style property using a functional ref
    if (subtitle.current) {
      subtitle.current.style.color = '#36d7b7';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const data = useSelector((state) => state.apiAboutus.data);
  const loading = useSelector((state) => state.apiAboutus.loading);
  const error = useSelector((state) => state.apiAboutus.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataStart());
    dispatch(fetchData())
      .then(unwrapResult)
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  }, [dispatch]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <PropagateLoader color="#36d7b7" />
      </div>
    );
  }

  if (error) {
    return ``;
  }

  if (!data || Object.keys(data).length === 0) {
    return <div></div>;
  }

  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box boxtext">
                <TitleBasic title="About Us" />
                <h2>{data.data.name}</h2>
                <p>{data.data.description}</p>
                <button href="#/" className="btn">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row p-2 justify-content-center">
                <div className="col-md-8 shadow-lg p-0" onClick={openModal}>
                  <video controls width="100%" height="auto">
                    <source src={data.data.youtube_video_url} type="video/mp4" />
                  </video>
                </div>
                <div>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
       
                    contentLabel="Example Modal"
                  >
                    <div className="shadow-lg p-0 videoplayer">
                      <video controls width="100%" height="auto">
                        <source src={data.data.youtube_video_url} type="video/mp4" />
                      </video>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="img-bg">
              <img src={Motion01} alt="img" className="img01" />
              <img src={Motion02} alt="img" className="img02" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
