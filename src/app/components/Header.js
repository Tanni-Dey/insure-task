import Link from "next/link";

export default function HeaderPage({ pageComponentProps }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/addblog">Create Blog</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
