import BaseLayout from "./pages/layout/BaseLayout"

function App() {
  return (
    <>
      <BaseLayout>
        <section className="w-full h-screen grid grid-cols-2 items-center gap-[50px]">
          <div className="ml-auto">
            <img src="/src/assets/images/box.png" alt="" />
          </div>
          <div>
            <h1 className="text-8xl font-black tracking-wider text-white">KARLO</h1>
            <h1 className="text-8xl font-black tracking-wider text-primary translate-y-1 animate-blur mb-3">DELA ROSA</h1>
            <p className="text-gray-300">Frontend Developer and coding enthusiast</p>
          </div>
        </section>
      </BaseLayout>
    </>
  )
}

export default App
