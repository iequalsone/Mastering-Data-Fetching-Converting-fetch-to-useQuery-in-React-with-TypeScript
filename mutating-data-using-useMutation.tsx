import { useMutation } from "react-query";

// Define the type for the new data
type NewItem = {
  name: string;
};

// Function to post new data
const postData = async (newItem: NewItem): Promise<NewItem> => {
  const response = await fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  if (!response.ok) {
    throw new Error("Error while posting data");
  }
  return response.json();
};

function MyComponent() {
  // Use useMutation to handle the POST request
  const mutation = useMutation(postData);

  const handleSubmit = () => {
    const newItem = { name: "New Item" };
    mutation.mutate(newItem);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {mutation.isLoading && <p>Submitting...</p>}
      {mutation.isError && <p>Error: {mutation.error?.message}</p>}
      {mutation.isSuccess && <p>Data Submitted Successfully!</p>}
    </div>
  );
}

export default MyComponent;
