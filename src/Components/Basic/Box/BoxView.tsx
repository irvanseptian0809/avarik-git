// STYLES
import "./styles.scss"

// TYPES
interface interfaceSearchBarView {
  children?: React.ReactNode,
  className?: string,
}

const SearchBarView = ({
  children,
  className,
}: interfaceSearchBarView) => {
  return (
    <div className={`box-component ${className}`}>
      {children}
    </div>
  )
}

export default SearchBarView