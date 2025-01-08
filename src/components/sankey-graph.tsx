import {Chart, LinearScale} from 'chart.js';
import {SankeyController, Flow} from 'chartjs-chart-sankey';
import {useEffect, useRef} from "react";

Chart.register(SankeyController, Flow, LinearScale)

export default function SankeyGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const links = [
    {from: "Applied", to: "Phone Screen", flow: 50},
    {from: "Phone to", target: "Interview", flow: 30},
    {from: "Phone to", target: "Rejected", flow: 20},
    {from: "Interview", to: "Offer", flow: 15},
    {from: "Interview", to: "Rejected", flow: 15},
    {from: "Offer", to: "Hired", flow: 10},
    {from: "Offer", to: "Rejected", flow: 5},
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'sankey',
          data: {
            datasets: [
              {
                data: links,
                colorMode: 'gradient',
                borderWidth: 1,
                borderColor: 'black',
              },
            ],
          },
        });
      }
    }
  }, []);

  return <canvas ref={canvasRef} />; // Attach the ref to the canvas
}