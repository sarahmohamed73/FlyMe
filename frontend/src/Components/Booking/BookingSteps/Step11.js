import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { AllClasses } from '../../../APIs/AllClasses';
import { useNavigate, useParams } from 'react-router';


export default function Step1() {
    const navigate = useNavigate()
    const userData = useSelector(state => state.loggedInUserSlice.data);

    // handle click on the header to show or not the content of the step
    const [isContentVisible, setIsContentVisible] = useState(true);
    const handleToggle = () => {
        setIsContentVisible(!isContentVisible)
    }

    // Call api Countries + Classes
    const [countries, setCountries] = useState([]);
    const [classOptions, setClassOptions] = useState([]);
    const [classesData, setclassesData] = useState([])
    useEffect(() => {
        const fetchClassOptions = async () => {
            try {
                const data = await AllClasses();
                const classes = data.data.map(classs => classs.name);
                setclassesData(data.data)
                setClassOptions(classes);
            } catch (error) {
                console.error('Error fetching class options:', error);
            }
        };
        fetchClassOptions();
    },);

    return (
        <>
            <div className='Container'>
                {/* Header */}
                <div onClick={handleToggle}>
                    <Header StepNumber='1' title='Passenger Data' />
                </div>
                {/* Body */}
                {isContentVisible &&
                    <>
                        <div className='Note px-5 py-2' style={{ backgroundColor: '#fef7cd' }}>
                            Your data should be exactly as ther appear in your passport/ID to avoid check-in complications.
                            We'll never share your data with anyone.
                        </div>
                        <div className='Body'>
                            <div>
                                <div></div>
                                <table class="table w-100">
                                    <thead>
                                        <tr>
                                            <th scope="col">Data</th>
                                            <th scope="col">Your Saved Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>{userData.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone Number</th>
                                            <td>{userData.phone}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Full Name</th>
                                            <td colspan="2">{userData.first_name} {userData.last_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td colspan="2">{userData.gender}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Date Of Birth</th>
                                            <td colspan="2">{userData.birth_date}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Passport Number</th>
                                            <td colspan="2">{userData.passport_number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Passport Expirty Date</th>
                                            <td colspan="2">{userData.passport_expire_date}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                }
            </div >
        </>
    )
}
