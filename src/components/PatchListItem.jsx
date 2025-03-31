import { useState } from "react"

function PatchListItem({ patchText }) {
  const [classes, setClasses] = useState(() => "list-group-item")
  return (
    <li
      onMouseEnter={() => setClasses(() => "list-group-item active")}
      onMouseLeave={() => setClasses(() => "list-group-item")}
      className={classes}
    ><b>{patchText[0]}</b> - {patchText[1]}</li>
  )
}

export default PatchListItem