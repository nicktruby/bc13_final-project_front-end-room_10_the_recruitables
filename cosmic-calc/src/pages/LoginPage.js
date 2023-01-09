// // import React, { useEffect } from "react";
// import { useState } from "react";
// import Profile from "./Profile";

// import Data from "../Data.json";

// export default function Login() {
//   //check password and email against json file
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     for (let i = 0; i < Data.length; i++) {
//       if (email === Data[i].email && password === Data[i].password) {
//         setUser(Data[i]);
//         break;
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       {user && <Profile user={user} />}
//     </div>
//   );
// }
