import { Layout } from "@/components/Layout";
import { TxDetailPage } from "@/modules/tx/tx-detail";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TxnDetail() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  const { tx } = router.query;

  return <Layout>{tx && <TxDetailPage tx={String(tx)} />}</Layout>;
}
