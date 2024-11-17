import './JournalItem.css'

export default function JournalItem({ title, text, date }) {

    return (
        <>
            <h2 className='journal-item__header'>{title}</h2>
            <div className='Journal-item__body'>
                <p className='journal-item__date'>{date}</p>
                <p className='journal-item__text'>{text}</p>
            </div>
        </>
    )
    
}