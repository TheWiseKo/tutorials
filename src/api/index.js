import axios from "axios";

const instance = axios.create({
  baseURL: "https://random-data-api.com/api/",
});

// https://random-data-api.com/api/users/random_user
// https://random-data-api.com/api/nation/random_nation

export async function getRandomUser(size = 10) {
  const users = await instance.get(`users/random_user?size=${size}`);
  return users;
}

export async function getRandomFlag(size = 10) {
  const flags = await instance.get("nation/random_nation/");
  return flags;
}
