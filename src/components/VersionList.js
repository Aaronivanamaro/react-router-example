import { useState } from "react";
import VersionDetails from "./VersionDetails";

const VersionList = ({ versions }) => {
  
  const [open, setOpen] = useState('')

  return (
    <div className="version-list">
    {versions.map(version => (
      open === '' ? 
      <div className="version-preview" key={version.id} onClick={() => setOpen(version.id)}>
        <a>
          <h2>{ version.title }</h2>
          <p>This is { version.version }</p>
        </a>
      </div> 
      : (open === version.id ? <VersionDetails id={version.id}/> : null)
    ))}
    </div>
  );
}
 
export default VersionList;