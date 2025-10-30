// Global type definitions
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface UrlData {
  id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
  clicks?: number;
}
