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
      new Promise((resolve, reject) => {
        fetch(`${apiUrl}/${url}`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status === 200 || res.status === 204) {
              return res
                .json()
                .then((data) => resolve(data))
                .catch((ex) => {
                  reject(ex);
                });
            }
            res
              .json()
              .then((data) => reject(data))
              .catch((ex) => {
                reject(ex);
              });
          })
          .catch((ex) => {
            console.error("ERROR FETCH", ex);
            throw ex;
          });
      }),
  };
};

export default API;
