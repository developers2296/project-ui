import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Car Selling Platform</h1>
      <Link href="/login">
        <Button type="primary" style={{ marginRight: "10px" }}>
          Login
        </Button>
      </Link>
      <Link href="/sell-car">
        <Button type="primary">Sell Car</Button>
      </Link>
    </div>
  );
}