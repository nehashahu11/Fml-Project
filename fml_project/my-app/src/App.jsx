// // // // // // import { useState } from 'react'
// // // // // // // import reactLogo from './assets/react.svg'
// // // // // // // import viteLogo from '/vite.svg'
// // // // // // // import './App.css'

// // // // // // function App() {
// // // // // //   // const [count, setCount] = useState(0)
// // // // // //   const [URL,setURL]=useState('');
// // // // // //   function HandleSubmit(e){
// // // // // //     console.log("fhsdjfhjhdhfshfd")
// // // // // //     e.preventDefault();
    
// // // // // //     fetch('http://127.0.0.1:1234/scrape-reviews', {
// // // // // //       method: 'POST',
// // // // // //       headers: {
// // // // // //         'Content-Type': 'application/json',
// // // // // //       },
// // // // // //       body: JSON.stringify({
// // // // // //         url:URL
// // // // // //       }),
// // // // // //     })
// // // // // //       .then((response) => response.json())
// // // // // //       .then((data) => console.log('Response from backend:', data))
// // // // // //       .catch((error) => console.error('Error:', error));
    

// // // // // //   }
// // // // // //   function ChangeHandler(e){
// // // // // //     setURL(e.target.value)
// // // // // //     console.log('====================================');
// // // // // //     console.log(URL);
// // // // // //     console.log('====================================');
// // // // // //   }

// // // // // //   return (
// // // // // //     <>
// // // // // //       <form onSubmit={HandleSubmit} method="POST">
// // // // // //         <label htmlFor="url">Enter your url</label>
// // // // // //         <input name='url' value={URL} onChange={ChangeHandler}/>
// // // // // //         <button type="submit">Submit</button>
// // // // // //       </form>
// // // // // //       <p>this is route </p>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // // export default App


// // // // // // // import React from "react";

// // // // // // // import Gauge from "./Meter";

// // // // // // // const App = () => {
// // // // // // //   const data = [5,2,3,4,5,1,1, 2, 3, 4, 5, 4, 3, 2]; // Example data array

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h1>Dynamic Meter</h1>
// // // // // // //       <Gauge data={data} interval={400} />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default App;

// // // // import React, { useState } from 'react';
// // // // import './App.css'; // Import CSS for styles

// // // // function App() {
// // // //   const [URL, setURL] = useState('');
// // // //   const [isSubmitted, setIsSubmitted] = useState(false); // Tracks submission state

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();

// // // //     if (!URL.trim()) {
// // // //       alert('Please enter a valid URL.');
// // // //       return;
// // // //     }

// // // //     setIsSubmitted(true); // Trigger animation

// // // //     fetch('http://127.0.0.1:1234/scrape-reviews', {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify({ url: URL }),
// // // //     })
// // // //       .then((response) => {
// // // //         if (!response.ok) {
// // // //           throw new Error(`HTTP error! Status: ${response.status}`);
// // // //         }
// // // //         return response.json();
// // // //       })
// // // //       .then((data) => {
// // // //         console.log('Response from backend:', data);
// // // //         alert('Scraping started! Check the backend for updates.');
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error('Error:', error);
// // // //         alert('Error occurred while submitting the URL. Check console for details.');
// // // //       });
// // // //   };

// // // //   return (
// // // //     <div className={`app-container ${isSubmitted ? 'submitted' : ''}`}>
// // // //       <form onSubmit={handleSubmit} className={`search-bar ${isSubmitted ? 'search-bar-top' : ''}`}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter Amazon Product URL"
// // // //           value={URL}
// // // //           onChange={(e) => setURL(e.target.value)}
// // // //           className="input-box"
// // // //         />
// // // //         <button type="submit" className="send-button">
// // // //           Send
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;


// // // // // import React, { useState } from "react";
// // // // // import "./App.css"; // Styles in a separate CSS file

// // // // // function App() {
// // // // //   const [URL, setURL] = useState("");

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Submitted URL:", URL);
// // // // //     // Perform the fetch or other functionality here
// // // // //   };

// // // // //   return (
// // // // //     <div className="chat-container">
// // // // //       <form className="chat-search-bar" onSubmit={handleSubmit}>
// // // // //         <div className="chat-icon">📎</div>
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Message ChatGPT"
// // // // //           value={URL}
// // // // //           onChange={(e) => setURL(e.target.value)}
// // // // //           className="chat-input"
// // // // //         />
// // // // //         <button type="submit" className="chat-submit">
// // // // //           ⬆
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import React, { useState } from "react";
// // // // import "./App.css";

