import { computed, ref, reactive } from "vue";

export function useDeviceDetails() {

  const status = ref({});

  const ws = new WebSocket("ws://localhost:6909");
  ws.onmessage = function (event) {
    let message = JSON.parse(event.data);
    console.log("RECEIVED WEB MESSAGE INSIDE useDeviceDetails: ", message);
  };
  
  ws.onopen = function (event) {
    console.log(
      "Successfully connected to the echo websocket server from useDeviceDetails..."
    );
    ws.send("Hello");
  };

  return {
    status
  };
}
