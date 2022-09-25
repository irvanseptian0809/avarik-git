// STYLES
import "./styles.scss"

// TYPES
interface interfaceDividerView {
  className?: string,
}

const DividerView = ({
  className,
}: interfaceDividerView) => {
  return (
    <div className={`divider-component ${className}`}/>
  )
}

export default DividerView
