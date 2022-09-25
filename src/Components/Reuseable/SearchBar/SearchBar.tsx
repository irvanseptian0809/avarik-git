// COMPONENT
import Input from "Components/Basic/Input"
import Button from "Components/Basic/Button"
import Divider from "Components/Basic/Divider"

// STYLES
import "./styles.scss"

// TYPES
interface interfaceSearchBarView {
  onChange: (payload: string) => void,
  value: string | number,
  placeholder?: string,
}

const SearchBarView = ({
  onChange,
  value,
  placeholder,
}: interfaceSearchBarView) => {
  return (
    <>
      <div className="search-bar-component">
        <div>
          <Input
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
        <div>
          <Button
            onClick={() => {}}
          >
            Search
          </Button>
        </div>
      </div>
      <Divider className="mt-20 mb-20"/>
    </>
  )
}

export default SearchBarView