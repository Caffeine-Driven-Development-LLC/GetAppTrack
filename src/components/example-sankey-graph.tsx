import {Chart, LinearScale} from 'chart.js';
import {Flow, SankeyController} from 'chartjs-chart-sankey';
import {useEffect, useRef} from "react";
import theme from "@/app/theme";

Chart.register(SankeyController, Flow, LinearScale)

export default function ExampleSankeyGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {

    const nodes = [
      {name: "Applied", label: "Applied (21)", color: '#559651'},
      {name: "Rejected", label: "Rejected (13)", color: '#a10808'},
      {name: "Ghosted", label: "Ghosted (6)", color: '#ccc2c2'},
      {name: "Phone Screen", label: "Phone Screen (3)", color: '#69b3a2'},
      {name: "Interviewed", label: "Interviewed (2)", color: '#69b3a2'},
      {name: "Offer", label: "Offer Received (1)", color: '#69b3a2'},
      {name: "In Progress", label: "In Progress (1)", color: '#559651'},
      {name: "Withdrew", label: "Withdrew (1)", color: '#04399b'},
    ];

    const labels = nodes.reduce(
      (acc, node) => ({...acc, [node.name]: node.label}),
      {});

    const defaultColor = '#ffffff'

    const getColor = (c: string) => {
      return nodes?.find((n) => n.name === c)?.color || defaultColor
    }

    const links = [
      {from: "Applied", to: "Rejected", flow: 12},
      {from: "Applied", to: "Ghosted", flow: 6},
      {from: "Applied", to: "Phone Screen", flow: 3},
      {from: "Phone Screen", to: "Interviewed", flow: 2},
      {from: "Phone Screen", to: "Withdrew", flow: 1},
      {from: "Interviewed", to: "Rejected", flow: 1},
      {from: "Interviewed", to: "In Progress", flow: 1},
    ];

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'sankey',
          data: {
            datasets: [
              {
                data: links,
                labels: labels,
                colorMode: 'gradient',
                borderWidth: 1,
                colorFrom: (c) =>
                  getColor(
                    c?.dataset?.data[c.dataIndex]?.from ||
                    defaultColor
                  ),
                colorTo: (c) =>
                  getColor(
                    c?.dataset?.data[c.dataIndex]?.to ||
                    defaultColor
                  ),
                borderColor: 'black',
                color: theme.palette.primary.main
              },
            ],
          },
          options: {
            maintainAspectRatio: false
          },
        });
      }
    }
  }, []);

  return (
    <div style={{width: '100%', height: '200px'}}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}