export const blogPosts = [
   {
      id: 1,
      slug: "reverse-engineering-ran-online-to-csharp-ranmono",
      title: "Reverse Engineering Ran Online and Porting a Legacy C++ Game Engine to C# (RanMono)",
      excerpt: "Porting a legacy MMORPG isn't just rewriting code - it's understanding an entire engine from the inside out. Here's how I reverse engineered Ran Online and attempted to rebuild it in C#.",
      content: `
  <p>Most developers avoid legacy game engines. I went the opposite direction - I took a large C++ DirectX 9 MMORPG (Ran Online) and started porting it into C# using MonoGame.</p>

  <p>This wasn't just a rewrite. It was an experiment in reverse engineering, performance, and understanding how an entire game engine works under the hood.</p>

  <h2>How It Started</h2>
  <p>I originally documented part of this journey in a forum post:</p>

  <blockquote>
    <p>
      "Last year, I was having fun with Ran Online development and attempted to convert the game into C# to make it cross-platform - targeting both mobile and desktop environments."
    </p>
  </blockquote>

  <p>The goal was simple: take a legacy MMORPG and modernize it.</p>

  <h2>Understanding the Original Engine</h2>
  <p>Ran Online is built on a DirectX 9 fixed-function pipeline with tightly coupled systems and minimal abstraction.</p>

  <p>Some immediate observations:</p>
  <ul>
    <li>Left-handed coordinate system</li>
    <li>Heavy reliance on render states</li>
    <li>Large, messy, and tightly coupled codebase</li>
    <li>Noticeable performance inefficiencies</li>
  </ul>

  <p>There is no documentation. Reverse engineering was the only way forward.</p>

  <h2>Reverse Engineering File Formats</h2>
  <p>The engine relies on custom binary formats like <code>.chf</code>, <code>.cps</code>, and <code>.vps</code>.</p>

  <p>To understand them, I had to:</p>
  <ul>
    <li>Parse raw binary structures manually</li>
    <li>Identify headers, offsets, and data layouts</li>
    <li>Reconstruct mesh, animation, and effect data</li>
    <li>Validate everything visually through rendering</li>
  </ul>

  <h2>Rebuilding in C# with MonoGame</h2>
  <p>The idea was to move everything into a managed environment using C# and MonoGame.</p>

  <p>This required translating DirectX 9 behavior into a shader-based pipeline:</p>

  <pre><code>device->SetRenderState(D3DRS_ZWRITEENABLE, TRUE);
 device->SetTextureStageState(0, D3DTSS_COLOROP, D3DTOP_MODULATE);</code></pre>

  <p>In MonoGame, these had to be recreated manually through shaders and custom abstractions.</p>

  <h2>What I Managed to Port</h2>
  <p>Despite the challenges, I was able to get several core systems working:</p>

  <ul>
    <li>Effects system (including particle-based effects)</li>
    <li>Frame structures</li>
    <li>Mesh rendering</li>
    <li>Animations</li>
    <li>Large portions of effect and mesh pipelines</li>
    <li>Terrain system (~50% complete, with coordinate issues)</li>
  </ul>

  <h2>Major Challenges</h2>
  <p>Some of the biggest technical issues I encountered:</p>

  <ul>
    <li>Mismatch between left-handed and right-handed coordinate systems</li>
    <li>Particle system complexity and poor structure</li>
    <li>Hidden dependencies across engine subsystems</li>
    <li>Difficulty replicating fixed-function pipeline behavior</li>
  </ul>

  <h2>Reality Check</h2>
  <p>At some point, I had to step back and evaluate the project realistically.</p>

  <blockquote>
    <p>
      "While converting the code, I realized the original source was not well structured. Continuing the port would likely consume significant time for limited return."
    </p>
  </blockquote>

  <p>I decided to pause the project - not because it failed, but because the cost of continuing outweighed the benefit at that stage.</p>

  <h2>Video Preview</h2>
  <p>Here's a preview of the progress from the original post:</p>

  <p>
    <a href="https://forum.ragezone.com/threads/ran-online-c.1239671/" target="_blank">
      View demo and original forum post
    </a>
  </p>

  <h2>Key Takeaways</h2>
  <ul>
    <li>Legacy engines require understanding, not just translation</li>
    <li>Coordinate systems can break entire rendering pipelines</li>
    <li>Reverse engineering teaches more than documentation ever could</li>
    <li>Not all projects are worth finishing - and that's okay</li>
  </ul>

  <h2>Final Thoughts</h2>
  <p>This project pushed me deep into graphics programming, reverse engineering, and system-level thinking.</p>

  <p>Even though it's unfinished, it remains one of the most technically valuable things I've worked on.</p>

  <p>RanMono isn't just a port - it's a learning experience in understanding how complex systems are built, broken, and rebuilt.</p>
  `,
      date: "2026-04-15",
      readTime: 11,
      category: "Game Development",
      tags: ["C++", "C#", "MonoGame", "DirectX", "Reverse Engineering", "Game Engine"],
   },
   {
      id: 2,
      slug: "reverse-engineering-ninja-kaizen-fastbot",
      title: "Reverse Engineering Ninja Kaizen: Breaking Encryption and Building a High-Speed Bot",
      excerpt: "What started as nostalgia turned into a full reverse engineering challenge - decrypting Unity-based HTTP traffic and building a bot faster than the official client.",
      content: `
  <p>It started with nostalgia.</p>

  <p>A friend told me about a game called <strong>Ninja Kaizen</strong> - a clone of the classic Ninja Saga, one of the very first games I ever played on a computer.</p>

  <p>I tried it. And almost instantly, it felt familiar.</p>

  <p>But after a few days of playing, something stood out.</p>

  <h2>The Discovery</h2>
  <p>While interacting with the community, I noticed a pattern - many players were using bots, especially for clan wars.</p>

  <p>That immediately triggered something in me.</p>

  <p>I used to build cheats and experiment with reverse engineering when I was younger. That curiosity never really left - it just evolved.</p>

  <p>So instead of using existing tools, I decided to reverse engineer the game myself.</p>

  <h2>Breaking Into the Game</h2>
  <p>The first step was dumping the game process.</p>

  <p>I used Process Hacker and Cheat Engine to inspect the running application and trace execution flow.</p>

  <figure>
    <img src="/blog/ninjakaizen/cheatengine.png" alt="Memory analysis using Cheat Engine" />
    <figcaption>Tracing memory and breakpoints using Cheat Engine</figcaption>
  </figure>

  <p>Then I moved into static analysis using dnSpy and IDA.</p>

  <figure>
    <img src="/blog/ninjakaizen/dnspy.png" alt="dnSpy decompiled Unity code" />
    <figcaption>Decompiled Unity assemblies revealing encryption-related code</figcaption>
  </figure>

  <p>Very quickly, I discovered something important:</p>

  <ul>
    <li>The game is built using Unity</li>
  </ul>

  <p>Unity-based games are generally easier to analyze because much of the logic can be decompiled into readable C# code.</p>

  <h2>No Packets - Just HTTP</h2>
  <p>Digging deeper, I noticed the game wasn't using traditional game packets.</p>

  <p>Instead, it relied entirely on HTTP requests for client-server communication.</p>

  <p>At first, that sounded too easy.</p>

  <p>Until I opened Charles Proxy.</p>

  <figure>
    <img src="/blog/ninjakaizen/charles.png" alt="Charles Proxy HTTP request capture" />
    <figcaption>Captured HTTP requests - payloads were visible but encrypted</figcaption>
  </figure>

  <p>The requests were there - but the payloads were encrypted.</p>

  <h2>The Real Challenge: Encryption</h2>
  <p>This is where the real reverse engineering began.</p>

  <p>I needed to understand how the game encrypts and decrypts its data.</p>

  <p>The process wasn't straightforward:</p>

  <ul>
    <li>Hooking into the game using Cheat Engine</li>
    <li>Tracing HTTP request generation</li>
    <li>Setting breakpoints on encryption routines</li>
    <li>Analyzing memory and function calls</li>
    <li>Repeating the process… over and over</li>
  </ul>

  <p>It took multiple attempts, failed assumptions, and a lot of patience.</p>

  <p>But eventually - everything clicked.</p>

  <h2>Extracting the Key</h2>
  <p>After days of analysis, I was able to identify how the encryption worked - and extract the key used internally by the game.</p>

  <p>That changed everything.</p>

  <p>Once you can replicate the encryption and decryption process, you are no longer limited by the game client.</p>

  <h2>Building the Bot</h2>
  <p>With full control over requests, I built a high-speed bot that communicates directly with the server.</p>

  <p>No rendering. No UI. No delays.</p>

  <p>Just pure requests.</p>

  <p>This made the bot significantly faster and more efficient than traditional client-based automation.</p>

  <h2>The Result</h2>
  <p>The final result was a working bot capable of performing actions far more efficiently than the official client.</p>

  <p>What felt like a simple idea turned into a deep dive into:</p>

  <ul>
    <li>Unity reverse engineering</li>
    <li>Memory analysis</li>
    <li>Encryption and decryption logic</li>
    <li>Client-server architecture</li>
  </ul>

  <h2>Source Code</h2>
  <p>You can check out the project here:</p>

  <p>
    <a href="https://github.com/jhemmmm/FASTBOT" target="_blank">
      FASTBOT GitHub Repository
    </a>
  </p>

  <h2>Final Thoughts</h2>
  <p>I might have explained this process simply - but in reality, it was anything but easy.</p>

  <p>Reverse engineering isn't about tools. It's about persistence.</p>

  <p>Understanding systems that were never meant to be understood.</p>

  <p>Breaking things down, rebuilding them in your head, and eventually… making them work your way.</p>

  <p>This project reminded me why I started programming in the first place.</p>

  <p><strong>Curiosity.</strong></p>
  `,
      date: "2026-04-15",
      readTime: 10,
      category: "Reverse Engineering",
      tags: ["Reverse Engineering", "Unity", "C#", "Cheat Engine", "HTTP", "Automation"],
   },
];
