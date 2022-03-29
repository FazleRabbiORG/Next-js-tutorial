import { useRouter } from "next/router";

function BlogDetails() {
  const router = useRouter();
  const blogId = router.query.blogId;

  console.log(blogId);

  return (
    <div>
      <h1>This is blog details page for blog id : {blogId}</h1>
    </div>
  );
}

export default BlogDetails;
