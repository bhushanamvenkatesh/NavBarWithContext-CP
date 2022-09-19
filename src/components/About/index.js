// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const darkAboutImage =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
const lightAboutImage =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const Heading = isDarkTheme ? 'white' : 'black'
      const bgColor = isDarkTheme ? 'darkColor' : 'whiteColor'
      const aboutImage = isDarkTheme ? darkAboutImage : lightAboutImage
      return (
        <>
          <Navbar />
          <div className={`about-container ${bgColor}`}>
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={`${Heading}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
