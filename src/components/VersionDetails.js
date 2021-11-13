import useAxios from "../hooks/useAxios";
import Spinner from "./Spinner";

const VersionDetails = ({id}) => {
  const { data: version, isPending } = useAxios(`http://localhost:8000/versions/${id}`);

  return (
    <div className="version-details">
      { isPending ? <Spinner /> :
      <article>
        <h2>{ version.title }</h2>
        <p>{`This is: ${version.version}`}</p>
        <div>{ version.body }</div>
      </article>
      }
    </div>
  );
}
 
export default VersionDetails;