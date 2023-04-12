import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import PopularSalesSection from './components/PopularSales'
import TopRatedSales from './components/TopRatedSales'
import Features from './components/Features'
import TopStories from './components/TopStories'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <div className="main">
        <Header />
        <Body /><br /><br />
        <PopularSalesSection /><br /><br />
        <TopRatedSales /><br /><br />
        <Features></Features><br /><br />
        <TopStories /><br /><br />
      </div>
      <div className="end">
        <Footer />
      </div>
    </div>
  )
   
}

export default App
