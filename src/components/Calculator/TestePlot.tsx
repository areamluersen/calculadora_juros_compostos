import { Column } from '@ant-design/plots';

export const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json',
    } as unknown as unknown[],
    xField: 'year',
    yField: 'value',
    stack: true,
    colorField: 'type',
    label: {
      text: 'value',
      textBaseline: 'bottom',
      position: 'inside',
    },
    interaction: {
      elementHighlightByColor: {
        link: true,
      },
    },
    state: {
      active: { linkFill: 'rgba(0,0,0,0.25)', stroke: 'black', lineWidth: 0.5 },
      inactive: { opacity: 0.5 },
    },
  };
  return <Column {...config} />;
};