import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const MultiCityForm = ({ handleFlightData }) => {
  const [flights, setFlights] = useState([
    {
      departure: getTodayDate(),
      destinationFrom: '',
      destinationTo: '',
    },
    {
      departure: getTodayDate(),
      destinationFrom: '',
      destinationTo: '',
    },
    {
      departure: getTodayDate(),
      destinationFrom: '',
      destinationTo: '',
    },
  ]);

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleInputChange = (index, field, value) => {
    const updatedFlights = [...flights];
    updatedFlights[index][field] = value;
    setFlights(updatedFlights);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flights1 = [
      {
        id: 1,
        name: "Flight 1",
        company: "A",
        capacity: 150,
        maxLoad: 12,
        baggageWeight: 25,
        maxDistance: 600,
        departureTime: "2023-11-07",
        arrivalTime: "2023-11-07",
        availableSeats: 120,
        baseCost: 1200,
        baggageWeight: 20,
        totalDistance: 550,
        type: "D",
        sourceCountry: "Palastine",
        destinationCountry: "Egypt"
      },
      {
        id: 2,
        name: "Flight 2",
        company: "B",
        capacity: 200,
        maxLoad: 10,
        baggageWeight: 20,
        maxDistance: 800,
        departureTime: "2023-11-08",
        arrivalTime: "2023-11-08",
        availableSeats: 180,
        baseCost: 1000,
        baggageWeight: 15,
        totalDistance: 700,
        type: "D",
        sourceCountry: "Egypt",
        destinationCountry: "Palastine"
      },
    ]

    const flights2 = [
      {
        id: 3,
        name: "Flight 1",
        company: "A",
        capacity: 150,
        maxLoad: 12,
        baggageWeight: 25,
        maxDistance: 600,
        departureTime: "2023-11-07",
        arrivalTime: "2023-11-07",
        availableSeats: 120,
        baseCost: 1200,
        baggageWeight: 20,
        totalDistance: 550,
        type: "D",
        sourceCountry: "Palastine",
        destinationCountry: "Egypt"
      },
      {
        id: 4,
        name: "Flight 2",
        company: "B",
        capacity: 200,
        maxLoad: 10,
        baggageWeight: 20,
        maxDistance: 800,
        departureTime: "2023-11-08",
        arrivalTime: "2023-11-08",
        availableSeats: 180,
        baseCost: 1000,
        baggageWeight: 15,
        totalDistance: 700,
        type: "D",
        sourceCountry: "Egypt",
        destinationCountry: "Palastine"
      },
      {
        id: 5,
        name: "Flight 3",
        company: "B",
        capacity: 200,
        maxLoad: 10,
        baggageWeight: 20,
        maxDistance: 800,
        departureTime: "2023-11-08",
        arrivalTime: "2023-11-08",
        availableSeats: 180,
        baseCost: 1000,
        baggageWeight: 15,
        totalDistance: 700,
        type: "D",
        sourceCountry: "Egypt",
        destinationCountry: "Palastine"
      },
    ]

    const flights3 = [
      {
        id: 6,
        name: "Flight 1",
        company: "A",
        capacity: 150,
        maxLoad: 12,
        baggageWeight: 25,
        maxDistance: 600,
        departureTime: "2023-11-07",
        arrivalTime: "2023-11-07",
        availableSeats: 120,
        baseCost: 1200,
        baggageWeight: 20,
        totalDistance: 550,
        type: "D",
        sourceCountry: "Palastine",
        destinationCountry: "Egypt"
      },
      {
        id: 7,
        name: "Flight 2",
        company: "B",
        capacity: 200,
        maxLoad: 10,
        baggageWeight: 20,
        maxDistance: 800,
        departureTime: "2023-11-08",
        arrivalTime: "2023-11-08",
        availableSeats: 180,
        baseCost: 1000,
        baggageWeight: 15,
        totalDistance: 700,
        type: "D",
        sourceCountry: "Egypt",
        destinationCountry: "Palastine"
      },
      {
        id: 8,
        name: "Flight 3",
        company: "B",
        capacity: 200,
        maxLoad: 10,
        baggageWeight: 20,
        maxDistance: 800,
        departureTime: "2023-11-08",
        arrivalTime: "2023-11-08",
        availableSeats: 180,
        baseCost: 1000,
        baggageWeight: 15,
        totalDistance: 700,
        type: "D",
        sourceCountry: "Egypt",
        destinationCountry: "Palastine"
      },
      {
        id: 9,
        name: "Flight 4",
        company: "B",
        capacity: 200,
        maxLoad: 10,
        baggageWeight: 20,
        maxDistance: 800,
        departureTime: "2023-11-08",
        arrivalTime: "2023-11-08",
        availableSeats: 180,
        baseCost: 1000,
        baggageWeight: 15,
        totalDistance: 700,
        type: "D",
        sourceCountry: "Egypt",
        destinationCountry: "Palastine"
      },
    ]
    

    const searchResults = [flights1, flights2, flights3] 
    handleFlightData(searchResults);
  };

  return (
    <form className='row row-cols-3 align-items-center ' onSubmit={handleSubmit}>
      {flights.map((flight, index) => (
        <>
        {/* From */}
        <div className='col from' key={index}>
          <FloatingLabel
            controlId={`floatingInputFrom${index}`}
            label={<span><FontAwesomeIcon icon={faLocationDot} style={{color: "var(--main-color)"}}/> From</span>}
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={flight.destinationFrom}
              onChange={(e) => handleInputChange(index, 'destinationFrom', e.target.value)}
              placeholder='From'
            />
          </FloatingLabel>
        </div>

        {/* To */}
        <div className='col to' key={index}>
          <FloatingLabel
            controlId={`floatingInputTo${index}`}
            label={<span><FontAwesomeIcon icon={faLocationDot} style={{color: "var(--main-color)"}}/> To</span>}
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={flight.destinationTo}
              onChange={(e) => handleInputChange(index, 'destinationTo', e.target.value)}
              placeholder='To'
            />
          </FloatingLabel>
        </div>

        {/* Time */}
        <div className='col departure' key={index}>
          <FloatingLabel
            controlId={`floatingInputDeparture${index}`}
            label={<span><FontAwesomeIcon icon={faLocationDot} style={{color: "var(--main-color)"}}/> Departure</span>}
            className="mb-3"
          >
            <Form.Control
              type="date"
              value={flight.departure}
              onChange={(e) => handleInputChange(index, 'departure', e.target.value)}
              placeholder="Departure"
              min={getTodayDate()}
            />
          </FloatingLabel>
        </div>
        </>
      ))}

      {/* Direct Or Not */}
      <div className='col-6'>
        <Form.Check
          type='checkbox'
          id='default-checkbox'
          label='Direct Flights Only'
        />
      </div>
      
      {/* Submit */}
      <div className='col-6 text-end'>
        <Button type="submit" className='search-submit'>Search</Button>
      </div>
    </form>
  );
};

export default MultiCityForm;
