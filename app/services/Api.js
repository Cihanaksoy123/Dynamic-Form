const endPoint = 'http://';
export const loginRequest = (userName,passWord) => {
  let formData = new FormData();
  formData.append('Username', userName);
  formData.append('Password', passWord);
  return fetch(endPoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
    },
    body: formData,
  })
  // .then(res=>res.json())
  //   .then(json => {
  //     return json;
  //   })
  //   .catch(error => {
  //     return error;
  //   });
};
