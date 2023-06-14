export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.React_App_Rapid_Api_Key,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.React_App_Rapid_Api_Key,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
};
