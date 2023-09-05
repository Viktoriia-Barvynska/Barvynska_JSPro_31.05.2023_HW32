import './sidebar.css';

const Sidebar = () => {
  const sidebarMenu = [
  'Dashbord',
  'Products',
  'Analytics',
  'History',
  'Messages',
  'Settings'
  ]
  return (
    <div className='sidebar'>
        <ul className='sidebar-ul'>
            {sidebarMenu.map((el, i) => (<li key={i}>{el}</li>))}
        </ul>   
        </div>
  )
}

export default Sidebar