// // // // function App() {
// // // //   const [URL, setURL] = useState("");
// // // //   const [submitted, setSubmitted] = useState(false);

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log("fhsdjfhjhdhfshfd")
// // // //     e.preventDefault();
// // // //     setSubmitted(true); 
// // // //     fetch('http://127.0.0.1:1234/scrape-reviews', {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify({
// // // //         url:URL
// // // //       }),
// // // //     })
// // // //       .then((response) => response.json())
// // // //       .then((data) => console.log('Response from backend:', data))
// // // //       .catch((error) => console.error('Error:', error));
// // // //     // Add the submitted class
// // // //     console.log("Submitted URL:", URL);
// // // //     // Perform fetch or other functionality here
// // // //   };

// // // //   return (
// // // //     <div className={`app-container ${submitted ? "submitted" : ""}`}>
// // // //       <form className={`search-bar ${submitted ? "search-bar-top" : ""}`} onSubmit={handleSubmit}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter your URL"
// // // //           value={URL}
// // // //           onChange={(e) => setURL(e.target.value)}
// // // //           className="input-box"
// // // //         />
// // // //         <button type="submit" className="send-button">
// // // //           Send
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // // const [URL,setURL]=useState('');
// // // // // //   function HandleSubmit(e){


// // // import React, { useState } from "react";
// // // import "./App.css";

// // // function App() {
// // //   const [URL, setURL] = useState("");
// // //   const [submitted, setSubmitted] = useState(false);
// // //   const [loading, setLoading] = useState(false); // State for loading

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setSubmitted(true);
// // //     setLoading(true); // Show the loading spinner

// // //     fetch("http://127.0.0.1:1234/scrape-reviews", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify({
// // //         url: URL,
// // //       }),
// // //     })
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         console.log("Response from backend:", data);
// // //         // setLoading(false); // Hide the spinner after completion
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error:", error);
// // //         // setLoading(false); // Hide the spinner in case of an error
// // //       });

// // //     console.log("Submitted URL:", URL);
// // //   };

// // //   return (
// // //     <div>
// // //     <div className={`app-container ${submitted ? "submitted" : ""}`}>
// // //       <form
// // //         className={`search-bar ${submitted ? "search-bar-top" : ""}`}
// // //         onSubmit={handleSubmit}
// // //       >
// // //         <input
// // //           type="text"
// // //           placeholder="Enter your URL"
// // //           value={URL}
// // //           onChange={(e) => setURL(e.target.value)}
// // //           className="input-box"
// // //         />
// // //         <button type="submit" className="send-button">
// // //           Send
// // //         </button>
// // //       </form>
// // //       </div>
// // //       <div>
// // //       {loading && (
// // //         // Loading spinner below the search box
// // //         <div className="loading-screen">
// // //           <div className="spinner"></div>
// // //           <p>Processing your request...</p>
// // //         </div>
// // //       )}
// // //    </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// import React, { useState } from "react";
// import "./App.css";
// import LoadingScreen from "./LoadingScreen";
// import ChartComponent from "./ChartComponent";
// import Gauge from "./Meter";

// function App() {
//   const [URL, setURL] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false); // State for loading
//   // const [loading, setLoading] = useState(false); // State for loading
//   const [chartData, setChartData] = useState(null);
//   const [gaugeData, setGaugeData] = useState([1, 2, 3, 4, 5]);  // State to hold chart data

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setLoading(true); // Show the loading screen

//     fetch("http://127.0.0.1:1234/scrape-review", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         url: URL,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Response from backend:", data);
//         setLoading(false); // Hide loading after receiving data

//         // Format the data for the chart (Modify this according to your response)
//         const formattedData = {
//           labels: data.labels || [], // Adjust based on your response structure
//           datasets: [
//             {
//               label: "Review Count",
//               data: data.values || [], // Adjust based on your response structure
//               backgroundColor: "rgba(190, 150, 192, 0.5)",
//               borderColor: "rgba(200, 100, 192, 1)",
//               borderWidth: 1,
//             },
//           ],
//         };
//         setChartData(formattedData); // Store the chart data
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setLoading(false); // Hide loading even in case of an error
//       });

//     console.log("Submitted URL:", URL);
//   };
//   return (
//     <div className={`app-container`}>
//       {/* {loading ? (
//         // Loading screen
//        <LoadingScreen/>
//       ) : (
//         <form
//           className={`search-bar ${submitted ? "search-bar-top" : ""}`}
//           onSubmit={handleSubmit}
//         >
//           <input
//             type="text"
//             placeholder="Enter your URL"
//             value={URL}
//             onChange={(e) => setURL(e.target.value)}
//             className="input-box"
//           />
//           <button type="submit" className="send-button">
//             Send
//           </button>
//         </form>
//       )} */}

