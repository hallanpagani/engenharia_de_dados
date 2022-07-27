import Chart from "react-google-charts";

const CategoryAnalytics = ({ data }) => {
  const chartData = [["Categoria", "Total"]];
  data.forEach(({ category, amount }) => {
    chartData.push([category, amount]);
  });
  return <>
    <h3>Categoria geral</h3>
    <Chart
      chartType="PieChart"
      data={chartData}
      width={"100%"}
      height={"400px"}
    />
  </>
}

export default CategoryAnalytics;