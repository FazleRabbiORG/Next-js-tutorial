export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: {
      bid: post.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

function SingleBlog({ post }) {
  console.log(post);
  return (
    <div>
      <h1>Single Blog</h1>
      <hr />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const bid = ctx.params.bid;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${bid}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}

export default SingleBlog;
