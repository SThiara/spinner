const toPrint = ["|", "/", "-", "\\"];

let timer = 100;
while (timer < 2000) {
  for (let line of toPrint) {
    setTimeout(() => {
      process.stdout.write(`\r${line}    `);
    }, timer);
    timer += 200;
  }
}
setTimeout(() => {
  process.stdout.write(`\n`);
}, timer);