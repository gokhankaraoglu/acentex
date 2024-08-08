"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useTokenRefresh from "../hooks/useToken";

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  useTokenRefresh();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
