// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const lightButton =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const darkButton = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const lightWebsite =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

const darkWebsite =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme ? darkWebsite : lightWebsite
      const buttonImage = isDarkTheme ? lightButton : darkButton
      const navbarBgColor = isDarkTheme ? 'darkBg' : 'whiteBg'
      const ListColor = isDarkTheme ? 'whiteList' : 'darklist'

      return (
        <nav className={`nav-bar ${navbarBgColor}`}>
          <img src={websiteLogo} alt="website logo" className="theme-image" />
          <ul className="list">
            <Link to="/" className={`each-link ${ListColor}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`each-link ${ListColor}`}>
              <li>About</li>
            </Link>
          </ul>

          <button
            type="button"
            className="button"
            onClick={onClickTheme}
            // testid="theme"
          >
            <img src={buttonImage} alt="theme" className="theme-button" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
