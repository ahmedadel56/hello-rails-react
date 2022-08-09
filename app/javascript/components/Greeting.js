import React, { useEffect }  from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/GreetingReducer';
import PropTypes from "prop-types"
export default function Greeting () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const greetingsState = useSelector((state) => state.GreetingReducer.greetings);

  return (
    <React.Fragment>
        <div>
          this is Greeting Component
          <div className="row" >
          {greetingsState.map((greeting) => {
            if (greeting.length !== 0) {
              return (
                <div  key={greeting.id}>
                  {greeting.text}
            </div>
              );
            }
            return null;
          })}
          </div>
        </div>
      </React.Fragment>
    );
  }

