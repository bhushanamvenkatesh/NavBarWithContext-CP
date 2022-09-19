// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const notfoundImage =
  'https://assets.ccbp.in/frontend/react-js/not-found-img.png '

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-color' : 'white-color'
      const textColor = isDarkTheme
        ? 'heading-para-white'
        : 'heading-para-black'
      console.log(bgColor)
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${bgColor}`}>
            <img
              src={notfoundImage}
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`${textColor}`}>Lost your way</h1>
            <p className={`${textColor}`}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
