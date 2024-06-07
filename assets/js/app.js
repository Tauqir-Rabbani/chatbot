const open_chat = document.getElementById("open_chat");
const chat_box = document.getElementsByClassName("chat_box")[0];
const close_chat = document.getElementById("close-chat");
const send_btn = document.getElementsByClassName("send-btn")[0];
let input_filed = document.getElementsByClassName("input-field")[0];
const chat_area = document.getElementById("chat-content");

open_chat.addEventListener("click", () => {
  chat_box.classList.add("show-chat");
  // open_chat.classList.add("d-none");
  close_chat.addEventListener("click", () => {
    chat_box.classList.remove("show-chat");
    // open_chat.classList.remove("d-none");
  });
});

function inpVal(event = null, statues) {
  if (event.key === "Enter" && statues == "yes" && input_filed.value != "") {
    chat_area.innerText = input_filed.value;
    chat(input_filed.value.trim().toLowerCase());
    input_filed.value = "";
  } else if (statues == "no" && input_filed.value != "") {
    chat(input_filed.value.trim().toLowerCase());
    input_filed.value = "";
  }
}

function chat(inp) {
  switch (inp) {
    case "hey":
      console.log("hello");
      break;

    default:
      console.log("I don't understand this");
      break;
  }
}

let val = "Hi, this is our virtual assistant! Tell us how we can help.";

async function testing_01(index = 0, inp) {
  await new Promise((resolve) => {
    setTimeout(() => {
      if (index < inp.length) {
        tested.innerHTML += inp[index];
        testing_01(index + 1, inp).then(resolve);
      } else {
        resolve();
      }
    }, 50);
  });
}

testing_01(0, val).then(() => console.log("done"));

function bot() {
  var currentdate = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let elements = `
        <div class="mb-4">
            <div class="d-flex justify-content-start">
                <small class="text-capitalize fst-italic text-secondary xs-small">AI Assistant at ${ currentdate.getHours() +":"+ currentdate.getMinutes() +', '+ months[currentdate.getMonth()]+' '+currentdate.getDate()}:</small>
            </div>
            <div class="p-3 rounded-top-4 rounded-end-4 w-100 dialog border" id="tested">
                
            </div>
        </div>
    `;
}
