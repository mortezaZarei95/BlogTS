import { useContext } from "react"
import { BlogContext } from "../../Router/Router"
import Post from "./SavedPost"


const Saved = () => {
  const {savedposts , savedsetposts} = useContext(BlogContext)
  return(
    <div className="mt-4 flex flex-col gap-2 items-center">
      {
        savedposts.map(post => {
          return  <Post post={post} />
        })
      }
    </div>
  )
}

export default Saved