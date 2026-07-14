// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Home() {

//   const [idea, setIdea] = useState("");

//   const [response, setResponse] = useState<unknown>(null);  //any

//   async function generateIdea() {

//     const res = await fetch("http://127.0.0.1:8000/generate", {

//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         idea,
//       }),
//     });

//     const data = await res.json();

//     setResponse(data);
//   }

//   return (

//     <main style={{ padding: 40 }}>

//       <h1>Genesis</h1>

//       <input

//         value={idea}

//         onChange={(e) => setIdea(e.target.value)}

//         placeholder="Enter startup idea"

//       />

//       <button onClick={generateIdea}>

//         Generate

//       </button>

//       <pre>

//         {JSON.stringify(response, null, 2)}

//       </pre>

//     </main>

//   );
// }

"use client";

import { useState } from "react";

interface GenesisResponse {
  idea: string;
  research: unknown | null;
  product: unknown | null;
  architecture: unknown | null;
  code: unknown | null;
  qa: unknown | null;
  deployment: unknown | null;
}

export default function Home() {
  const [idea, setIdea] = useState("");
  const [response, setResponse] = useState<GenesisResponse | null>(null);

  async function generateIdea() {
    try {
      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idea,
        }),
      });

      const data: GenesisResponse = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Genesis AI</h1>

      <input
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter startup idea"
        style={{
          padding: "10px",
          width: "350px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={generateIdea}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Generate
      </button>

      <hr style={{ margin: "30px 0" }} />

      <h2>Genesis AI Organization</h2>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "500px",
        }}
      >
        <p>
          <strong>Idea:</strong>{" "}
          {response?.idea ? `✔ ${response.idea}` : "⏳ Waiting"}
        </p>

        <p>
          <strong>Research:</strong>{" "}
          {response?.research ? "✔ Completed" : "⏳ Waiting"}
        </p>

        <p>
          <strong>Product:</strong>{" "}
          {response?.product ? "✔ Completed" : "⏳ Waiting"}
        </p>

        <p>
          <strong>Architecture:</strong>{" "}
          {response?.architecture ? "✔ Completed" : "⏳ Waiting"}
        </p>

        <p>
          <strong>Engineering:</strong>{" "}
          {response?.code ? "✔ Completed" : "⏳ Waiting"}
        </p>

        <p>
          <strong>QA:</strong>{" "}
          {response?.qa ? "✔ Completed" : "⏳ Waiting"}
        </p>

        <p>
          <strong>Deployment:</strong>{" "}
          {response?.deployment ? "✔ Completed" : "⏳ Waiting"}
        </p>
      </div>
    </main>
  );
}