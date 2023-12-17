import { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';

import { ISmartUrl } from '../components/smarturl';
import axios from 'axios';

export const HotUrls = () => {
  const [urls, setUrls] = useState<ISmartUrl[]>([]);

  const updateUrls = () => {
    axios.get(`http://reldev.shampiniony.ru/api/ref/manage/`).then((res) => {
      const data = res.data as ISmartUrl[];
      setUrls(data);
    });
  };

  useEffect(() => {
    updateUrls();
  }, []);

  return (
    <div className='h-full w-full pb-5'>
      {urls.length > 0 ? (
        <VictoryPie
          style={{
            labels: {
              fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
            },
          }}
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={urls.flatMap((url) => ({ x: url.name, y: url.count }))}
        />
      ) : (
        <div>Loading...</div> // or any other placeholder
      )}
    </div>
  );
};
