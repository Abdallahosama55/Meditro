// store.js
import { configureStore } from '@reduxjs/toolkit';
import apiReducerCatgorey from '../Redux/ReduxCategorey/apiSlice';
import apiReducerProduct from '../Redux/ReduxProduct/apiSlice'
import apiReducerAds from '../Redux/ReduxADS/apiSlice';
import apiReducerAboutus from '../Redux/ReduxAboutUs/apiSlice';
import apitestimonials from '../Redux/ReduxTestimonials/apiSlice'
import apiReducerProductDetails from '../Redux/ReduxProductDetails/apiSlice'
import apiReducerappointments from '../Redux/ReduxAppointment/apiSlice'
import apiReducerContact_us from '../Redux/ReduxContactus/apiSlice'
import apiReducerOurteam from '../Redux/ReduxOurteam/apiSlice'
import apiReducerPartners from '../Redux/ReduxPartners/apiSlice'
import apiReducerPrice_plans from '../Redux/ReduxPriceplan/apiSlice'
const store = configureStore({
  reducer: {
    apiCatgorey:apiReducerCatgorey,
    apiAds:apiReducerAds,
    apiAboutus:apiReducerAboutus,
    apiappointments:apiReducerappointments,
    apicontact_us:apiReducerContact_us,
    apitestimonials:apitestimonials,
    apiProduct:apiReducerProduct,
    apiProductDetails:apiReducerProductDetails,
    apiourteam:apiReducerOurteam,
    apipartners:apiReducerPartners,
    apiprice_plans:apiReducerPrice_plans
   
  },
});

export default store;
