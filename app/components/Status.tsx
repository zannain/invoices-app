
import type { InferProps } from "prop-types";
import PropTypes  from "prop-types";


function Status({ status }:InferProps<typeof Status.propTypes>)  {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  if (status)
  {
      return (
          <p className={status == "pending" ? "color-warning bg-warning-light status-wrapper" : "color-success bg-success-light status-wrapper"}>
            {capitalizeFirstLetter(status)}
          </p>
      );
    }
    return null;
  }


Status.propTypes = {
  status: PropTypes.string
};

export default Status;
