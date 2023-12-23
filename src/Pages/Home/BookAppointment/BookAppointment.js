
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  fetchData,
  fetchDataSuccess,
  fetchDataStart,
  fetchDataFailure,
} from "../../../Redux/ReduxAppointment/apiSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; // Import SweetAlert2 React Content
import "./BookAppointment.css";
import img from "../../../assets/Images/imgappointment.png";
import imgperson from "../../../assets/Images/imgappointmentperson.png";
import img01 from "../../../assets/Images/imgappointment01.png";
import img02 from "../../../assets/Images/imgappointment02.png";
import img03 from "../../../assets/Images/imgappointment03.png";
import { unwrapResult } from "@reduxjs/toolkit";
import moment from "moment";
const MySwal = withReactContent(Swal); // Create an instance of SweetAlert2 with React Content

const BookAppointment = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiappointments.data);
  const loading = useSelector((state) => state.apiappointments.loading);
  const error = useSelector((state) => state.apiappointments.error);

  const [formattedDateTime, setFormattedDateTime] = useState("");

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
  const formik = useFormik({
    initialValues: {
      product_id: "",
      name: "",
      date: "",
      message: "",
      email: "",
    },
    onSubmit: async (values) => {
      // Ensure the date field is set to the formatted date
      values.date = moment(formattedDateTime).format("YYYY-MM-DD hh:mm");

      try {
        const { payload } = await dispatch(fetchData(values)); // Dispatch your Redux action with the form data
        if (payload.code === 200) {
          MySwal.fire({
            icon: "success",
            title: data.message || "Data Sent Successfully!",
            text: "Thank you for your submission.",
          });
        } else {
          MySwal.fire({
            icon: "error",
            title: data.message || "Data Submission Failed",
            text: "There was an error while submitting the data. Please try again later.",
          });
        }
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: data.message || "Data Submission Failed",
          text: "There was an error while submitting the data. Please try again later.",
        });
      }
    },
  });

  // ... (other code remains the same)

  return (
    <>
      <div className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="box boxform">
                <h2>Product Appointment</h2>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    required
                  />

                  <input
                    type="number"
                    placeholder="Product ID"
                    name="product_id"
                    value={formik.values.product_id}
                    onChange={formik.handleChange}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                  />

                  <input
                    type="datetime-local"
                    name="date"
                    value={formik.values.date}
                    onChange={(event) => {
                      formik.handleChange(event);
                      setFormattedDateTime(
                        event.target.value.replace("T", " ")
                      );
                    }}
                    required
                  />

                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    required
                  />

                  <button className="btn btnsubmit">Appointment Now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={img} alt="img" className="img-fluid" />
              <div className="img-bg">
                <img
                  src={imgperson}
                  alt="img"
                  className="img-fluid imgperson"
                />
                <img src={img01} alt="img" className="img01" />
                <img src={img02} alt="img" className="img02" />
                <img src={img03} alt="img" className="img03" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;