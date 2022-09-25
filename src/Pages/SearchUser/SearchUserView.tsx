// COMPONENTS
import SearchBar from "Components/Reuseable/SearchBar"
import EmptyData from "Components/Reuseable/EmptyData"

import UserCard from "./Components/UserCard"

// STYLES
import "./styles.scss"

// TYPES
import { interfaceUser } from "ReduxStore/Ducks/UserLists"

interface interfaceSearchUserView {
  keyword: string,
  setKeyword: (payload: string) => void,
  handleSubmitSearch: () => void,
  data?: interfaceUser[];
}

function SearchUserView({
  keyword,
  setKeyword,
  handleSubmitSearch,
  data = [],
}: interfaceSearchUserView) {
  return (
    <>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
        onClick={handleSubmitSearch}
        placeholder="Search User"
      />
      <div className="search-result">
        {data.length === 0 ? (
          <EmptyData />
        ) : (
          data.map((item: interfaceUser, index: number) => (
            <UserCard
              key={index}
              name={item.login}
              image={item.avatar_url}
            />
          ))
        )}
      </div>
    </>
  )
}

export default SearchUserView