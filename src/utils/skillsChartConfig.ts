import * as echarts from 'echarts';

export const getSkillsChartConfig = (darkMode: boolean): echarts.EChartsOption => ({
  animation: false,
  radar: {
    indicator: [
      { name: 'Frontend', max: 100 },
      { name: 'Backend', max: 100 },
      { name: 'Database', max: 100 },
      { name: 'DevOps', max: 100 },
      { name: 'UI/UX', max: 100 },
      { name: 'Testing', max: 100 },
    ],
    shape: 'circle',
    splitNumber: 4,
    axisName: {
      color: darkMode ? '#e2e8f0' : '#334155',
      fontSize: 12,
    },
    splitLine: {
      lineStyle: { color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' },
    },
    splitArea: { show: false },
    axisLine: {
      lineStyle: { color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' },
    },
  },
  series: [
    {
      name: 'Skills',
      type: 'radar',
      data: [
        {
          value: [90, 85, 80, 75, 85, 70],
          name: 'Skill Level',
          areaStyle: { color: darkMode ? 'rgba(99, 102, 241, 0.6)' : 'rgba(99, 102, 241, 0.4)' },
          lineStyle: { color: '#6366f1', width: 2 },
          itemStyle: { color: '#6366f1' },
        },
      ],
    },
  ],
  textStyle: { color: darkMode ? '#e2e8f0' : '#334155' },
});