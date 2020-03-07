let requestURL = require("./data.json");
let lodash = require("lodash");

function searchQuery(query, times) {
  let result = mydata.filter(m => {
    return m.summary.toUpperCase().search(query.toUpperCase()) >= 0;
  });
  return lodash.slice(result, 0, times);
}
