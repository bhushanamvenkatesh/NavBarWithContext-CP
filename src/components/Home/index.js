// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const lightHomeImage =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const darkHomeImage =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeHeading = isDarkTheme ? 'white' : 'black'
      const bgColor = isDarkTheme ? 'darkColor' : 'whiteColor'
      const homeImage = isDarkTheme ? darkHomeImage : lightHomeImage
      return (
        <>
          <Navbar />
          <div className={`home-container ${bgColor}`}>
            <img src={homeImage} alt="home" className="Home-image" />
            <h1 className={`${homeHeading}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
