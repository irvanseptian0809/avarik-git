// STYLES
import "./styles.scss"

// TYPES
interface interfaceLabelView {
  children: React.ReactNode,
  type?: string,
  className?: string,
}

const LabelView = ({
  children,
  type = "default",
  className,
}: interfaceLabelView) => {
  return (
    <label className={`label-${type} ${className}`}>{children}</label>
  )
}

export default LabelView