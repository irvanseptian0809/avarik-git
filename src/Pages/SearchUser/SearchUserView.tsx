// COMPONENTS
import SearchBar from "Components/Reuseable/SearchBar"

// IMAGE / ICON
import { ReactComponent as LogoIcon } from "Assets/Images/logo.svg"

interface interfaceSearchUserView {
  keyword: string,
  setKeyword: (payload: string) => void,
}

function SearchUserView({
  keyword,
  setKeyword,
}: interfaceSearchUserView) {
  return (
    <>
      <div>
        <LogoIcon />
      </div>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
        placeholder="Search User"
      />
      <p>{keyword}</p>
    </>
  )
}

export default SearchUserView