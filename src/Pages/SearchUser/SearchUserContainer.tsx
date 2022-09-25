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
  },[state, dispatch])

  const handleSubmitSearch = () => {
    dispatch(userListsFetch({ keyword }))
  }

  const props = {
    keyword,
    setKeyword,
    handleSubmitSearch,
    data: state.data,
  }

  return <SearchUserView {...props} />
}

export default SearchUserContainer