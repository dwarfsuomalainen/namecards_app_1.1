const urlApi = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () =>
fetch(urlApi).then((response) => response.json());

export const getUser = (userId) =>
fetch(urlApi + "/" + userId).then((response) => response.json());

