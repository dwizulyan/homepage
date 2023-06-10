const saveHistorySearch = (query, url) => {
  const prevData = localStorage.getItem("history");
  if (prevData) {
    const processedData = JSON.parse(prevData);
    const currData = {
      id: processedData.length,
      keyword: query,
      url: url,
    };
    processedData.push(currData);
    localStorage.clear();
    return localStorage.setItem("history", JSON.stringify(processedData));
  } else {
    const container = [];
    const currData = {
      id: 0,
      keyword: query,
      url: url,
    };
    container.push(currData);
    const processedData = JSON.stringify(container);
    localStorage.setItem("history", processedData);
    console.log(localStorage.getItem("history"));
  }
};

export default saveHistorySearch;
