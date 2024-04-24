import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyBookingsTable from './MyBookingsTable';
import useAxios from '../Hooks/useAxios';



const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();

    const [myBookingServices, setMyBookingServices] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setMyBookingServices(data))
        axiosInstance.get(`/bookings?email=${user?.email}`)
        .then(res =>{
            setMyBookingServices(res.data)
        })
    }, [])
    return (
        <div>
            {myBookingServices.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    {/* <thead>
                        <tr>
                            <th>
                               Action
                            </th>
                            <th>Service Name</th>
                            <th>price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {
                            myBookingServices.map(booking =><MyBookingsTable key={booking._id} booking={booking}></MyBookingsTable>)
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookings;