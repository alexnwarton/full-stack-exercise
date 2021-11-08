import Nav from '/components/Nav'
import Footer from '/components/Footer'

const Layout = () => {
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