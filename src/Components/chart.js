import { Chart, LinearScale, LineController, PointElement, LineElement, Title } from 'chart.js';

Chart.register(LinearScale, LineController, PointElement, LineElement, Title);

export default Chart;