import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('./respons.json', import.meta.url)
  )
);

let groups = [];

json.map((i) =>
  i.data.map((j) =>
    groups.push({
      nameFamily: j.principal.nameFamily,
      nameGiven: j.principal.nameGiven,
      nameMiddle: j.principal.nameMiddle,
    })
  )
)

console.log(groups);