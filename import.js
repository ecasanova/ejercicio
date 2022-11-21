const csvtojson = require("csvtojson");

let data = csvtojson()
  .fromFile("input.csv")
  .then(async (data) => {
    let parsed = data.reduce((m, o) => {
      let found = m.find(
        (p) =>
          p.name === o.name &&
          p.lastname === o.lastname &&
          p.position === o.position &&
          p.date === o.date
      );
      if (found) {
        found.technology += ", " + o.technology;
      } else {
        m.push(o);
      }
      return m;
    }, []);
    let returned = parsed.map((item) => {
      return {
        name: item.name,
        lastname: item.lastname,
        position: item.position,
        fav_tech: item.technology,
        age: calculateAge(item.date),
      };
    });
    console.log(returned);
  });

function calculateAge(dob_provided) {
  let dob = new Date(dob_provided);
  let diff_ms = dob.getTime() - Date.now();
  let age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
