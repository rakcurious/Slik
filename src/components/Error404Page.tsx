import { Navbar } from "..";
import Error from "./WrongPage";

const Error404: React.FC = () => {
  return (
    <>
      <Navbar />
      <Error />
    </>
  );
};

export default Error404;
