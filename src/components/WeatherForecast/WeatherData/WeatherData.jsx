const WeatherData = ({ day, conditions, time }) => {
    return (
      <>
        <p>
          <span>Day: </span>
          {day}
        </p>
        <p>
          <span>Conditions: </span>
          {conditions}
        </p>
        <p>
          <span>Time: </span>
          {time}
        </p>
      </>
    );
  };