// {loading ? (
//         // Show loading screen while waiting for the response
//         <LoadingScreen />
//       ) : chartData ? (
//         // Show the chart if we have chart data
//         <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "20px" }}>
//         <ChartComponent chartData={chartData} />
//         <Gauge data={gaugeData} />
//       </div>
        
//       ) : (
//         // Optionally, show a message or nothing if there's no chart data
//         <form
//         className={`search-bar ${submitted ? "search-bar-top" : ""}`}
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           placeholder="Enter your URL"
//           value={URL}
//           onChange={(e) => setURL(e.target.value)}
//           className="input-box"
//         />
//         <button type="submit" className="send-button">
//           Send
//         </button>
//       </form>
//       )}
//     </div>
//   );
// }

// export default App;


// // import React, { useState } from "react";
// // import { Bar } from "react-chartjs-2"; // Import Bar chart component
// // import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js"; // Import necessary components for chart
// // import "./App.css";
// // import LoadingScreen from "./LoadingScreen";

// // // Register chart components with ChartJS
// // ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// // function App() {
// //   const [URL, setURL] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false); // State for loading
// //   const [chartData, setChartData] = useState(null); // State to hold chart data

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //     setLoading(true); // Show the loading screen

// //     fetch("http://127.0.0.1:1234/scrape-review", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         url: URL,
// //       }),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log("Response from backend:", data);
// //         setLoading(false); // Hide the loading screen

// //         // Example data format from backend (modify as needed)
// //         const formattedData = {
// //           labels: data.labels, // e.g., ['Item 1', 'Item 2', 'Item 3']
// //           datasets: [
// //             {
// //               label: "Review Count", // Label for the dataset
// //               data: data.values, // e.g., [10, 20, 30]
// //               backgroundColor: "rgba(75, 192, 192, 0.2)",
// //               borderColor: "rgba(75, 192, 192, 1)",
// //               borderWidth: 1,
// //             },
// //           ],
// //         };

// //         setChartData(formattedData); // Set chart data
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //         setLoading(false); // Hide the loading screen in case of error
// //       });

// //     console.log("Submitted URL:", URL);
// //   };

// //   return (
// //     <div>
// //     <div className={`app-container ${submitted ? "submitted" : ""}`}>
// //       <div className="form-container">
// //         <form
// //           className={`search-bar ${submitted ? "search-bar-top" : ""}`}
// //           onSubmit={handleSubmit}
// //         >
// //           <input
// //             type="text"
// //             placeholder="Enter your URL"
// //             value={URL}
// //             onChange={(e) => setURL(e.target.value)}
// //             className="input-box"
// //           />
// //           <button type="submit" className="send-button">
// //             Send
// //           </button>
// //         </form>
// //       </div>
// //     </div>

// //       {loading ? (
// //         // Show loading screen while waiting for the response
// //         <LoadingScreen />
// //       ) : chartData ? (
// //         // Show the chart after data is fetched
// //         <div className="chart-container">
// //           <h2>Reviews Chart</h2>
// //           <Bar data={chartData} options={{ responsive: true }} />
// //         </div>
// //       ) : null}
// //     </div>
// //   );
// // }

// // export default App;

import React, { useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import ChartComponent from "./ChartComponent";
import Gauge from "./Meter";

function App() {
  const [URL, setURL] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading
  const [chartData, setChartData] = useState(null);
  const [gaugeData, setGaugeData] = useState(null); // State to hold gauge data

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true); 
    setChartData(null) // Show the loading screen

    fetch("http://192.168.132.203:9000/scrape-reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: URL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data);
        setLoading(false); // Hide loading after receiving data

        // Format the data for the chart (Modify this according to your response)
        const formattedData = {
          labels: data.labels || [], // Adjust based on your response structure
          datasets: [
            {
              label: "Review Count",
              data: data.values || [], // Adjust based on your response structure
              backgroundColor: "rgb(116, 182, 232)",
              borderColor: "rgba(200, 100, 192, 1)",
              borderWidth: 1,
            },
          ],
        };
        setChartData(formattedData); 
        setGaugeData(data.mean);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false); // Hide loading even in case of an error
      });

    console.log("Submitted URL:", URL);
  };

  return (
    <div className={`app-container`}>
      {/* Search bar */}
      {loading ? (
        // Show loading screen while waiting for the response
        <LoadingScreen />
      ) : (
        <form
          className={`search-bar ${submitted ? "search-bar-top" : ""}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your URL"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            className="input-box"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      )}

      {/* Display chart and gauge if chartData is present */}
      {chartData && (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", gap: "20px", marginTop: "20px" }}>
          <ChartComponent chartData={chartData} />
          <Gauge data={gaugeData} />
        </div>
      )}
    </div>
  );
}

export default App;


