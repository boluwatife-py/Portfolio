import * as echarts from "echarts";
import { useEffect } from "react";

export default function SkillChart({ darkMode }: { darkMode: boolean }) {
  useEffect(() => {
    const skillsChartContainer = document.getElementById("skills-chart");
    if (skillsChartContainer) {
      const myChart = echarts.init(skillsChartContainer);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: "Frontend", max: 100 },
            { name: "Backend", max: 100 },
            { name: "Database", max: 100 },
            { name: "DevOps", max: 100 },
            { name: "UI/UX", max: 100 },
            { name: "Testing", max: 100 },
          ],
          shape: "circle",
          splitNumber: 4,
          axisName: {
            color: darkMode ? "#e2e8f0" : "#334155",
            fontSize: 12,
          },
          splitLine: {
            lineStyle: {
              color: darkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: darkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
            },
          },
        },
        series: [
          {
            name: "Skills",
            type: "radar",
            data: [
              {
                value: [90, 95, 95, 75, 85, 70],
                name: "Skill Level",
                areaStyle: {
                  color: darkMode
                    ? "rgba(99, 102, 241, 0.6)"
                    : "rgba(99, 102, 241, 0.4)",
                },
                lineStyle: {
                  color: "#6366f1",
                  width: 2,
                },
                itemStyle: {
                  color: "#6366f1",
                },
              },
            ],
          },
        ],
        textStyle: {
          color: darkMode ? "#e2e8f0" : "#334155",
        },
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      return () => {
        myChart.dispose();
        window.removeEventListener("resize", () => {
          myChart.resize();
        });
      };
    }
  }, [darkMode]);

  return (
    <div
      className={`p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
    >
      <h3
        className={`text-lg font-semibold mb-4 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Skills Overview
      </h3>
      <div id="skills-chart" className="w-full h-64"></div>
    </div>
  );
}
