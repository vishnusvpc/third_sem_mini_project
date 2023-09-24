import React from 'react'
import '../styles/tour-detials.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';

const TourDetails = () => {


    const {id} =  useParams()

    const tour = tourData.find(tour=> tour.id === id)


    return (
        <div>
            TourDetails
        </div>
    )
}

export default TourDetails
