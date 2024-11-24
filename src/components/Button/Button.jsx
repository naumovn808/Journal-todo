import './Button.css'

export default function Button({ onClick }) {

    return (
        <button onClick={onClick} className="button">Сохранить</button>
    )

}