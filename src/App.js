import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import "./index.css";

import LoginPage from "./features/account/Login";

import { PublicLayout } from "./app/components/PublicLayout";
import { PrivateLayout } from "./app/components/PrivateLayout";
import AdminContainer from "./features/admin/AdminContainer";

import ClientContainer from "./features/client/ClientContainer";
import ClinicianContainer from "./features/clinician/ClinicianContainer";
import EventContainer from "./features/events/eventContainer";
import { List as AdminList } from "./features/admin/List";
import { List as ClinicianList } from "./features/clinician/List";
import { List as ClientList } from "./features/client/List";
import { Details } from "./features/admin/Details";
import { Details as ClinicianDetails} from "./features/clinician/Details";
import { Details as ClientDetails} from "./features/client/Details";
import { Create } from "./features/admin/Create";
import {Create as CreateClient} from "./features/client/Create";
import {Create as CreateClinician} from "./features/clinician/Create";
import { Edit } from "./features/admin/Edit";
import {Edit as EditClient} from "./features/client/Edit"
import {Edit as EditClinician} from "./features/clinician/Edit";
import {Calendar} from "./features/events/calendar";
import {CreateAppoinment} from "./features/events/createAppoinment"
import Error from "./app/components/Error";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/admin" element={<AdminContainer />}>
            <Route index element={<AdminList />} />

            <Route path="details/:id" element={<Details />} />
            <Route path="create" element={<Create />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
          <Route path="/client" element={<ClientContainer />}>
              <Route index element={<ClientList />} />

            <Route path="details/:id" element={<ClientDetails />} />
            <Route path="create" element={<CreateClient />} />
            <Route path="edit/:id" element={<EditClient />} />
          </Route>
          <Route path="/clinician" element={<ClinicianContainer />}>
            <Route index element={<ClinicianList />} />

            <Route path="details/:id" element={<ClinicianDetails />} />
            <Route path="create" element={<CreateClinician />} />
            <Route path="edit/:id" element={<EditClinician />} />
          </Route>
          
          <Route path="/events" element={<EventContainer />}>
             <Route index element={<Calendar />} />
           <Route path="createAppoinment" element={<CreateAppoinment />} />
      
         </Route>
        </Route>
        
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>
  );
}

export default App;
