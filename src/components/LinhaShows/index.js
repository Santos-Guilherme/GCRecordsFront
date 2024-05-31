import './index.scss';

export default function LinhaShows(props) {
    return (
        <div className='LinhaShows'>
            <p className='show-data'>{props.dataShow ?? '21 Mar'}</p>
            <div>
                <p>{props.nomeShow ?? 'Madrid  -  qui., 21  de mar. - 20:00  WiZink Center'}</p>
            </div>
        </div>
    )
}