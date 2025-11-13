import pkg from "../package.json" with { type: "json" };

const { sha } = await fetch(
  "https://api.github.com/repos/Effect-TS/effect-smol/commits/main",
).then((res) => res.json() as Promise<{ sha: string }>);

for (const type of [
  "dependencies",
  "peerDependencies",
  "devDependencies",
] as const) {
  for (const name in pkg[type]) {
    if (name === "@effect/platform") {
      delete pkg[type][name];
    } else if (name.includes("effect") && name !== "@effect/language-service") {
      pkg[type][name] =
        `https://pkg.pr.new/Effect-TS/effect-smol/${name}@${sha.slice(0, 7)}`;
    }
  }
}

await Bun.write("package.json", JSON.stringify(pkg, null, 2));
