import FeaturePosts from "@/components/homepage/featured-posts";
import Hero from "@/components/homepage/hero";
import { PostItem } from "@/components/posts/type/type";

const dummy : PostItem[]= [
  { 
    title : "Title",
    slug : "getting-started-next-js",
    date: new Date(),
    excerpt: "exec",
    image:"dummy.jpg"
},
{ 
  title : "Title",
  slug : "getting-started-next-js",
  date: new Date(),
  excerpt: "exec",
  image:"dummy.jpg"
},
{ 
  title : "Title",
  slug : "getting-started-next-js",
  date: new Date(),
  excerpt: "exec",
  image:"dummy.jpg"
},
{ 
  title : "Title",
  slug : "getting-started-next-js",
  date: new Date(),
  excerpt: "exec",
  image:"dummy.jpg"
}
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePosts posts ={dummy} />
    </>
  )
}
