import { Component } from 'react'
import LinkedInIcon from '../atom/icons/LinkedInIcon'
import GithubIcon from '../atom/icons/GithubIcon'
import DownloadingIcon from '../atom/icons/DownloadIcon'

class SideBar extends Component {
  render() {
    return(
      <aside className="w-[80px] min-h-screen border-r px-4 pt-3 pb-[100px] border-gray-500 fixed left-0 z-50">
        <div className="h-screen flex flex-col items justify-between">
          <div className="logo">
            <img src="/src/assets/images/karlologo.png" alt="Karlo DR logo" />
          </div>

          <div className="flex flex-col items-center gap-[30px] pb-[40px]">
            <LinkedInIcon />
            <GithubIcon />
            <DownloadingIcon />
          </div>
        </div>
      </aside>
    )
  }
}

export default SideBar