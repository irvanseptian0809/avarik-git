/*
  THIS IS SPESIFIC COMPONENT
  PLEASE MOVE THE COMPONENT TO THE REUSABLE COMPONENT ONCE IT'S BECOME REUSEABLE
  THANKS!
*/

// COMPONENT
import Box from "Components/Basic/Box"
import Button from "Components/Basic/Button"
import { Link } from "react-router-dom";

// STYLES
import "./styles.scss"

// TYPES
interface interfaceUserCardView {
  name?: string,
  image?: string,
}

const UserCardView = ({
  name,
  image,
}: interfaceUserCardView) => {
  return(
    <Box className="mb-13">
      <div className="user-card-component">
        <img src={image} alt="user-images"/>
        <div>
          <div className="user-title">{name}</div>
          <Link to={`detail-user/${name}`}>
            <Button>Repos</Button>
          </Link>
        </div>
      </div>
    </Box>
  )
}

export default UserCardView