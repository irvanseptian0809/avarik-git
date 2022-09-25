// COMPONENTS
import Button from "Components/Basic/Button"
import SearchBar from "Components/Reuseable/SearchBar"
import EmptyData from "Components/Reuseable/EmptyData"

import UserCard from "./Components/UserCard"

// STYLES
import "./styles.scss"

// TYPES
import { interfaceUser } from "ReduxStore/Ducks/UserLists"

interface interfaceSearchUserView {
  keyword: string,
  data?: interfaceUser[];
  total?: number,
  setKeyword: (payload: string) => void,
  handleSubmitSearch: () => void,
  handleLoadMore: () => void,
}

function SearchUserView({
  keyword,
  data = [],
  total,
  setKeyword,
  handleSubmitSearch,
  handleLoadMore,
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
        <p>Total Result: {total}</p>
        {data.length === 0 ? (
          <EmptyData />
        ) : (
          <>
            {data.map((item: interfaceUser, index: number) => (
              <UserCard
                key={index}
                name={item.login}
                image={item.avatar_url}
              />
            ))}

            <div className="load-more">
              <Button onClick={handleLoadMore}>Load More</Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default SearchUserView