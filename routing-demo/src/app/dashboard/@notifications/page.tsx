import Card from "@/components/page";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notificatons</div>
      <Link href="/dashboard/archive">Archive</Link>
    </Card>
  );
}
