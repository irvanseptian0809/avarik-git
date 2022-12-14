// CORE
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom";

// REDUX
import { userListsFetch } from "ReduxStore/Ducks/UserLists"
import { userDetailsFetch } from "ReduxStore/Ducks/UserDetails"

// VIEW COMPONENT
import SearchUserView from "./DetailUserView"

const SearchUserContainer = () => {
  let navigate = useNavigate();
  let { login } = useParams(); 

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.UserDetails)

  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    dispatch(userDetailsFetch(login || ""))
  },[login, dispatch])

  const handleSubmitSearch = () => {
    dispatch(userListsFetch({ keyword }))
    navigate("/")
  }

  const props = {
    keyword,
    data: state.data,
    isLoading: state.isLoading,
    setKeyword,
    handleSubmitSearch,
  }

  return <SearchUserView {...props} />
}

export default SearchUserContainer
