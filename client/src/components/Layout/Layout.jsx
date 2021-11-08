import Nav from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer.jsx'

const Layout = (props) => {
  return (
    <div className='layout'>
      <Nav />
      <div classname='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout