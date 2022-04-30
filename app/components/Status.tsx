
import type { InferProps } from "prop-types";
import PropTypes  from "prop-types";


function Status({ status }:InferProps<typeof Status.propTypes>)  {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  if (status)
  {
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
    return null;
  }


Status.propTypes = {
  status: PropTypes.string
};

export default Status;
