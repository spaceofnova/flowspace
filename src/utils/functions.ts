const broadcast = (event: string, data: any) => {
  const eventName = `${event}`;
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  }
};

const onBroadcast = (event: string, callback: (data: any) => void) => {
  const eventName = `${event}`;
  if (typeof window !== "undefined") {
    window.addEventListener(eventName, (e: any) => {
      callback(e.detail);
    });
  }
};

export { broadcast, onBroadcast };
