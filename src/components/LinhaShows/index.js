import { useEffect, useState } from 'react';
import './index.scss';

export default function LinhaShows(props) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const formatShowDate = (dateString) => {
            const date = new Date(dateString);
            const showYear = date.getFullYear();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const day = date.getDate();
            const monthIndex = date.getMonth();
            return `${day} ${monthNames[monthIndex]} ${showYear}`;
        };
        setFormattedDate(formatShowDate(props.data));
    }, [props.data]);

    return (
        <div className='LinhaShows'>
            <p className='show-data'>{formattedDate}</p>
            <div>
                <p>{props.nome}</p>
            </div>
        </div>
    )
}
