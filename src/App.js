import React, { useState } from "react";


function App() {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTextColor, setModalTextColor] = useState('black');
  const [modalBackgroundColor, setModalBackgroundColor] = useState('white');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ width: '40%', marginLeft: '30%', paddingTop: '2%' }}>
      <label htmlFor="inputName" className="form-label">Enter your name:</label>
      <input
        type="text"
        id="inputName"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button className="btn btn-primary" style={{marginBottom:'3%'}} onClick={openModal}>Submit</button>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ backgroundColor: modalBackgroundColor, color: modalTextColor }}>
            <span className="close-modal"
              style={{
                color: 'grey',
                float: 'right',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }} onClick={closeModal}>&times;</span>
            <div>
              <h2>Hello, {name}!</h2>
              <p>Welcome to our website. Enjoy your stay!</p>
            </div>

          </div>
          <br />
          <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={() => setModalTextColor(prompt("Enter text color:"))}>Change Text Color</button>
          <button className="btn btn-primary" onClick={() => setModalBackgroundColor(prompt("Enter background color:"))}>Change Background Color</button>
        </div>
      )}
    </div>
  );
}

export default App;




// import { useState } from "react";

// function App() {
//   const [name, setName] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   // const [backgroundColor, setBackgroundColor] = useState('white'); // State for background color
//   // const [textColor, setTextColor] = useState('black'); // State for text color
//   const [modalBackgroundColor, setModalBackgroundColor] = useState('white'); // State for modal background color
//   const [modalTextColor, setModalTextColor] = useState('black'); // State for modal text color


//   const handlePopup = () => {
//     setShowModal(true);

//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };
//   return (
//     <div style={{ width: '40%', marginLeft: '30%', paddingTop: '2%' }}>
//       <label htmlFor="inputName" className="form-label">Name</label>
//       <input
//         type="text"
//         id="inputName"
//         className="form-control"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <button className="btn btn-primary" onClick={handlePopup} >Submit</button>
//       {showModal && (
//         <div className="modal-content" style={{ backgroundColor: modalBackgroundColor, color: modalTextColor }}
//         >
//           <div
//             style={{
//               backgroundColor: 'white',
//               margin: '15% auto',
//               padding: '20px',
//               border: '1px solid black',
//               width: '60%',
//               boxShadow: '0px 0px 10px black',
//               position: 'relative',
//             }}
//           >
//             <span
//               style={{
//                 color: 'grey',
//                 float: 'right',
//                 fontSize: '28px',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//               }}
//               onClick={closeModal}
//             >
//               &times;
//             </span>
//             <h2>Hello, {name}!</h2>
//             <p>Welcome to our website. Enjoy your stay!</p>
//             <button className="btn btn-primary" onClick={() => setModalTextColor(prompt("Enter text color:"))}>Change Text Color</button>
//             <button className="btn btn-primary" onClick={() => setModalBackgroundColor(prompt("Enter background color:"))}>Change Background Color</button>
//             {/* <div>

//             </div> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
