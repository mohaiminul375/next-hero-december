import Link from "next/link";

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const PostsPage = async () => {
  const posts = await getPost();
  //   console.log(posts);
  return (
    <section className="mt-20">
      <div>
        <h2 className="text-center text-2xl font-bold text-teal-500">
          Our All Posts
        </h2>
      </div>
      {/* cards */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {posts?.slice(0, 19).map(({ id, title, body }) => (
          <div className="border-2 border-teal-500 p-4 rounded-md" key={id}>
            <h6 className="font-bold mb-3">{title}</h6>
            <h6>{body}</h6>
            <div className="my-2">
              <Link
                href={`/posts/${id}`}
                className="px-4 py-1 bg-teal-500 text-white rounded-2xl"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsPage;
