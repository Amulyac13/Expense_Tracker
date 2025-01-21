// import React, { useState } from 'react';

// const SearchAPI = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async (query) => {
//     const data={expenses.map((expense, index) => (
//         <div key={index} className="expense-item">
//             <div className="expense-description">{expense.text}</div>
//             <div
//                 className="expense-amount"
//                 style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
//             >₹{expense.amount}</div>
//         </div>
//     ))}
//     setResults(data);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => {
//           setSearchQuery(e.target.value);
//           handleSearch(e.target.value);
//         }}
//       />
//       <ul>
//         {results.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default SearchAPI;