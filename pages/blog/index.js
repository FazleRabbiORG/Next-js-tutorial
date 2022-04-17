import Link from "next/link";

function BlogPage({ posts }) {
  return (
    <div>
      <h1>Blog page</h1>
      <hr />

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/blog/` + post.id} passHref>
              <h2>
                {post.id}. {post.title}
              </h2>
            </Link>
            <p>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
