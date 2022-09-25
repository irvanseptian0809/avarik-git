// CORE
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

// REDUX
import { userListsFetch } from "ReduxStore/Ducks/UserLists"
import { userDetailsFetch } from "ReduxStore/Ducks/UserDetails"

// VIEW COMPONENT
import SearchUserView from "./SearchUserView"

const SearchUserContainer = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    dispatch(userListsFetch())
    dispatch(userDetailsFetch())
  },[])

  const props = {
    keyword,
    setKeyword,
  }

  return <SearchUserView {...props} />
}

export default SearchUserContainer