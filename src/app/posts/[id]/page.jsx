const getPostDetails = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = response.json();
  return data;
};

const DetailsPage = async ({ params }) => {
  const { id, title, body } = await getPostDetails(params.id);
  console.log(id);
  return (
    <div className="border border-white md:w-1/2 mx-auto p-2 mt-10 rounded-md">
      <h2>{id+title+body}</h2>
    </div>
  );
};

export default DetailsPage;
