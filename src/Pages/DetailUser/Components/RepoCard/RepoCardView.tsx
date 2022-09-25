/*
  THIS IS SPESIFIC COMPONENT
  PLEASE MOVE THE COMPONENT TO THE REUSABLE COMPONENT ONCE IT'S BECOME REUSEABLE
  THANKS!
*/

// COMPONENT
import Box from "Components/Basic/Box"
import Label from "Components/Basic/Label"

// STYLES
import "./styles.scss"

// TYPES
interface interfaceRepoCardView {
  name?: string,
  image?: string,
  description?: string,
  owner?: string,
  visibility?: string,
}

const RepoCardView = ({
  name,
  image,
  description,
  owner,
  visibility,
}: interfaceRepoCardView) => {
  return(
    <Box className="mb-13">
      <div className="repo-card-component">
        <img src={image} alt="Image User Detail"/>
        <div>
          <div className="repo-owner">{owner}</div>
          <div className="repo-title">{name}<Label>{visibility}</Label></div>
          <div className="repo-descrption">{description}</div>
        </div>
      </div>
    </Box>
  )
}

export default RepoCardView