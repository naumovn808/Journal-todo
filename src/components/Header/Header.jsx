import './Header.css'
// import img from '../../../public/Logo.svg'

// export default function Header() {
//     return (
//         <img src={img} alt='' width='' height='' />
//     )
// }

export default function Header() {
    return (
        <a className='logo' href='/'>
            <img 
            src='/Logo.svg' 
            alt='Логотип компании' 
            width='180' 
            height='26' />
        </a>
    )
}
