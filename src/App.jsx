import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import BaseLayout from "./pages/layout/BaseLayout"

function App() {
  return (
    <>
      <BaseLayout>
        <section className="w-full h-screen">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/projects" element={<Project/>}></Route>
          </Routes>
        </section>
      </BaseLayout>
    </>
  )
}

export default App
