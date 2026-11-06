/*
  GitHub Pages answers unknown addresses with 404.html. It loads the same application,
  which shows its error screen, with head tags and a heading that describe that page.
*/
import fs from "node:fs";

const page = fs.readFileSync(new URL("../build/index.html", import.meta.url), "utf8");
const html = page
  .replace(/<title>.*?<\/title>/, "<title>Page Not Found | Windows 10 Simulator</title>")
  .replace(/<meta name="description"[^>]*>/, '<meta name="description" content="This address does not exist on the Windows 10 Simulator."/>')
  .replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex"/>')
  .replace(/<meta property="og:[^>]*>/g, "")
  .replace(/<meta name="twitter:[^>]*>/g, "")
  .replace(/<script type="application\/ld\+json">.*?<\/script>/, "")
  .replace(/<div class="boot-screen">[\s\S]*?<\/div>/, "")
  .replace(/(<h1[^>]*>).*?<\/h1>/, "$1Page not found</h1>");
fs.writeFileSync(new URL("../build/404.html", import.meta.url), html);
