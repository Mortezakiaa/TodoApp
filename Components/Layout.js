import Nav from "./Nav";
import MainContainer from "./MainContainer";
function Layout({children}) {
  return (
        <div>
            <Nav/>
            <MainContainer children={children}/>
        </div>
  )
}

export default Layout
