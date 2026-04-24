import type { CvData } from "../types";

export async function fetchCvData(): Promise<CvData> {
  const response = await fetch('/cv.json');
  if (!response.ok) {
    throw new Error('Failed to fetch CV data');
  }
  return response.json();
};