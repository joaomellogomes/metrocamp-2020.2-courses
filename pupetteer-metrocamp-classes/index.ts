import * as puppeteer from "puppeteer";
import * as fs from "fs";

const pageURL =
  "https://www.wyden.com.br/unimetrocamp/disciplinas-20202?utm_campaign=Divulga%C3%A7%C3%A3o+das+Disciplinas+2020.2+%7C+UniMetrocamp&utm_content=Disciplinas+2020.2+%7C+UniMetrocamp+%7C+Wyden+%281%29&utm_medium=email&utm_source=EmailMarketing&utm_term=Divulga%C3%A7%C3%A3o+das+Disciplinas+2020.2+%7C+UniMetrocamp";

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(pageURL);

  const courses = await page.evaluate(() => {
    const tables = document.querySelectorAll(
      ".field-items > .field-item.even > .table.table-condensed.table-hover.table-striped"
    );

    const courses = Array.from(tables).map((course, index, arr) => {
      const nameNode = course.querySelector(
        course.tHead
          ? "thead > tr > th:nth-child(3)"
          : "tbody > tr:first-child > td > strong"
      );

      console.log("course.tHead", course.tHead);

      const lessons = Array.from(
        course.querySelectorAll(
          "tbody > tr:not(:first-child):not(:nth-child(2))"
        )
      ).map((lesson) => {
        const getDisciplineField = (child) =>
          lesson.querySelector(`td:nth-child(${child})`).textContent.trim();

        const newClass = {
          period: getDisciplineField(1),
          weekday: getDisciplineField(2),
          name: getDisciplineField(3),
          teacher: getDisciplineField(4),
          zoomRoomURL: getDisciplineField(5),
        };

        return newClass;
      });

      if (!nameNode) console.log("array mano", arr[index]);

      return {
        name: nameNode.textContent.trim(),
        lessons,
      };
    });

    return courses;
  });

  fs.writeFile(
    "./files/courses.json",
    JSON.stringify(courses, null, 2),
    (error) => {
      if (error) throw new Error("Something went wrong");

      console.log("DONE");
    }
  );

  // await browser.close();
})();
