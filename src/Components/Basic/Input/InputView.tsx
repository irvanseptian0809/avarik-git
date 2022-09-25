import "./styles.scss"

interface interfaceInputView {
  onChange: (payload: string) => void,
  value: string | number,
  placeholder?: string,
}

const InputView = ({
  onChange,
  value,
  placeholder,
}: interfaceInputView) => {
  return (
    <input
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
      className="input-component"
      placeholder={placeholder}
    />
  )
}

export default InputView