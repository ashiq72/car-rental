import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <UserButton afterSignOutUrl="/" />
      <h1>Welcome to our website</h1>
    </div>
  );
}
