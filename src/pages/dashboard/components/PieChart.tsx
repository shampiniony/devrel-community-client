import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import { scaleOrdinal } from '@visx/scale';
import {
  LegendOrdinal,
  LegendItem,
  LegendLabel,
} from '@visx/legend';

// Sample data
const data = [
  { website: 'kakdela.ru', visits: 1 },
  { website: 'yaustala.ru', visits: 1 },
  { website: 'hochuspat.ru', visits: 1 },
  { website: 'bobroeuro.ru', visits: 1 },
  { website: 'aaaaaaaaaa.ru', visits: 1 },
  { website: 'edaaaa.ru', visits: 1 },
];

// Define the color scale
const colorScale = scaleOrdinal({
  domain: data.map((d) => d.website),
  range: ['#f5222d', '#faad14', '#a0d911', '#13c2c2', '#1890ff', '#722ed1'],
});

// Dimensions
const width = 300;
const height = 300;
const radius = Math.min(width, height) / 2;
const innerRadius = radius - 30; // This will create the donut hole
const centerY = height / 2;
const centerX = width / 2;

// Render the donut chart using visx components
const PieChart = () => (
  <svg width={width} height={height}>
    <Group top={centerY} left={centerX}>
      <Pie
        data={data}
        pieValue={(d) => d.visits}
        outerRadius={radius}
        innerRadius={innerRadius} // Set the innerRadius for the donut chart
        padAngle={0.01}
        cornerRadius={3} // Optional, if you want rounded edges
      >
        {(pie) => {
          return pie.arcs.map((arc, i) => (
            <g key={`arc-${i}`}>
              <path d={pie.path(arc)} fill={colorScale(arc.data.website)} />
            </g>
          ));
        }}
      </Pie>
    </Group>
    <LegendOrdinal
      scale={colorScale}
      labelFormat={(label) => `${label.toUpperCase()}`}
    >
      {(data) => (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {data.map((label, i) => (
            <LegendItem
              key={`legend-quantile-${i}`}
              margin='0 5px'
              onClick={() => {
                if (event) alert(`clicked: ${JSON.stringify(label)}`);
              }}
            >
              <svg width={2} height={2}>
                <rect
                  fill={label.value}
                  width={2}
                  height={2}
                />
              </svg>
              <LegendLabel align='left' margin='0 0 0 4px'>
                {label.text}
              </LegendLabel>
            </LegendItem>
          ))}
        </div>
      )}
    </LegendOrdinal>
  </svg>
);

export default PieChart;
