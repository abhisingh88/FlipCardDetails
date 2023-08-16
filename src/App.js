import React from "react";
import Stack from "@mui/material/Stack";
import DetailedCard from "./components/DetailedCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack spacing={1}>
        <DetailedCard />
      </Stack>
    </QueryClientProvider>
  );
}
export default App;
