import './header.css';


const Header = () => {
  const headerMenu = [
    'Home',
    'About',
    'Contacts'
  ]
  return (
    <div className="header">
        <h2 className="logo">Logo</h2>
        <ul className="menu-header">
           {headerMenu.map((el,i) => (<li key={i}>{el}</li>))}
        </ul>
        <button className='button-header' type='button'>Button</button>
    </div>
  )
}

export default Header