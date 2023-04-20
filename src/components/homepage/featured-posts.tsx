import PostGrid from "../posts/post-grid"
import { PostItem } from "../posts/type/type"
import classes from "./featured-posts.module.css"

export default function FeaturePosts({ posts } : {posts : PostItem[]}){
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts} />
        </section>
        )
}