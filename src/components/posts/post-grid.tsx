import classes from './posts-grid.module.css'
import PostItem from "./post-item"
import { PostItem as PostItemType } from './type/type'

interface PostsInGrid  {
    posts : PostItemType[]
}
export default function PostGrid(props : PostsInGrid){
 
const {posts} = props

    return(
        <ul className={classes.grid}>
            {posts.map((post,idx) => <PostItem key={post.slug+idx} post={post} />)};
        </ul>
    )
}