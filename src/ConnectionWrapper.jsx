const { useNetwork } = require("./hooks");

function OnlineCheckWrapper({ children }) {
  const isOnline = useNetwork();

  if (!isOnline) {
    return (
      <div className="py-5">
        <h1 className="text-danger text-center">Your machine is offline - please go online if you wish to see use this feature</h1>
      </div>
    );
  }

  return <>{children}</>;
}

export default OnlineCheckWrapper;