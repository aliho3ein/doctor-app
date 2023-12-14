import { crewType } from "../../model/crewType";

const ImageCard = ({ data }: { data: crewType }) => {
  return (
    <div
      style={{ ["--img" as string]: `url(${data.img})` }}
      data-aos="zoom-out-up"
    >
      <h3>{data.name}</h3>
    </div>
  );
};

export default ImageCard;
