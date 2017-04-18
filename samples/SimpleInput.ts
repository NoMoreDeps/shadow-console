import {PTerminal} from "../src/PTerminal";
let term  = new PTerminal(true);

term.onWrite = (data) => {
  console.log(JSON.stringify(data), data.length, data[0].length);
};

term.listenInputs(true);