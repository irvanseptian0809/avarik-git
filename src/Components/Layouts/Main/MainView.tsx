// IMAGE / ICON
import { ReactComponent as LogoIcon } from "Assets/Images/logo.svg"

// STYLES
import "./styles.scss"

const MainView = ({ children }: any) => {
  return (
    <div className="main-layout-container">
      <div className="main-layout-header">
        <LogoIcon />
        <span>Github Mini</span>
      </div>
      {children}
    </div>
  )
}

export default MainView
