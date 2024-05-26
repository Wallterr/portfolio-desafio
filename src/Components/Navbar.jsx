import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <ul>
            <li> <Nav.Link href='#Projetos'  > Projetos </Nav.Link>  </li>
            <li> <Nav.Link href='#Blog' > Blog </Nav.Link> </li>
            <li> <Nav.Link href='#Footer' > Contato </Nav.Link> </li>
        </ul>
    </div>
  )
}

export default Navbar
