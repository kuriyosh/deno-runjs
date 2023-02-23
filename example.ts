console.log("Hello console.log");
console.error("Boom!");

interface Foo {
  bar: string;
  fizz: number;
}

// @ts-expect-error run js is not defined
let content: string = await runjs.fetch(
  "https://deno.land/std@0.177.0/examples/welcome.ts"
);

console.log("Content from fetch", content);

/* const path = "./log.txt";

try {
  contents = await runjs.readFile(path);
  console.log("Read from a file", contents);
} catch (err) {
  console.error("Unable to read file", path, err);
}

await runjs.writeFile(path, "I can write to file.");
const contents = await runjs.readFile(path);
console.log("Read from a file", contents);
runjs.removeFile(path);
console.log("File removed"); */
