import { Deals, Footer, FooterDetails, Header, NewsLetter, Partners, PreHeader } from "./components"
import MainBanner from "./components/MainBanner"

function App() {
  return (
    <div>
      <PreHeader/>
      <Header/>
      <main>
        <MainBanner/>
        <Deals/>
        <Partners/>
        <NewsLetter/>
      </main>
      <Footer/>
      <FooterDetails/>
    </div>
  )
}

export default App
