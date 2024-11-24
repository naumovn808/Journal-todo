import './JournalForm.css'
import Button from '../Button/Button'


export default function JournalForm({ onSubmit }) {

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
        onSubmit(formProps);

    }


    return (
        <>
            <form className='journal-form' onSubmit={addJournalItem}>

                <input type='text' name='title' />
                <input type='date' name='date' />
                <input type='text' name='tag' />
                <textarea name='text' id='' cols='30' rows='10' />

                <Button />

            </form>



        </>

    )
}