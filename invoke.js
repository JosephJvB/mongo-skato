const axios = require("axios");

const url =
  "https://hd2panaj52t5tkzds6brxojqdy0lrfqs.lambda-url.eu-west-2.on.aws/";

// Promise.all(
//   [1, 2, 3].map(() =>
//     axios({
//       method: "get",
//       url,
//     })
//   )
// ).then((r) => {
//   console.log("done");
//   console.log(r.map((i) => i.data));
// });

void (async function () {
  for (let i = 0; i < 3; i++) {
    const r = await axios({
      method: "get",
      url,
    });
    console.log(r.data);
  }
})();
