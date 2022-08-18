import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import maleProfle from '../../../assets/Rectangle-1.png';
import femaleProfle from '../../../assets/Rectangle.png';
import {FaPencilAlt,FaTrash} from 'react-icons/fa'
import Patients from '../Patients'

const patients = [
   {
      image: femaleProfle,
      name: 'Melissa Burkinstock',
   },
   {
      image: maleProfle,
      name: 'James Freeman',
   },
   {
      image: femaleProfle,
      name: 'Chioma Ukechukwu',
   },
   {
      image: femaleProfle,
      name: 'Melissa Burkinstock',
   },
   {
      image: femaleProfle,
      name: 'Melissa Burkinstock',
   },
];

export default function DoctorSchedule(props) {
   return (
      <>
         <Navigation />
         <div className={DSstyles.DSContainer}>
            <div className={DSstyles.DSContainer1}>
               <div className={DSstyles.DSFiles}>
                  <table>
                     <thead>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Date Uploaded</th>
                        <th>Actions</th>
                     </thead>
                     <tbody>
                        <td>Lab_Report</td>
                        <td>Lab_Report</td>
                        <td>07/10/2022</td>
                        <td className={DSstyles.DSicons}>
                           <FaPencilAlt className={DSstyles.DSpencil} />
                           <FaTrash className={DSstyles.DStrash} />
                        </td>
                        <tr></tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className={DSstyles.DSContainer2}>
               <h2>Patients</h2>
               <ul>
                  {patients.map((patientnames, index) => {
                     return (
                        <div className={DSstyles.imageDiv}>
                           <img src={patientnames.image}></img>
                           <li key={index}>{patientnames.name}</li>
                        </div>
         
                     );
                  })}
               </ul>
            </div>
         </div>
             <Patients/>
         </div>
   );
}
