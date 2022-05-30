import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/account/loginSlice";
import listOfAdminsReducer from "../features/admin/listSlice";
import detailsOfAdminReducer from "../features/admin/detailsSlice";
import detailsOfClinicianReducer from "../features/clinician/detailsSlice";
import detailsOfClientReducer from "../features/client/detailsSlice";
import createAdminReducer from "../features/admin/createSlice";
import editAdminReducer from "../features/admin/editSlice";
import listOfClinicianReducer from "../features/clinician/listSlice";
import listOfClientsReducer from "../features/client/listSlice";
import createClientReducer from "../features/client/createSlice";
import createClinicianReducer from "../features/clinician/createSlice";
import editClientReducer from "../features/client/editSlice";
import editClinicianReducer from "../features/clinician/editSlice";
import createAppoinmentReducer from "../features/events/createAppoinmentSlice";
import getAllEventsReducer from "../features/events/getAllEventsSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    listOfAdmins: listOfAdminsReducer,
    detailsOfAdmin: detailsOfAdminReducer,
    createAdmin: createAdminReducer,
    editAdmin: editAdminReducer,
    listOfClinicians: listOfClinicianReducer,
    listOfClients: listOfClientsReducer,
    detailsOfClinician: detailsOfClinicianReducer,
    detailsOfClient: detailsOfClientReducer,
    createClient: createClientReducer,
    createClinician: createClinicianReducer,
    editClient: editClientReducer,
    editClinician: editClinicianReducer,
    createAppoinment: createAppoinmentReducer,
    getAllEvents: getAllEventsReducer,
  },
});
