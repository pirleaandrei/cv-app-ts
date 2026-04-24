import { useQuery } from '@tanstack/react-query';
import type { CvData } from '../types';
import { fetchCvData } from '../helpers/fetchCvData';

export const useCvData = () => {
  return useQuery<CvData>({
    queryKey: ['cv-data'],
    queryFn: fetchCvData,
  });
};
