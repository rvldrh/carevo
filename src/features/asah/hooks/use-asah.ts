import { useQuery } from "@tanstack/react-query";
import { listBootcamps, getBootcampsFeed, listCertifications, getCertificationsFeed } from "@carevo/contracts/api";
import type { ListBootcampsParams, ListCertificationsParams } from "../types/asah";

export function useGetBootcamps(params?: ListBootcampsParams) {
  return useQuery({
    queryKey: ["bootcamps", params],
    queryFn: () => listBootcamps(params),
  });
}

export function useGetBootcampsFeed(params?: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ["bootcamps", "feed", params],
    queryFn: () => getBootcampsFeed(params),
  });
}

export function useGetCertifications(params?: ListCertificationsParams) {
  return useQuery({
    queryKey: ["certifications", params],
    queryFn: () => listCertifications(params),
  });
}

export function useGetCertificationsFeed(params?: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ["certifications", "feed", params],
    queryFn: () => getCertificationsFeed(params),
  });
}
