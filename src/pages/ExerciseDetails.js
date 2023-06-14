import  {React, useEffect, useState } from "react";
import { exerciseOptions, FetchData,youtubeOptions } from "../utils/FetchData";
import { useParams } from "react-router-dom";
import { Detail } from "../components/Detail";
import { ExercisesVideos } from "../components/ExercisesVideos";
import { SimilarExercises } from "../components/SimilarExercises";
export default function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await FetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await FetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      console.log(exerciseVideosData.contents)
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await FetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      console.log(targetMuscleExercisesData);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await FetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </>
  );
}
