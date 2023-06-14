import React from "react";

export const ExercisesVideos = ({ exerciseVideos, name }) => {
  return (
    <div className=" mb-10">
      <p className="text-3xl font-semibold border border-b-primary border-b-4 inline-block p-3 mb-10">
        Watch <span className="text-primary">{name}</span> exercise
        videos
      </p>
      <div className="grid grid-cols-3 gap-y-5 mx-auto w-[90%] ">
        {exerciseVideos.slice(0,9)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video w-[90%]"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=""
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <p className="m-y-5 text-lg font-semibold text-orange-600 ">{item.video.title}</p>
            <p className=" text-base">{item.video.channelName}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
