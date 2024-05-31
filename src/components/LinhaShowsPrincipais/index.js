import React, { useEffect, useState } from 'react';
import './index.scss';
import { API_ADDRESS } from '../../Api/constant';

export default function LinhaShowsPrincipais(props, {fk_idArtista}) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
                const formatShowDate = (dateString) => {
                    const date = new Date(dateString);
                    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    const day = date.getDate();
                    const monthIndex = date.getMonth();
                    return `${day} ${monthNames[monthIndex]}`;
                };
                setFormattedDate(formatShowDate(props.dataShow));
        };

        fetchData();
    }, [props.dataShow, fk_idArtista]);


    return (
        <div className='LinhaShowsPrincipais'>
            <div>
                <p className='show-data'>{formattedDate}</p>
            </div>
            <div>
                <p>{props.nomeShow}</p>
            </div>
            <div>
                <img src='' className="img-artista" alt='' />
                <p>{props.nomeShow}</p>
            </div>
        </div>
    );
}
