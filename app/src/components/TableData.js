import axios from "axios";
import React, { useEffect, useState } from "react";

const TableData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  function onDelete(id) {
    axios.delete(`http://localhost:5000/books/${id}`);
  }

  function onEdit(id) {
    const updatedBookData = {};

    const newTitle = prompt("Enter new title");
    if (newTitle) {
      updatedBookData.title = newTitle;
    }

    const newAuthor = prompt("Enter new author");
    if (newAuthor) {
      updatedBookData.author = newAuthor;
    }

    const newNoOfPages = prompt("Enter new number of pages");
    if (newNoOfPages) {
      updatedBookData.no_of_pages = newNoOfPages;
    }

    const newPublishedAt = prompt("Enter new published date");
    if (newPublishedAt) {
      updatedBookData.published_at = newPublishedAt;
    }

    axios
      .put(`http://localhost:5000/putting/${id}`, updatedBookData)
      .then((res) => {
        console.log(res.data); // Handle the response data as needed
      })
      .catch((error) => {
        console.log(error); // Handle any errors
      });
  }

  return (
    <>
      <table className="border-2 w-[90%] mx-[30px] mt-[20px]">
        <thead className="border-2 bg-red-300 w-[100%]">
          <th>Title</th>
          <th>Author</th>
          <th>No_of_pages</th>
          <th>Published_at</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {data.map((book, index) => {
            return (
              <tr className="border-2 bg-orange-800 " key={index}>
                <td className="p-2">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.no_of_pages}</td>
                <td>{book.published_at}</td>
                <td>
                  <button
                    className="bg-blue-400 w-[100px] rounded-[8px]"
                    onClick={() => onEdit(book._id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="bg-blue-400 w-[100px] rounded-[8px]"
                    onClick={() => onDelete(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
