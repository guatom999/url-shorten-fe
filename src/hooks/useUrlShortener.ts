import { useState, useCallback } from "react";

// Example custom hook - you can implement your logic here
export const useUrlShortener = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shortenUrl = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);

    try {
      // Implement your API call here
      console.log("Shortening URL:", url);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Return mock data for now
      return {
        originalUrl: url,
        shortUrl: "https://short.ly/abc123",
        id: "1",
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to shorten URL");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    shortenUrl,
    loading,
    error,
  };
};
