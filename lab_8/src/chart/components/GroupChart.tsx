import Container from '@mui/material/Container';
import { BarChart} from '@mui/x-charts/BarChart';
import { LineChart} from '@mui/x-charts/LineChart';
import * as React from 'react';
import { tGroup } from "../groupdata"
import SettingChart from './SettingChart';

type GroupProps = {
  data: tGroup;
};

function GroupChart({ data }: GroupProps) {
  const [series, setSeries] = React.useState({
    'Максимальная высота': true,
    'Средняя высота': false,
    'Минимальная высота': false,
  });
  const [isBar, setIsBar] = React.useState(true);

  let activeSeries = Object.entries(series)
    .filter(item => item[1] == true);

  let seriesY = activeSeries
    .map(item => {
       return {
        "dataKey": item[0],
        "label": item[0],
        "barLabel": activeSeries.length === 1 ? "value" as const : undefined,
      }
     });

  const chartSetting = {
    yAxis: [{ label: 'Высота (м)' }],
    height: 400,
  };

  return(
    <Container maxWidth="lg">
      <SettingChart
        series={ series }
        setSeries={ setSeries }
        isBar={ isBar }
        setIsBar={ setIsBar }
      />
      {isBar ? (
        <BarChart
          dataset={ data }
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={ seriesY }
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      ) : (
        <LineChart
          dataset={ data }
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={ seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      )}
    </Container>
  )
}

export default GroupChart;
