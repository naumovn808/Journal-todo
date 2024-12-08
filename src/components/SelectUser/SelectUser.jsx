export default function SelectUser({ changeUser }) {

    return (
        <select name='user' id='user' onChange={changeUser}>
            <option value='1'>Андрей</option>
            <option value='2'>Дима</option>
        </select>
    )
}