import  {useRouter} from 'next/router'

const BlogPostsPage = () => {

    const router = useRouter();
    console.log(router.query);

  return (
    <div>
        <h1>The blog Post</h1>
    </div>
  )
}

export default BlogPostsPage