import {Terminal} from "../src/Terminal";
let term  = new Terminal();

term.onWrite = (data) => {
  console.log(JSON.stringify(data), data.length, data[0].length);
};

term.listenInputs(true);