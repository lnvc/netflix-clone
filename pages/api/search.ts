import axios from "axios";
import { getAllMovieIds } from "../../utils/functions";
export default async function search (req, resp) {
  try {
    const res = await axios.get(`https://${process.env.NEXT_PUBLIC_API_HOST}/search/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        query: req.body.query ? req.body.query : 'a',
      },
    });
    const data = res.data.results;
    const movieIds = getAllMovieIds(data);
    resp.status(200).json({ data, movieIds });
    // return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
