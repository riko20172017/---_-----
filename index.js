import { readFile, writeFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('./respons.json', import.meta.url)
  )
);

let students = [];

json.map((i, y) => {
  i.data.map((j, x) => {
    j.pupilProfile.pupilRoles.map((p) => {
      students.push({
        "id": j.id,
        "фамилия": j.principal.nameFamily,
        "имя": j.principal.nameGiven,
        "отчество": j.principal.nameMiddle,
        "группа": p.hasOwnProperty("eduGroup") ? p.eduGroup.name : "no-group",
        "status": p.status,
        "isDeleted": p.isDeleted,
      })
    })
  }
  )
})

try {
  await writeFile('result.txt', JSON.stringify(students));
} catch (err) {
  console.log(err);
}