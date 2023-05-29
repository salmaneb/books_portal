import axios from "axios";
import React, { useState } from "react";

const BookForm = ({close}) => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    no_of_pages: "",
    published_at: "",
  });
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/books/add', bookData);
        close();
  }  
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-[500px]">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="bg-red-300 p-3 rounded-[8px] placeholder-blue-800"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className="bg-red-300 p-3 rounded-[8px] placeholder-blue-800"
        />
        <input
          type="number"
          name="no_of_pages"
          placeholder="No. of Pages"
          onChange={handleChange}
          className="bg-red-300 p-3 rounded-[8px] placeholder-blue-800"
        />
        <input
          type="date"
          name="published_at"
          placeholder="Published At"
          onChange={handleChange}
          className="bg-red-300 p-3 rounded-[8px] placeholder-blue-800"
        />
        <button type="submit" className="bg-[blue] w-[200px] p-3 rounded-[8px]">ADD</button>
      </form>
    </>
  );
};

export default BookForm;
