import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import cn from 'classnames';
import { useEffect, useReducer, useRef } from 'react';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';


export default function JournalForm({ onSubmit }) {

    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;

    const titleRef = useRef();
    const textRef = useRef();
    const dateRef = useRef();

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.text || !isValid.title) {
            focusError(isValid);
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' })
            }, 2000)
            return () => {
                clearTimeout(timerId)
            }
        }
    }, [isValid])

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values)
            dispatchForm({ type: 'CLEAR' })
        }
    }, [isFormReadyToSubmit, values, onSubmit])

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break
            case !isValid.date:
                dateRef.current.focus();
                break
            case !isValid.text:
                textRef.current.focus();
                break
        }
    }

    const onChange = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } })
    }

    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    }

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>

            <div className={styles['form-head']}>

                <label htmlFor='title'>
                    <Input
                        id='text'
                        type='text'
                        ref={titleRef}
                        onChange={onChange}
                        value={values.title}
                        name='title'
                        isValid={!isValid.title}
                        appearence='title'
                        placeholder='заголовок'
                    />
                </label>

                <button type='button'>
                    <img src='/delete.svg' alt='icon delete' width='30' height='30' />
                </button>

            </div>

            <div className={styles['form-row']}>
                <label htmlFor='date' className={styles['form-label']} onClick={() => dateRef.current.showPicker()} >
                    <img src='/calendar.svg' width='18' height='18' alt='icon calndar' />
                    <span>Дата</span>
                </label>
                <Input
                    id='date'
                    type='date'
                    ref={dateRef}
                    onChange={onChange}
                    value={values.date}
                    name='date'
                    isValid={!isValid.date}
                    onClick={() => dateRef.current.showPicker()}
                />
            </div>

            <div className={styles['form-row']}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='/folder.svg' width='18' height='18' alt='icon calndar' />
                    <span>Метки</span>
                </label>
                <Input
                    type='text'
                    id='tag'
                    onChange={onChange}
                    value={values.tag}
                    name='tag'
                    placeholder='добавить метку'
                />

            </div>

            <textarea onChange={onChange} value={values.text} ref={textRef}
                placeholder='Введите текст' name='text' id='' cols='30' rows='10' className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.text
                })} />

            <Button />

        </form >
    )
}