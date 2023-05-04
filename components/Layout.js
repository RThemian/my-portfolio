import Nav from "./Nav"
import Footer from "./Footer"
import Header from "./Header"

function Layout(props) {
  return (
    <>
        <Nav/>
        <Header/>
        {props.children}
        <Footer/>
    </>
  )
}

export default Layout