import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
           <h1>Programadores</h1> 
           <nav>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
           </nav>
        </header>
    );
}

export default Header;
