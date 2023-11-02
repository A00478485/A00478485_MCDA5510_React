import React, { useState, useCallback } from 'react';

const TemperatureToggle = ({ temperatureData }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleClick = useCallback(() => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  }, []);

  const temperature = temperatureData;
  const convertedTemperature = isCelsius ? temperature : (temperature * 9 / 5) + 32;

  return (
    <div>
      <p onClick={handleClick} style={{ cursor: 'pointer' }}>Current Temperature is &nbsp;
        {isCelsius ? `${temperature}°C` : `${convertedTemperature}°F`}
      </p>
    </div>
  );
};

export default TemperatureToggle;
