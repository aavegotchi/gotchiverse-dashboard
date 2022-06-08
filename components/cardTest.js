import { Line } from "react-chartjs-2";

export const Footer = () => {
  return (
    <>
      <Line
        data={{
          labels: ["Jun", "Jul", "Aug", "Nov"],
          datasets: [
            {
              label: "test",
              data: [5, 6, 7, 5],
            },
            {
              label: "test 2",
              data: [3, 2, 1, 4],
            },
          ],
        }}
      />
    </>
  );
};
