    /* eslint-disable react/prop-types */
    import './JournalList.css'
    import CardButton from '../CardButton/CardButton'
    import JournalItem from '../JournalItem/JournalItem'

    export default function JournalList({ items }) {

        if (items.length === 0) {
            return <p>Записей пока нет, добавьте новую</p>
        }

        const sortItems = (a, b) => {
            return a.date < b.date ? 1 : -1;
            // if (a.date < b.date) {
            //     return 1;
            // } else {
            //     return -1;
            // }
        }

        return (
            <div className='journal-list'>
                {items.sort(sortItems).map(el => (
                    <CardButton key={el.id} className='card-journal'>
                        <JournalItem
                            title={el.title}
                            text={el.text}
                            date={el.date}
                        />
                    </CardButton>
                ))}

            </div>
        )
    }