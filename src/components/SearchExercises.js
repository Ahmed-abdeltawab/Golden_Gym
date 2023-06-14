import { React, useEffect,useState } from "react";
import { exerciseOptions, FetchData } from "../utils/FetchData";
import { HorizontalScroll } from "./HorizontalScroll";
export default function SearchExercises({
  setExercises,
  bodyPart,
  setBodyPart,
}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  console.log(bodyParts);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="mb-[60px]">
        <h2 className="text-center leading-snug font-bold text-2xl sm:text-3xl mb-10 ">
          Awesome Exercises You <br /> Should Know
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto w-[100%] flex  sm:w-[70%]">
          <input
            className="sm:w-[80%] w-[90%] border border-stone-400 outline-none rounded p-2
          placeholder:font-medium placeholder:text-sm
          "
            name="search"
            id="search"
            type="text"
            placeholder="Search Exercise"
          />
          <button
            className="px-8 py-2 bg-primary rounded inline-block  text-white"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
      <div className="">
        <HorizontalScroll data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </div>
    </>
  );
}
