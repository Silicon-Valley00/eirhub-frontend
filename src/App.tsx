// General import
import './App.css';
import { Routes, Route, Navigate, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

// Imports for landing pate
import LandingPage from './Pages/Landing_page/LandingPage';
import ServicesPage from './Pages/Landing_page/ServicesPage';
import HowItWorks from './Pages/Landing_page/HowItWorks';
import FAQ from './Pages/Landing_page/FAQ/FAQ';

//Imports for PageNotFound
import PageNotFound from './Pages/PageNotFound/PageNotFound';

//Others
import Loading from './Pages/Loading Page/loadingpage';
import ProtectedRoutesPatient from './Pages/Protected Routes/ProtectedRoutesPatient';
import ProtectedRoutesDoctor from './Pages/Protected Routes/ProtectedRoutesDoctor';
import ProtectedRoutesLanding from './Pages/Protected Routes/ProtectedRoutesLanding';
import ProtectedRoutesLoading from './Pages/Protected Routes/ProtectedRoutesLoading';
// import { Logout } from './context/authcontext';
import { persistor } from './Store/store';
import { allRoutes } from './routes';

AOS.init();

function App() {
   // const isPatientAuth = useSelector((state) => state.isPatientAuth);
   // const isDoctorAuth = useSelector((state) => state.isDoctorAuth);
   // const isLoading = useSelector((state) => state.isLoading);

   // function logoutOnTabClose() {
   //    setTimeout(() => persistor.purge(), 200);
   //    Logout();
   // }
   // useEffect(() => {
   //    window.addEventListener('beforeunload', logoutOnTabClose());
   // }, []);

   // useEffect(() => {
   //    window.addEventListener('beforeunload', (ev) => {
   //       ev.preventDefault();
   //       return (ev.returnValue = 'Are you sure you want to close?');
   //    });
   //    window.addEventListener('unload', () => {
   //       localStorage.clear();
   //    });
   // });

   return (
      // <>
      //    <Routes>
      //       <Route path="*" exact element={<PageNotFound />} />
      //       <Route path="/" exact element={<LandingPage />} />
      //       <Route element={<ProtectedRoutesLoading isLoading={isLoading} />}>
      //          <Route path="/loading" exact element={<Loading />} />
      //       </Route>
      //       {/* Route for landing page and it's sub-pages */}
      //       {/* <Route
      //          element={
      //             <ProtectedRoutesLanding
      //                isDoctorAuth={isDoctorAuth}
      //                isPatientAuth={isPatientAuth}
      //             />
      //          }
      //       >
      //          <Route
      //             path="/"
      //             exact
      //             element={<Navigate replace to={'/landing-page'} />}
      //          />
      //       </Route> */}
      //       <Route
      //          element={
      //             <ProtectedRoutesLanding
      //                isDoctorAuth={isDoctorAuth}
      //                isPatientAuth={isPatientAuth}
      //             />
      //          }
      //       >
      //          <Route path="/landing-page" exact element={<LandingPage />} />
      //       </Route>{' '}
      //       <Route
      //          element={
      //             <ProtectedRoutesLanding
      //                isDoctorAuth={isDoctorAuth}
      //                isPatientAuth={isPatientAuth}
      //             />
      //          }
      //       ></Route>{' '}
      //       <Route
      //          element={
      //             <ProtectedRoutesLanding
      //                isDoctorAuth={isDoctorAuth}
      //                isPatientAuth={isPatientAuth}
      //             />
      //          }
      //       >
      //          <Route path="/our-services" exact element={<ServicesPage />} />
      //       </Route>{' '}
      //       <Route
      //          element={
      //             <ProtectedRoutesLanding
      //                isDoctorAuth={isDoctorAuth}
      //                isPatientAuth={isPatientAuth}
      //             />
      //          }
      //       >
      //          <Route path="/how-it-works" exact element={<HowItWorks />} />
      //       </Route>{' '}
      //       <Route
      //          element={
      //             <ProtectedRoutesLanding
      //                isDoctorAuth={isDoctorAuth}
      //                isPatientAuth={isPatientAuth}
      //             />
      //          }
      //       >
      //          <Route path="/FAQ" exact element={<FAQ />} />
      //       </Route>
      //       {/* End of routes for landing page */}
      //       {/* Route for user-dashboard */}
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/userdashboard"
      //             exact
      //             element={
      //                <UserDashboard
      //                   parent={<Dashboard />}
      //                   child={<DashboardNotificationAlerts />}
      //                   page={'dashboard'}
      //                />
      //             }
      //          />
      //       </Route>
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/userprofile"
      //             exact
      //             element={
      //                <UserDashboard parent={<Profile />} page={'profile'} />
      //             }
      //          />
      //       </Route>
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/reports"
      //             exact
      //             element={
      //                <UserDashboard
      //                   parent={<Records />}
      //                   child={<RecordChild />}
      //                   page={'records'}
      //                />
      //             }
      //          />
      //       </Route>
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/prescriptions"
      //             exact
      //             element={
      //                <UserDashboard
      //                   parent={
      //                      <Medications pushData={MedicationForm.pullData} />
      //                   } //Transfers data from parent component to child component
      //                   child={<MedicationForm />}
      //                   page={'medications'}
      //                />
      //             }
      //          />
      //       </Route>
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/find-a-doctor"
      //             exact
      //             element={
      //                <UserDashboard
      //                   parent={
      //                      <FindDoctor pushData={FindDoctorProfile.pullData} />
      //                   } //Transfers data from parent component to child component
      //                   child={<FindDoctorProfile />}
      //                   page={'finddoctor'}
      //                />
      //             }
      //          />
      //       </Route>
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/usermessaging"
      //             exact
      //             element={
      //                <UserDashboard
      //                   parent={<Message />}
      //                   child={<MessageUsers />}
      //                   page={'message'}
      //                />
      //             }
      //          />
      //       </Route>
      //       <Route
      //          element={
      //             <ProtectedRoutesPatient isPatientAuth={isPatientAuth} />
      //          }
      //       >
      //          <Route
      //             path="/scheduling"
      //             exact
      //             element={
      //                <UserDashboard
      //                   parent={<Schedule />}
      //                   child={<DashboardNotificationAlerts />}
      //                   page={'schedule'}
      //                />
      //             }
      //          />
      //       </Route>
      //       {/* End of routes for user dashboard */}
      //       {/* Start of route for doctor-dashboard. */}
      //       <Route
      //          element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}
      //       >
      //          <Route
      //             path="/doctordashboard"
      //             exact
      //             element={
      //                <DocDashboard
      //                   middleSection={<MidDashboard />}
      //                   rightSection={<DoctorCalendar />}
      //                   page={'dashboard'}
      //                />
      //             }
      //          />{' '}
      //       </Route>
      //       <Route
      //          element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}
      //       >
      //          <Route
      //             path="/doctorprofile"
      //             exact
      //             element={
      //                <DocDashboard
      //                   middleSection={<DocProfile />}
      //                   page={'doctorprofile'}
      //                />
      //             }
      //          />{' '}
      //       </Route>
      //       <Route
      //          element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}
      //       >
      //          <Route
      //             path="/doctorrecords"
      //             exact
      //             element={
      //                <DocDashboard
      //                   middleSection={<DoctorRecords />}
      //                   rightSection={<DoctorPatients />}
      //                   page={'records'}
      //                />
      //             }
      //          />{' '}
      //       </Route>
      //       <Route
      //          element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}
      //       >
      //          <Route
      //             path="/doctormessaging"
      //             exact
      //             element={
      //                <DocDashboard
      //                   middleSection={<DoctorMessage />}
      //                   rightSection={<MessagePatients />}
      //                   page={'doctormessage'}
      //                />
      //             }
      //          />{' '}
      //       </Route>
      //       <Route
      //          element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}
      //       >
      //          <Route
      //             path="/doctorschedule"
      //             exact
      //             element={
      //                <DocDashboard
      //                   middleSection={<DoctorSchedule />}
      //                   rightSection={<DoctorPatients />}
      //                   page={'doctorschedule'}
      //                />
      //             }
      //          />{' '}
      //       </Route>
      //       {/* End of route for doctor-dashboard */}
      //    </Routes>
      // </>
      <>
         <RouterProvider router={allRoutes} />
      </>
   );
}

export default App;
