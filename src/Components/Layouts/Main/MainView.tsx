// IMAGE / ICON
import { ReactComponent as LogoIcon } from "Assets/Images/logo.svg"

// COMPONENT
import { Link } from "react-router-dom";

// STYLES
import "./styles.scss"

const MainView = ({ children }: any) => {
  return (
    <div className="main-layout-container">
      <Link to="/">
        <div className="main-layout-header">
            <LogoIcon />
            <span>Github Mini</span>
        </div>
      </Link>
      {children}
    </div>
  )
}

export default MainView
