import './Header.css'
import SelectUser from '../SelectUser/SelectUser'

export default function Header() {

    const changeUser = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <a className='logo' href='/'>
                <img
                    src='/Logo.svg'
                    alt='Логотип компании'
                    width='180'
                    height='26' />
            </a>
            <SelectUser changeUser={changeUser} />
        </>
    )
}
