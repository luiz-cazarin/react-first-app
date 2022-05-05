import {Link} from 'react-router-dom'
import styles from './Header.module.css'

function Header () {
    return (
        <div className={styles.header}>
            <img src='https://i.pinimg.com/originals/60/ea/15/60ea152f0c16025e23573d9e10132d9b.png' alt='icon'/>
            <ul>
                <li>
                    <Link to='/'>1. Home</Link>
                </li>
                <li>
                    <Link to='/projects'>2. Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>3. Contact</Link>
                </li>
                <li>
                    <Link to='/login'>3. Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header