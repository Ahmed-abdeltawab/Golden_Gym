import { React, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, FetchData } from "../utils/FetchData";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 9;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(exercises.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exercises.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, exercises]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    setItemOffset(newOffset);
  };

  // console.log(newExercises);
  return (
    <>
      <div className="grid grid-cols-3 my-12">
        {currentItems.map((item, index) => (
          <ExerciseCard key={index} exercise={item} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousClassName="page-num"
        nextClassName="page-num"
        activeClassName="active-page"
      />
    </>
  );
};

export default Exercises;
