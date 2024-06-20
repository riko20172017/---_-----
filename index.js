const fs = require("fs");

fs.readFile("text.txt", 'utf8', function (error, data) {
  if (error) {  // если возникла ошибка
    return console.log(error);
  }

  let json = JSON.parse(data.toString()
    .replace(/}{/g, "},{"));

  let students = "";

  json.map((i, y) => {
    i.data.map((j, x) => {
      j.pupilProfile.pupilRoles.map((p) => {
        // students.push({
        //   "id": j.id, "фамилия": j.principal.nameFamily, "имя": j.principal.nameGiven, "отчество": j.principal.nameMiddle, "группа": p.hasOwnProperty("eduGroup") ? p.eduGroup.name : "no-group", "status": p.status, "isDeleted": p.isDeleted })
        students += `${j.id},${j.principal.nameFamily},${j.principal.nameGiven},${j.principal.nameMiddle},${p.hasOwnProperty("eduGroup") ? p.eduGroup.name : "no-group"},${p.status},${p.isDeleted}\n`
      })
    }
    )
  })

  fs.writeFile("json.csv", students, 'utf8', function (error) {
    if (error) {  // если ошибка
      return console.log(error);
    }
    console.log("Файл успешно записан");
  });
});

