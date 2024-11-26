// import React, { useState, useEffect } from "react";
// import Speedometer from "react-d3-speedometer";

// const Gauge = ({ data, interval = 1000 }) => {
//   const [currentValue, setCurrentValue] = useState(0); // Current value of the gauge
//   const [index, setIndex] = useState(0); // Index to track the position in the data array

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     const timer = setInterval(() => {
//       setIndex((prevIndex) => {
//         if (prevIndex < data.length - 1) {
//           return prevIndex + 1;
//         }
//         clearInterval(timer); // Stop once all data is processed
//         return prevIndex;
//       });
//     }, interval);

//     return () => clearInterval(timer); // Clean up the timer
//   }, [data, interval]);

//   useEffect(() => {
//     if (index < data.length) {
//       // Calculate moving average for current value
//       setCurrentValue((prev) => {
//         return (prev * index + data[index]) / (index + 1); // Moving average calculation
//       });
//     }
//   }, [index, data]);

//   // Calculate percentage for display (0–100% based on the 0–5 range)
//   const percentage = (currentValue / 5) * 100;

//   // Dynamic Needle Color based on value
//   const getNeedleColor = (value) => {
//     if (value <= 1) return "#EF4444"; // Red
//     if (value <= 2) return "#F59E0B"; // Orange
//     if (value <= 3) return "#FACC15"; // Yellow
//     if (value <= 4) return "#86EFAC"; // Light Green
//     return "#22C55E"; // Green
//   };

//   // Calculate dynamic needle color
//   const needleColor = getNeedleColor(currentValue);

//   return (
//     <>
     
//       <div style={{ textAlign: "center" }}>
//      < p style={{ fontSize: 14, margin: 0, color: "#555" }}>Rating</p>
//       <strong style={{ fontSize: 22, color: "#222" }}>{Math.round(currentValue)}</strong>
//       </div>
//     <div style={{ width: 50, height: 150 }}>
      
//       <Speedometer
//         value={currentValue} // Value is between 0 and 5
//         minValue={0}
//         maxValue={5}
//         needleColor={needleColor} // Set the needle color dynamically
//         startColor="#EF4444" // Start color (red)
//         endColor="#22C55E" // End color (green)
//         segments={5}
//         textColor="#555"
//         fontSize={18}
//         ringWidth={10}
//         needleHeightRatio={0.7}
//         // Optionally, you can use a gradient for the background (not required for dynamic needle color)
//         backgroundColor="transparent"
//       />
       
     
//     </div>
//     </>
//   );
// };

// export default Gauge;


import React, { useState, useEffect } from "react";
import Speedometer from "react-d3-speedometer";

const Gauge = ({ data, interval = 1000 }) => {
  const [currentValue, setCurrentValue] = useState(data); // Current value of the gauge
  const [index, setIndex] = useState(0); // Index to track the position in the data array
  // if(data===NaN){
  //   currentValue=0
  // }
  // useEffect(() => {
  //   if (!data || data.length === 0) return;

  //   const timer = setInterval(() => {
  //     setIndex((prevIndex) => {
  //       if (prevIndex < data.length - 1) {
  //         return prevIndex + 1;
  //       }
  //       clearInterval(timer); // Stop once all data is processed
  //       return prevIndex;
  //     });
  //   }, interval);

  //   return () => clearInterval(timer); // Clean up the timer
  // }, [data, interval]);

  // useEffect(() => {
  //   if (index < data.length) {
  //     // Calculate moving average for current value
  //     setCurrentValue((prev) => {
  //       return (prev * index + data[index]) / (index + 1); // Moving average calculation
  //     });
  //   }
  // }, [index, data]);

  // Calculate percentage for display (0–100% based on the 0–5 range)
  const percentage = (currentValue / 5) * 100;

  // Dynamic Needle Color based on value
  const getNeedleColor = (value) => {
    if (value <= 1) return "#EF4444"; // Red
    if (value <= 2) return "#F59E0B"; // Orange
    if (value <= 3) return "#FACC15"; // Yellow
    if (value <= 4) return "#86EFAC"; // Light Green
    return "#22C55E"; // Green
  };

  // Calculate dynamic needle color
  const needleColor = getNeedleColor(currentValue);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      

      <div style={{ width: 200, height: 200 }}> {/* Adjusted the size of the speedometer */}
        <Speedometer
          value={currentValue} // Value is between 0 and 5
          minValue={1}
          maxValue={5}
          needleColor={needleColor} // Set the needle color dynamically
          startColor="#EF4444" // Start color (red)
          endColor="#22C55E" // End color (green)
          segments={5}
          textColor="#555"
          fontSize={18}
          ringWidth={10}
          needleHeightRatio={0.7}
          backgroundColor="transparent"
        />
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" ,marginLeft:'100px' }}>
        <p style={{ fontSize: 14, margin: 0, color: "#555" }}>Rating</p>
        <strong style={{ fontSize: 22, color: "#222" }}>{Math.round(currentValue)}</strong>
      </div>
    </div>
  );
};

export default Gauge;


