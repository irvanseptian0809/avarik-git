// IMAGE / ICON
import { ReactComponent as LogoIcon } from "Assets/Images/logo.svg"

// COMPONENT
import Box from "Components/Basic/Box"

// STYLES
import "./styles.scss"

const EmptyDataView = () => {
  return (
    <Box>
      <div className="loading-component">
        <LogoIcon />
        <p>Loading</p>
      </div>
    </Box>
  )
}

export default EmptyDataView