import { Layout } from "@/components/Layout";
import { TxDetailPage } from "@/modules/tx/tx-detail";
import { useRouter } from "next/router";

export default function TxnDetail() {
  const router = useRouter();
  const { tx } = router.query;

  return (
    <Layout>
      <TxDetailPage tx={tx ? String(tx) : ""} />
    </Layout>
  );
}
