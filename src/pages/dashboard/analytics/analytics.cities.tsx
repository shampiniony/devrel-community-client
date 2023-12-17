import axios from 'axios';
import { useEffect, useState } from 'react';
import { VictoryBar } from 'victory';

export const Cities = () => {
  const [cities, setCities] = useState();

  const updateCities = () => {
    axios
      .get(`http://reldev.shampiniony.ru/api/analitics/top-cities/`)
      .then((res) => {
        const data = res.data;
        console.log(data.top_cities);
        setCities(data.top_cities);
      });
  };

  // @ts-ignore
  const getColor = (data) => {
    // You can define your own logic here to select a color
    // This is a simple example based on the y-value
    if (data.y > 50) return 'orange';
    if (data.y > 30 && data.y < 50) return 'green';
    if (data.y > 20) return 'blue';
    return 'red';
  };

  useEffect(() => {
    updateCities();
  }, []);

  return (
    <div className='h-1/2 w-full bg-second-primary rounded-xl p-5'>
      <h1 className='font-bold text-3xl'>top cities</h1>
      {cities ? (
        <VictoryBar
          horizontal
          style={{
            data: {
              // Use the function to set the fill color
              fill: (d) => getColor(d),
            },
          }}
          // Increase the barRatio value to make bars thicker
          barRatio={0.3}
          // Adjust the padding to control the space between bars
          // @ts-ignore
          data={cities.flatMap((city: { name: any; count: any }) => {
            return { x: city.name, y: city.count };
          })}
          labels={({ datum }) => datum.x}
        />
      ) : (
        <>Loading..</>
      )}
    </div>
  );
};
