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

// "use client";

// import { useState } from "react";

// interface GenesisResponse {
//   idea: string;
//   research: unknown | null;
//   product: unknown | null;
//   architecture: unknown | null;
//   code: unknown | null;
//   qa: unknown | null;
//   deployment: unknown | null;
// }

// export default function Home() {
//   const [idea, setIdea] = useState("");
//   const [response, setResponse] = useState<GenesisResponse | null>(null);

//   async function generateIdea() {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           idea,
//         }),
//       });

//       const data: GenesisResponse = await res.json();
//       setResponse(data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   return (
//     <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Genesis AI</h1>

//       <input
//         value={idea}
//         onChange={(e) => setIdea(e.target.value)}
//         placeholder="Enter startup idea"
//         style={{
//           padding: "10px",
//           width: "350px",
//           marginRight: "10px",
//         }}
//       />

//       <button
//         onClick={generateIdea}
//         style={{
//           padding: "10px 20px",
//           cursor: "pointer",
//         }}
//       >
//         Generate
//       </button>

//       <hr style={{ margin: "30px 0" }} />

//       <h2>Genesis AI Organization</h2>

//       <div
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           padding: "20px",
//           maxWidth: "500px",
//         }}
//       >
//         <p>
//           <strong>Idea:</strong>{" "}
//           {response?.idea ? `✔ ${response.idea}` : "⏳ Waiting"}
//         </p>

//         <p>
//           <strong>Research:</strong>{" "}
//           {response?.research ? "✔ Completed" : "⏳ Waiting"}
//         </p>

//         <p>
//           <strong>Product:</strong>{" "}
//           {response?.product ? "✔ Completed" : "⏳ Waiting"}
//         </p>

//         <p>
//           <strong>Architecture:</strong>{" "}
//           {response?.architecture ? "✔ Completed" : "⏳ Waiting"}
//         </p>

//         <p>
//           <strong>Engineering:</strong>{" "}
//           {response?.code ? "✔ Completed" : "⏳ Waiting"}
//         </p>

//         <p>
//           <strong>QA:</strong>{" "}
//           {response?.qa ? "✔ Completed" : "⏳ Waiting"}
//         </p>

//         <p>
//           <strong>Deployment:</strong>{" "}
//           {response?.deployment ? "✔ Completed" : "⏳ Waiting"}
//         </p>
//       </div>
//     </main>
//   );
// } 

"use client";

import { useState } from "react";

type Research = {
  problem_summary: string;
  target_users: string[];
  competitors: string[];
  market_gap: string;
  mvp_features: string[];
};

type Product = {
  product_name: string;
  elevator_pitch: string;
  target_users: string[];
  core_features: string[];
  tech_stack: string[];
  success_metrics: string[];
};

type GenesisResponse = {
  idea: string;
  research: Research;
  product: Product;
};

export default function Home() {
  const [idea, setIdea] = useState("");
  const [response, setResponse] = useState<GenesisResponse | null>(null);

  async function generateIdea() {
    const res = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idea,
      }),
    });

    const data = await res.json();
    setResponse(data);
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Genesis AI
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "35px",
        }}
      >
        Multi-Agent Startup Builder
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <input
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter your startup idea..."
          style={{
            flex: 1,
            padding: "14px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={generateIdea}
          style={{
            padding: "14px 22px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#111827",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Generate
        </button>
      </div>

      {response && (
        <>
          {/* IDEA */}

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <h2>Idea</h2>
            <p>{response.idea}</p>
          </div>

          {/* RESEARCH */}

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <h2>Research ✔</h2>

            <p>
              <strong>Problem Summary</strong>
            </p>

            <p>{response.research.problem_summary}</p>

            <br />

            <p>
              <strong>Market Gap</strong>
            </p>

            <p>{response.research.market_gap}</p>

            <br />

            <p>
              <strong>Target Users</strong>
            </p>

            <ul>
              {response.research.target_users.map(
                (user: string, index: number) => (
                  <li key={index}>{user}</li>
                )
              )}
            </ul>

            <br />

            <p>
              <strong>Competitors</strong>
            </p>

            <ul>
              {response.research.competitors.map(
                (competitor: string, index: number) => (
                  <li key={index}>{competitor}</li>
                )
              )}
            </ul>

            <br />

            <p>
              <strong>MVP Features</strong>
            </p>

            <ul>
              {response.research.mvp_features.map(
                (feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
          </div>

          {/* PRODUCT */}

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <h2>Product Manager ✔</h2>

            <p>
              <strong>Product Name</strong>
            </p>

            <p>{response.product.product_name}</p>

            <br />

            <p>
              <strong>Elevator Pitch</strong>
            </p>

            <p>{response.product.elevator_pitch}</p>

            <br />

            <p>
              <strong>Target Users</strong>
            </p>

            <ul>
              {response.product.target_users.map(
                (user: string, index: number) => (
                  <li key={index}>{user}</li>
                )
              )}
            </ul>

            <br />

            <p>
              <strong>Core Features</strong>
            </p>

            <ul>
              {response.product.core_features.map(
                (feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>

            <br />

            <p>
              <strong>Tech Stack</strong>
            </p>

            <ul>
              {response.product.tech_stack.map(
                (tech: string, index: number) => (
                  <li key={index}>{tech}</li>
                )
              )}
            </ul>

            <br />

            <p>
              <strong>Success Metrics</strong>
            </p>

            <ul>
              {response.product.success_metrics.map(
                (metric: string, index: number) => (
                  <li key={index}>{metric}</li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}