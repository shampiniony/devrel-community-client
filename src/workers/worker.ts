
self.onmessage = (e: MessageEvent<string>) => {
  self.postMessage({data: "yes"})
};

export {};