// import { useState } from "react";
// export default function app() {
//   const [searchValue, setSearchValue] = useState("");
//   const items = ["Apple", "Cherry", "Banana", "Date", "Grape"];
// import { HomePage } from "@/components";

import HomePage from "@/components/pages/HomePage";

// import HomePage from "@/components/pages/HomePage";

//   const filteredItems = items.filter((item) => item == searchValue);
//   const handleSearch = (e) => {
//     setSearchValue(e.target.value);
//   };
//   return (
//     <div className="flex items-center w-full h-screen">
//       <div>
//         <input type="text" placeholder="search..." onChange={handleSearch} />
//         <ul>
//           {filteredItems.map((items, index) => (
//             <li key={index}>{items}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";

// export default function App() {
//   const [searchValue, setSearchValue] = useState("");

//   const objectlist = [
//     { title: "HTML Article 6", tag: "html" },
//     { title: "CSS Basics 6", tag: "css" },
//     { title: "HTML Article 2", tag: "html" },
//     { title: "CSS Basics 3", tag: "css" },
//     { title: "HTML Article 3", tag: "html" },
//     { title: "JavaScript Guide 3", tag: "javascript" },
//     { title: "CSS Basics 4", tag: "css" },
//     { title: "JavaScript Guide 1", tag: "javascript" },
//     { title: "HTML Article 4", tag: "html" },
//     { title: "CSS Basics 1", tag: "css" },
//     { title: "JavaScript Guide 4", tag: "javascript" },
//     { title: "HTML Article 1", tag: "html" },
//     { title: "CSS Basics 2", tag: "css" },
//     { title: "HTML Article 5", tag: "html" },
//     { title: "JavaScript Guide 2", tag: "javascript" },
//     { title: "CSS Basics 5", tag: "css" },
//     { title: "JavaScript Guide 6", tag: "javascript" },
//     { title: "HTML Article 7", tag: "html" },
//     { title: "CSS Basics 7", tag: "css" },
//     { title: "JavaScript Guide 5", tag: "javascript" },
//   ];

//   const searchTerm = searchValue.toUpperCase();

//   const filteredList = objectlist.filter(
//     (item) => item.title.toUpperCase().indexOf(searchTerm) !== -1
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//         placeholder="Search by title"
//       />
//       <ul>
//         {filteredList.length > 0 ? (
//           filteredList.map((item, index) => <li key={index}>{item.title}</li>)
//         ) : (
//           <li>No items found</li>
//         )}
//       </ul>
//     </div>
//   );
// }
// export default function app() {
//   const numbers = [1, 2, 3, 4];
//   const nums = ["1,2,3,4"];
//   const multipliedByTwo = numbers.map((number) => number + nums);
//   console.log(multipliedByTwo);
// }

export default function Home() {
  return (
    <div className=" ">
      <HomePage />
    </div>
  );
}
