"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OAuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/main");
  }, [router]);

  return <p>Loading...</p>;
}