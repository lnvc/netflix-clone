import { IMovie } from "../../utils/types";

interface ITitle {
  movie: IMovie
}

const Title = ({ movie }: ITitle) => {
  return (
    <div>

    </div>
  );
};

export const getStaticPaths = async () => {

};

export default Title;
