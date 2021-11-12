import useAxios from "../hooks/useAxios";
import Spinner from "./Spinner";
import VersionList from "./VersionList";

const Home = () => {
  const { isPending, data: versions } = useAxios('http://localhost:8000/versions', 'Home Error:', 'Home Axios:')

  return (
    <div className="home">
      { isPending && <Spinner /> }
      { versions.length > 0 && <VersionList versions={versions} /> }
    </div>
  );
}
 
export default Home;
