import React from "react";
import {theme} from '../Theme'

function SearchBar(props) {
  const [inputValue,setInputValue]=useState(props.value)
  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log("Search query:", props.value);
  }
  const handleClearClick = () => {
    setInputValue('')
  };

  return (
    <div className="flex border items-center justify-between rounded-full w-full p-2 shadow-md" style={theme[props.mode].searchBar}>
      <input
        className="focus:outline-none px-5 "
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="find your mate . . . . . . . . "
        style={theme[props.mode].searchBar}
      />
      <button
        type="submit"
        className="focus:outline-none focus:shadow-outline hover:transform hover:scale-125 transition duration-200 ease-in-out px-5"
        onClick={handleSearchSubmit}
      >
        {props.value ==='' && props.mode==='light' ?
        (<svg
          fill='none'
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M22 22L15.5 15.5M15.5 15.5C17.9853 13.0152 17.9853 8.98479 15.5 6.5C13.0152 4.01472 8.98479 4.01472 6.5 6.5C4.01472 8.98479 4.01472 13.0152 6.5 15.5C8.98479 17.9853 13.0152 17.9853 15.5 15.5Z" />
        </svg>)
        : (props.value==='' && props.mode==='dark') ?
        (<img className="w-6 h-6 " src="assets/searchDark.svg" alt=''/>)
        : props.value!='' && props.mode==='light' ?(
            (<p onClick={handleClearClick}>X</p>)
        )
        :  (<p onClick={handleClearClick}>X</p>)}
        
      </button>
    </div>


    // {users.forEach((user) => {
    //   const userName = user.children[0].innerText;
    //   console.log(userName);
    //   if (userName.toLowerCase().includes(e.target.value.toLowerCase())) {
    //       user.style.display = "block";
    //   } else {
    //       user.style.display = "none";
    //   }
    //     })}
  );
}

export default SearchBar;
