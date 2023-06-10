import data from "../data.json";
import saveHistorySearch from "./saveHistorySearch";

const handleUrl = (query) => {
  if (query === "") return;
  data.map((data) => {
    const findKey = data.keyword.indexOf(query) > -1;
    if (findKey) {
      saveHistorySearch(query, data.url);
      return (location.href = data.url);
    } else {
      const url = `https://www.google.com/search?query=${query}`;
      saveHistorySearch(query, url);
      return (location.href = url);
    }
  });
};

export default handleUrl;
