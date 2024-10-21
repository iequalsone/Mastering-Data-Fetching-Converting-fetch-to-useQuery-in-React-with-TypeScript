import { useQuery } from "react-query";

async function fetchData(id) {
  const response = await fetch(`https://api.example.com/data/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function MyComponent({ id }) {
  const { data, error, isLoading } = useQuery(["fetchData", id], () =>
    fetchData(id)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>{data.name}</p>;
}
