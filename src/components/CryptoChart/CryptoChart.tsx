import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { AppConfig } from "../../data/config";
import {
  addCryptoData,
  getCryptoData,
  initCryptoData,
} from "../../data/store/cryptoDataSlice";
import { startHeartbeat, stopHeartbeat } from "../../data/store/heartbeatSlice";
import { useAppSelector, useAppDispatch } from "../../data/store/hooks";

let socket: WebSocket;

function timeSince(time: string) {
  const prevTime = new Date(Number(time));
  return (Date.now() - Number(prevTime)) / 1000;
}

export default function CryptoChart() {
  const cryptoData = useAppSelector(getCryptoData);
  const dispatch = useAppDispatch();

  const [pairs, setPairs] = useState<string[]>([]);

  useEffect(() => {
    if (socket == undefined) {
      let dataPoint: any;
      socket = new WebSocket(AppConfig.cryptoDataUrl);

      socket.onopen = () => {
        let tempPairs: string[] = JSON.parse(
          localStorage.getItem("pairs") ?? "[]"
        );
        socket.send(`{
          "event": "subscribe",
          "pair": [${tempPairs.map((pair) => `"${pair}"`)}],
          "subscription": {
            "name": "ticker"
          }
        }`);
        setPairs(tempPairs);
        dispatch(initCryptoData());
      };

      socket.onmessage = (message) => {
        const data = JSON.parse(message.data);
        if (data[2] == "ticker") {
          const prevDataPoint = dataPoint;
          dataPoint = {
            time: Date.now().toString(),
          };
          dataPoint[data[3]] = data[1].c[0];

          if (timeSince((prevDataPoint ?? Date.now().toString()).time) > 0.1) {
            dispatch(startHeartbeat());
            setTimeout(() => dispatch(stopHeartbeat()), 1000);
            dispatch(addCryptoData(dataPoint));
          }
        }
      };
    }
  }, [dispatch, pairs]);

  return (
    <>
      {pairs.map((pair, index) => {
        let color = (((index + 103) * 3914269) % 0xffffff)
          .toString(16)
          .padStart(6, "0");
        return (
          <div key={index} style={{ height: `${100 / pairs.length}%` }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={1600}
                height={800}
                data={cryptoData
                  .filter((point: any) => Object.keys(point)[1] == pair)
                  .map((point: any) => ({
                    ...point,
                    time: timeSince(point.time),
                  }))}
                margin={{
                  top: 16,
                  right: 16,
                  left: 32,
                  bottom: 16,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" reversed type="number" unit="s" />
                <YAxis type="number" domain={["auto", "auto"]} />
                <Tooltip />
                <Legend />
                <Line
                  connectNulls
                  dataKey={pair}
                  stroke={`#${color}`}
                  type="linear"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </>
  );
}
