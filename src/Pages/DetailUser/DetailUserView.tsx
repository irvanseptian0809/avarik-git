// COMPONENTS
import SearchBar from "Components/Reuseable/SearchBar"
import EmptyData from "Components/Reuseable/EmptyData"
import RepoCard from "./Components/RepoCard"

// STYLES
import "./styles.scss"

interface interfaceDetailUserView {
  keyword: string,
  setKeyword: (payload: string) => void,
  handleSubmitSearch: () => void,
  data?: any;
}

function DetailUserView({
  keyword,
  setKeyword,
  handleSubmitSearch,
  data,
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
        {data.length == 0 ? (
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
