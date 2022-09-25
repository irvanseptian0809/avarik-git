import "./styles.scss"

interface interfaceInputView {
  onClick?: () => void,
  children?: any,
}

const InputView = ({
  onClick,
  children,
}: interfaceInputView) => {
  return (
    <button
      onClick={onClick}
      className="button-component"
    >
      {children}
    </button>
  )
}

export default InputView