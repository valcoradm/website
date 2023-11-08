const API = (apiUrl) => {
  return {
    Get: (url) =>
      fetch(`${apiUrl}/${url}`)
        .then((res) => res.json())
        .catch((ex) => {
          console.error("ERROR FETCH", ex);
          throw ex;
        }),
    GetWithParams: (url, params) => {
      const urlParams = new URLSearchParams(params);
      return fetch(`${apiUrl}/${url}?${urlParams}`)
        .then((res) => res.json())
        .catch((ex) => {
          console.error("ERROR FETCH", ex);
          throw ex;
        });
    },
    Post: (url, payload) =>
      fetch(`${apiUrl}/${url}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((ex) => {
          console.error("ERROR FETCH", ex);
          throw ex;
        }),
  };
};

export default API;
