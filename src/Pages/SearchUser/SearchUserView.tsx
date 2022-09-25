import { useDispatch } from "react-redux"

import { userListsFetch } from "ReduxStore/Ducks/UserLists"
import { userDetailsFetch } from "ReduxStore/Ducks/UserDetails"

function SearchUserView() {
  const dispatch = useDispatch();

  dispatch(userListsFetch())
  dispatch(userDetailsFetch())
  
  return (
    <>
      <p>Search User Page</p>
    </>
  )
}

export default SearchUserView