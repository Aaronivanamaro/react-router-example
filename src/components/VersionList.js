import { Link } from 'react-router-dom';

const VersionList = ({ versions }) => {
  return (
    <div className="version-list">
      {versions.map(version => (
        <div className="version-preview" key={version.id} >
          <Link to={`/versions/${version.id}`}>
            <h2>{ version.title }</h2>
            <p>This is { version.version }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default VersionList;