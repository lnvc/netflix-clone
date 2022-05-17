export const getAllMovieIds = data => {
  return data?.map(item => ({
    params: {
      id: item.id.toString()
    }
  }));
};
