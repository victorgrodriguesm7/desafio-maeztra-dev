import { Deals, Footer, FooterDetails, Header, NewCollection, NewsLetter, Partners, PreHeader, Shelf } from "./components"
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
        <Shelf/>
        <NewCollection/>
        <NewsLetter/>
      </main>
      <Footer/>
      <FooterDetails/>
    </div>
  )
}

export default App
