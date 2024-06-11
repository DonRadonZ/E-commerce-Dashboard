import styled from "styled-components";
// import useDarkMode from "../../hooks/useDarkMode";
import Heading from "../../Components/layout/Header/Heading";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-gray-0);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

// const startDataLight = [
//     {
//       category: "Beverage",
//       value: 0,
//       color: "#ef4444",
//     },
//     {
//       category: "Confectionery",
//       value: 0,
//       color: "#f97316",
//     },
//     {
//       category: "Dessert",
//       value: 0,
//       color: "#eab308",
//     },
//     // {
//     //   category: "4-5 nights",
//     //   value: 0,
//     //   color: "#84cc16",
//     // },
//     // {
//     //   category: "6-7 nights",
//     //   value: 0,
//     //   color: "#22c55e",
//     // },
//     // {
//     //   category: "8-14 nights",
//     //   value: 0,
//     //   color: "#14b8a6",
//     // },
//     // {
//     //   category: "15-21 nights",
//     //   value: 0,
//     //   color: "#3b82f6",
//     // },
//     // {
//     //   category: "21+ nights",
//     //   value: 0,
//     //   color: "#a855f7",
//     // },
//   ];
  
  // const startDataDark = [
  //   {
  //     category: "Beverage",
  //     value: 200,
  //     color: "#b91c1c",
  //   },
  //   {
  //     category: "Confectionery",
  //     value: 500,
  //     color: "#c2410c",
  //   },
  //   {
  //     category: "Dessert",
  //     value: 800,
  //     color: "#a16207",
  //   },
  //   // {
  //   //   category: "4-5 nights",
  //   //   value: 0,
  //   //   color: "#4d7c0f",
  //   // },
  //   // {
  //   //   category: "6-7 nights",
  //   //   value: 0,
  //   //   color: "#15803d",
  //   // },
  //   // {
  //   //   category: "8-14 nights",
  //   //   value: 0,
  //   //   color: "#0f766e",
  //   // },
  //   // {
  //   //   category: "15-21 nights",
  //   //   value: 0,
  //   //   color: "#1d4ed8",
  //   // },
  //   // {
  //   //   category: "21+ nights",
  //   //   value: 0,
  //   //   color: "#7e22ce",
  //   // },
  // ];

  const fakeData = [
    {
      category: "Beverage",

      value: 200,
      color: "#84cc16",
    },
    {
      category: "Confectionery",
      value: 500,
      color: "#65a30d",
    },
    {
      category: "Dessert",
      value: 800,
      color: "#4d7c0f",
    },
  ]





export default function TypeBuyChart() {
    // const {isDarkMode} = useDarkMode();
    // const startData = isDarkMode ? startDataDark : startDataLight  
  
    return (
    <ChartBox>
        <Heading as="h2">Product duration buy summary</Heading>
        <ResponsiveContainer width='100%' height={240}>
          <PieChart>
          <Pie
          data={fakeData}
          nameKey='category' 
          dataKey='value' 
          innerRadius={85}
          outerRadius={110}
          cx="40%"
          cy="50%"
          paddingAngle={3}
          >
            {
            fakeData.map((entry) =>(
              <Cell
              fill={entry.color}
              stroke={entry.color}
              key={entry.category}
            />
            ))
          }  
          </Pie>
          <Tooltip />
          <Legend 
          verticalAlign="middle"
          align="right"
          widths="30%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
           />
          </PieChart>
        </ResponsiveContainer>
    </ChartBox>
  )
}
