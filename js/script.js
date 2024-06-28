function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-250%";
}

var options = {
  series: [80, 20, 10],
  chart: {
    width: 200,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
      donut: {
        size: "87%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "solid",
    colors: ["#8ED1FF", "#F2F3F5", "#FFCDEA"],
  },
  legend: {
    show: false,
  },
  stroke: {
    show: false, // Removed the white border
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  tooltip: {
    enabled: false, // Disable the tooltip
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false, // Hide the toolbar
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight", // Change the line curve to straight
      width: 2, // Line width
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 30, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical", // Ensure the gradient is vertical
        gradientToColors: ["#FF5BEF"], // Ending color for the gradient fill
        inverseColors: false,
        opacityFrom: 0.1, // Reduced opacity from
        opacityTo: 0.1, // Reduced opacity to
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#5BC4FF",
            opacity: 0.1, // Reduced opacity at start
          },
          {
            offset: 100,
            color: "#FF5BEF",
            opacity: 0.1, // Reduced opacity at end
          },
        ],
      },
    },
    markers: {
      colors: ["#5BC4FF", "#FF5BEF"], // Colors for the markers
    },
    xaxis: {
      categories: [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tooltip: {
        enabled: false, // Disable the x-axis tooltip
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true, // Show y-axis
      labels: {
        show: true, // Show y-axis labels
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#5BC4FF"],
    stroke: {
      width: 2, // Adjust the width of the line
      curve: "straight", // Line curve type
      colors: ["#5BC4FF"], // Apply gradient color start to the line
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ["#FF5BEF"], // Ending color for the gradient fill
        inverseColors: false,
        opacityFrom: 0.1, // Reduced opacity from
        opacityTo: 0.1, // Reduced opacity to
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#5BC4FF",
            opacity: 0.1, // Reduced opacity at start
          },
          {
            offset: 100,
            color: "#FF5BEF",
            opacity: 0.1, // Reduced opacity at end
          },
        ],
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
});
