export const dataBuffer = {
  throttle: [],
  brake: [],
  gear: [],
};

export const maxPoints = 20;

export const createChart = (ctx, label) =>
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(maxPoints).fill(""),
      datasets: [{
        label,
        data: [],
        borderColor: "#3685cd", // Updated line color
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
      }],
    },
    options: {
      responsive: false,
      animation: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false },
      },
    }
  });
