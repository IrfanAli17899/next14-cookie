'use client';
import { deleteCookie, saveCookie } from "@src/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={async()=>await saveCookie()}>
        <h1>Save Cookie</h1>
      </button>
      <button onClick={async()=>await deleteCookie()}>
        <h1>Save Cookie</h1>
      </button>
    </main>
  );
}
