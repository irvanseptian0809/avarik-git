// COMPONENTS
import SearchBar from "Components/Reuseable/SearchBar"
import EmptyData from "Components/Reuseable/EmptyData"
import Loading from "Components/Reuseable/Loading"

import RepoCard from "./Components/RepoCard"

// STYLES
import "./styles.scss"

interface interfaceDetailUserView {
  keyword: string,
  data?: any;
  isLoading?: boolean,
  setKeyword: (payload: string) => void,
  handleSubmitSearch: () => void,
}

function DetailUserView({
  keyword,
  data,
  isLoading,
  setKeyword,
  handleSubmitSearch,
}: interfaceDetailUserView) {
  return (
    <>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
        onClick={handleSubmitSearch}
        placeholder="Search User"
      />
      <div className="detail-user">
        {isLoading && (
          <Loading />
        )}
        {!isLoading && data.length === 0 ? (
          <EmptyData />
        ) : (
          data.map((item: any, index: number) => (
            <RepoCard
              key={index}
              image={item.owner.avatar_url}
              name={item.name}
              description={item.description}
              owner={item.owner.login}
              visibility={item.visibility}
            />
          ))
        )}
      </div>
    </>
  )
}

export default DetailUserView
