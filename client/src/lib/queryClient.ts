import { QueryClient } from "@tanstack/react-query";

// Create a default fetcher for API requests
const defaultFetcher = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Create the QueryClient instance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => defaultFetcher(queryKey[0] as string),
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Export a helper for API requests (mutations)
export const apiRequest = async (url: string, options: RequestInit = {}) => {
  return defaultFetcher(url, options);
};