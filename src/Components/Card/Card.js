import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Card.css'

const Card = ({imgPath, imgAlt, title, subtext}) => {

    const navigate = useNavigate()

    return (
        title ?
        <div className='Card' onClick={() => navigate('/bookingsystem')}>
            <img src={imgPath} alt={`${imgAlt}-Thumbnail`} className='CardImg' />
            <p className='CardTitle'>{title}</p>
            <p>{subtext}</p>
        </div>
        :
        <div>
            <img src={imgPath} alt={`${imgAlt}-Thumbnail`} className='CardImg' />
        </div>   
    )
}

export default Card