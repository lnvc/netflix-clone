import axios from "axios";
export default async function search (req, res) {
  await axios.get(`https://${process.env.NEXT_PUBLIC_API_HOST}/search/movie`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      query: 'a'
    }
  }).then(function (response) {
    console.log(response.data);
    res.status(200).send(response.data);
  }).catch(function (error) {
    console.error(error);
  });
};
