import type { Certification } from "@/features/asah/types/api";
import type { AsahItem } from "@/features/asah/types/asah";

export function mapCertificationToAsah(item: Certification): AsahItem {
  return {
    id: String(item.id), 
    title: item.name ?? "",
    image: item.thumbnailUrl ?? "",
    provider: item.publisher,
    date: item.createdAt,
    redirectUrl: item.redirectUrl,
  };
}