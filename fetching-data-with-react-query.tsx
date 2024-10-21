import { useQuery } from "react-query";

// Define the type for the data
type Data = {
  id: number;
  name: string;
};

// Create a fetch function to be used by React Query
const fetchData = async (): Promise<Data[]> => {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function MyComponent() {
  // Use React Query's useQuery to fetch data
  const { data, error, isLoading } = useQuery<Data[]>("fetchData", fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>{data && data.map((item) => <p key={item.id}>{item.name}</p>)}</div>
  );
}

export default MyComponent;
