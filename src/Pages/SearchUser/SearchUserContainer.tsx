// CORE
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// REDUX
import { userListsFetch } from "ReduxStore/Ducks/UserLists"

// VIEW COMPONENT
import SearchUserView from "./SearchUserView"

const SearchUserContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.UserLists)

  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    if (state.data.length === 0) {
      dispatch(userListsFetch({ keyword: "irvanseptian0809" }))
    }
  },[state.data, dispatch])

  const handleSubmitSearch = () => {
    dispatch(userListsFetch({ keyword }))
  }

  const handleLoadMore = () => {
    dispatch(userListsFetch({
      keyword,
      page: state.pagination.page + 1,
    }))
  }

  const props = {
    keyword,
    data: state.data,
    total: state.pagination.total,
    isLoading: state.isLoading,
    setKeyword,
    handleSubmitSearch,
    handleLoadMore,
  }

  return <SearchUserView {...props} />
}

export default SearchUserContainer