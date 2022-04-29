
function Status({ status }) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div
      className={
        status == "pending"
          ? "bg-warning-light status-wrapper"
          : "bg-success-light status-wrapper"
      }
    >
      <p className={status == "pending" ? "color-warning" : "color-success"}>
        {capitalizeFirstLetter(status)}
      </p>
    </div>
  );
}

export default Status;
