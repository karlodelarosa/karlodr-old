
import NavMenu from "../../components/template/NavMenu"
import SideBar from "../../components/template/SideBar"
import PropTypes from 'prop-types';

function BaseLayout({children}) {
  return(
    <div className="flex flex-row">
      
      <SideBar />
      <NavMenu />
      <main className="main-content w-full min-h-screen">
        {children}
      </main>
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BaseLayout