import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';
import { useEffect } from 'react';

const INITIAL_STATE = {
    title: true,
    text: true,
    date: true
}

export default function JournalForm({ onSubmit }) {
    const [formValidState, setFormValidState] = useState(INITIAL_STATE);
    useEffect(() => {
        let timerId;
        if (!formValidState.date || !formValidState.text || !formValidState.title) {
            timerId = setTimeout(() => {
                setFormValidState(INITIAL_STATE)
            }, 2000)
            return () => {
                clearTimeout(timerId)
            }
        }
    }, [formValidState])

    const addJournalItem = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        let isFormValid = true;

        if (!formProps.title.trim().length) {
            setFormValidState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, title: true }));
        }

        if (!formProps.text.trim().length) {
            setFormValidState(state => ({ ...state, text: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, text: true }));
        }

        if (!formProps.date) {
            setFormValidState(state => ({ ...state, date: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, date: true }));
        }

        if (!isFormValid) {
            return
        }

        onSubmit(formProps);

    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>

                <div className={styles['form-head']}>

                    <label htmlFor='title'>
                        <input type='text' name='title' id='title' placeholder='заголовок'
                            className={cn(styles['input-title'], {
                                [styles['invalid']]: !formValidState.title
                            })} />
                    </label>

                    <button>
                        <img src='/delete.svg' alt='icon delete' width='30' height='30' />
                    </button>

                </div>

                <div className={styles['form-row']}>
                    <label htmlFor='date' className={styles['form-label']} onClick={(e) => e.target.showPicker()} >
                        <img src='/calendar.svg' width='18' height='18' alt='icon calndar' />
                        <span>Дата</span>
                    </label>
                    <input  type='date' name='date' id='date' className={cn(styles['input'], {
                        [styles['invalid']]: !formValidState.date
                    })} onClick={(e) => e.target.showPicker()} />
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor='tag' className={styles['form-label']}>
                        <img src='/folder.svg' width='18' height='18' alt='icon calndar' />
                        <span>Метки</span>
                    </label>
                    <input placeholder='Добавить метку' type='text' name='tag' id='tag' className={styles['input']} />

                </div>

                <textarea placeholder='Введите текст' name='text' id='' cols='30' rows='10' className={cn(styles['input'], {
                    [styles['invalid']]: !formValidState.text
                })} />

                <Button />

            </form >



        </>

    )
}