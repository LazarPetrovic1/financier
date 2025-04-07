import { PatchListItem } from "../components";
const { shell } = window.require('electron');

function PatchNotes() {
  const openRepo = () => shell.openExternal('https://github.com/LazarPetrovic1/financier')
  return (
    <div className="container">
      <h1 className="text-primary text-center">Patch Notes</h1>
      <h2 className="text-secondary mb-5">
        This is a rolling release project. The only way to get the previous version is to manually install the desired version from the GitHub repository of this project, which is found&nbsp;
        <span onClick={openRepo} className="text-decoration-underline" role="button">here</span>
      </h2>

      <ul className="list-group">
        <PatchListItem patchText={["1.0.0", "App developed and released to production"]} />
        <PatchListItem patchText={["1.0.1", "Fixed the dates on the `/search/ route"]} />
        <PatchListItem patchText={["1.0.2", "Added the `/patch-notes` and `/about` routes"]} />
        <PatchListItem patchText={["1.0.3", "Decoupled the logic of all the routes"]} />
        <PatchListItem patchText={["1.0.4", "Cosmetic changes"]} />
      </ul>
    </div>
  )
}

export default PatchNotes;