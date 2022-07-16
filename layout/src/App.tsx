import { Header, PreHeader } from "./components"
import MainBanner from "./components/MainBanner"

function App() {
  return (
    <div>
      <PreHeader/>
      <Header/>
      <main>
        <MainBanner/>
      </main>
    </div>
  )
}

export default App
