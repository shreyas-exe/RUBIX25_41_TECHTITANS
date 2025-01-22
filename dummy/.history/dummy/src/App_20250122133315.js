import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch('/')
      .then(response => response.json())
      .then(data => console.log(data)); // Log the data instead of the response
  }, []);

  return (
    <>
      {/* Add any UI components here if necessary */}
    </>
  );
}

export default App;
