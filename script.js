const comm = document.querySelector(".btn");
const snd = document.querySelector(".send");
const ppt = document.querySelector(".ipt");
/*
const wrpper = comm.getBoundingClientRect();
const sendBtn = snd.getBoundingClientRect();
*/

snd.addEventListener("mouseover", () => {
  const btnWidth = 70;
  const btnHeight = 35;

  const brdWidth = 300;
  const brdHeight = 100;

  const maxWidth = brdWidth - btnWidth + 1;
  console.log(Math.floor(Math.random() * maxWidth));
  const maxHeight = brdHeight - btnHeight + 1;
  const emjj = document.querySelector(".emoji");
  emjj.innerHTML = "😜";
  snd.style.left = Math.floor(Math.random() * maxWidth) + "px";
  snd.style.top = Math.floor(Math.random() * maxHeight) + "px";
});

ppt.addEventListener("mouseover", () => {
  const emjj = document.querySelector(".emoji");
  emjj.innerHTML = "😁";
});
ppt.addEventListener("mouseout", () => {
  const emjj = document.querySelector(".emoji");
  emjj.innerHTML = "😔";
});

const url = `https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=1 Corinthians&chapter=13&VerseFrom=1&VerseTo=1`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ae10826708msh40f31552721012ap14484cjsn25aed37debd3",
    "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then(view);

function view(response) {
  console.log(response);
  let quote = document.querySelector(".qot");
  quote.innerHTML = response.Output;
}

let nxt = querySelector(".prev");
nxt.addEventListener("click", () => pr("hi")); /*{
  function nexxt() {
    alert("hi");
    let num = 1;

    const url = `https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=1 Corinthians&chapter=13&VerseFrom=${num}&VerseTo=${num}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ae10826708msh40f31552721012ap14484cjsn25aed37debd3",
        "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then(view);

    function view(response) {
      console.log(response);
      let quote = document.querySelector(".qot");
      quote.innerHTML = response.Output;
    }
  }
});
*/
