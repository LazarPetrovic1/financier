import { useContext } from "react";
import { TrackerContext } from "../contexts/TrackerContext";
import warningIcon from '../assets/warning.svg';
import infoIcon from '../assets/info.svg';

function Alert({ msg, msgType }) {
  const { setWarning } = useContext(TrackerContext)
  const clearAlert = () => {
    const id = setTimeout(() => {
      setWarning((prev) => prev.filter(a => a === msg))
    }, 2000);
    clearTimeout(id);
  }
  return (
    <div style={{ maxHeight: "60px" }} className={`alert alert-${msgType} d-flex gap-3 align-items-baseline alert-dismissible fade show`} role="alert">
      {msgType === "warning" ? (
        <img src={warningIcon} alt="Warning" />
      ) : (
        <img src={infoIcon} alt="Info" />
      )}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={clearAlert} />
      <div>{msg}</div>
    </div>
  )
}

export default Alert;