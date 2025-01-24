



import React, { useEffect, useState } from 'react';

export async function fetchData() {
  try {
    //const response = await fetch('https://chetakfoundation.org/groupdocs/chetakfoundation/events/emp-117122022162920.jpeg'); // Replace with your API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw error to handle it in the calling component
  }
}

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(); // Call the AJAX function
        setData(result); // Set the fetched data to state
      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    getData(); // Trigger the async function
  }, []);

  return (
    <div>
       <img className="imagesm" src="https://chetakfoundation.org/groupdocs/chetakfoundation/events/emp-117122022162920.jpeg" alt="" />
      
      <h1 style={{color:"red",fontSize:"50px"}}>React AJAX Example</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import '../public/assets/css/style.css'





// function App() {
//   const [count, setCount] = useState(0)


  
//   return (
//     <>
//       <section className="main-page">
//       <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//       <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//         <img className="imagesm" src="public/assets/images/DSC01136.jpg" alt="" />
//       </section>
      
//     </>
//   )


// }


// export default App
