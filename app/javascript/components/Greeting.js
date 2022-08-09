import React from "react";
import { useSelector} from 'react-redux';
import PropTypes from "prop-types"
export default function Greeting () {

  const message = useSelector((state) => state.messageReducer.message);
  return (
    <React.Fragment>
        <div>
          this is Greeting Component <br />
              {message}
        </div>
      </React.Fragment>
    );
  }

