
import NavMenu from "../../components/template/NavMenu"
import SideBar from "../../components/template/SideBar"

function BaseLayout() {
  return(
    <div className="flex flex-row">
      <SideBar />
      <NavMenu />
      <main className="main-content w-full min-h-screen">
        <section className="w-full h-screen grid grid-cols-2 items-center gap-[50px]">
          <div className="ml-auto">
            <img src="/src/assets/images/box.png" alt="" />
          </div>
          <div>
            <h1 className="text-8xl font-black tracking-wider text-white">KARLO</h1>
            <h1 className="text-8xl font-black tracking-wider text-primary translate-y-1 blur-sm mb-3">KARLO</h1>
            <p className="text-gray-300">Frontend Developer and coding enthusiast</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BaseLayout