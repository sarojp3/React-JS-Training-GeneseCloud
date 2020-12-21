import React, { useState } from "react";

export default function Search({onSearch}) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      onSearch(city);
    }
    setCity("");
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city"
        onChange={handleInputChange}
        value={city} 
        style={{ width: "30%", height: "25px",marginTop:'5%',marginLeft:'480px',borderRadius:'15px', padding: "7px", outline:'none', border:'1px solid black'}}/>

      <input type="submit" value="Search" 
        style={{marginLeft:'10px', borderRadius:'15px',padding:"10px 15px", background:'#389733', color:'white', outline:'none', cursor:'pointer', border:'1px solid gray'}} />
    </form>
  );
}
