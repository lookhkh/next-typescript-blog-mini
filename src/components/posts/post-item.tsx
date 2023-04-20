import Link from "next/link"
import Image from "next/image"
import classes from './post-item.module.css';
import { PostItem } from "./type/type";



export default function PostItem( {post} : {post :PostItem}){

    const {title,image,excerpt,date, slug} = post;
    const featured = new Date(date).toDateString();
    const imagePath = `/images/sites/posts/${slug}/${image}`;

    return (
        <li key={slug}>
            <Link legacyBehavior href={`/posts/${slug}`}>
                <a>
                    <div className={classes.image}>
                        <Image alt={title} src={imagePath} width={300} height={200} layout="responsive" /> 
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{featured}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}