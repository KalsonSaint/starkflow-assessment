import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import KickOff from "../routes";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <KickOff />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
