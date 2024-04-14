import { Card } from "../../resusableComponents/Card/Card";
import { useAppSelector } from "../../hooks/hooks";
import { SalesChartTitle, ChartContainer } from "./SalesChartStyles";
import { selectProductData } from "../../store/reducers/productSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const SalesChart = () => {
  const salesData = useAppSelector(selectProductData);
  if (!salesData.length) return null;

  const sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
  }[] = salesData[0].sales;


  const dataForChart: {
    month: string;
    retailSales: number;
    wholesaleSales: number;
  }[] = sales.reduce((acc, { weekEnding, retailSales, wholesaleSales }) => {
    const month = new Date(weekEnding).toLocaleString("en-US", {
      month: "short",
    }).toUpperCase();
    const existing = acc.find((data) => data.month === month);
    if (existing) {
      existing.retailSales += retailSales;
      existing.wholesaleSales += wholesaleSales;
    } else {
      acc.push({ month, retailSales, wholesaleSales });
    }
    return acc;
  }, [] as { month: string; retailSales: number; wholesaleSales: number }[]);


  const sortedData = dataForChart.sort((a, b) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });

  return (
    <Card>
      <SalesChartTitle>Retail Sales</SalesChartTitle>
      <ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={sortedData}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fill: "#cccccc" }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis hide={true} />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="retailSales"
              name="Retail Sales"
              stroke="#45a7f6"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="wholesaleSales"
              name="wholesale Sales"
              stroke="#a1abc3"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
