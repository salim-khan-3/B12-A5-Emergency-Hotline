const services = [
  {
    name: "National Emergency Number",
    serviceType: "National Emergency",
    number: "999",
    category: "All",
    icon: "./assets/emergency.png",
  },
  {
    name: "Police Helpline Number",
    serviceType: "Police",
    number: "999",
    category: "Police",
    icon: "./assets/police.png",
  },
  {
    name: "Fire Service Number",
    serviceType: "Fire Service",
    number: "999",
    category: "Fire",
    icon: "./assets/fire-service.png",
  },
  {
    name: "Ambulance Service",
    serviceType: "Ambulance",
    number: "1994-999999",
    category: "Health",
    icon: "./assets/ambulance.png",
  },
  {
    name: "Women & Child Helpline",
    serviceType: "Women & Child Helpline",
    number: "109",
    category: "Help",
    icon: "./assets/emergency.png",
  },
  {
    name: "Anti-Corruption Helpline",
    serviceType: "Anti-Corruption",
    number: "106",
    category: "Govt.",
    icon: "./assets/emergency.png",
  },
  {
    name: "Electricity Helpline",
    serviceType: "Electricity Outage",
    number: "16216",
    category: "Electricity",
    icon: "./assets/emergency.png",
  },
  {
    name: "Brac Helpline",
    serviceType: "Brac",
    number: "16445",
    category: "NGO",
    icon: "./assets/brac.png",
  },
  {
    name: "Bangladesh Railway Helpline",
    serviceType: "Bangladesh Railway",
    number: "163",
    category: "Travel",
    icon: "./assets/Bangladesh-Railway.png",
  },
];

const cardContainer = document.getElementById("card-container");
let index = 0;

for (const service of services) {
  const card = document.createElement("div");
  card.classList = "bg-base-100 w-full shadow-xl p-8 rounded-[12px]";

  const iconBgColor = index === 1 ? "bg-[#D1E8FF]" : "bg-[#FFE3E2]";

  card.innerHTML = `
  <div class="flex justify-between items-center">
                <div class="p-[14px] ${iconBgColor}  rounded-[16px]">
                  <img
                    class="w-8 h-8"
                    src="${service.icon}"
                    alt=""
                  />
                </div>
                <div class="text-2xl heart-button cursor-pointer p-1 hover:bg-[#e7dede] hover:text-[#000] rounded-full">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div class="card-body p-0 gap-0">
                <div>
                  <h2 class="card-title font-bold text-2xl mt-4">
                    ${service.name}
                  </h2>
                  <p class="text-xl text-[#5C5C5C] mt-1">${service.serviceType}</p>
                </div>
                <div class="my-6">
                  <p class="text-[32px] font-bold text-[#111111] service-number">${service.number}</p>
                  <p
                    class="bg-[#F2F2F2] badge px-4 py-4 rounded-full mt-1"
                    >${service.category}</p
                  >
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-neutral copy-btn btn-outline text-[#5C5C5C] cursor-pointer text-[16px] border-[#5C5C5C] flex items-center py-4 flex-1 rounded-[8px] hover:text-[#fff]">
                    <i class="fa-regular fa-copy"></i><span>Copy</span>
                  </button>
                  <button class="btn call-btn bg-[#00A63E] text-[#fff] cursor-pointer text-[16px] rounded-[8px] py-4 flex items-center flex-1">
                    <i class="fa-solid fa-phone"></i><span>Call</span>
                  </button>
                </div>
              </div>
  `;

  cardContainer.appendChild(card);
  index++;
}

let heartCounter = 0;
let copyCounter = 0;
let coinCounter = 100;

const heartCount = document.getElementById("heartCount");
const heartButton = document.querySelectorAll(".heart-button");

const copyCountUpdate = document.getElementById("copyCount");
const copyBtn = document.querySelectorAll(".copy-btn");

const callBtn = document.querySelectorAll(".call-btn");
const coinCountElement = document.getElementById("coinCount");

const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");

for (const heartBtn of heartButton) {
  heartBtn.addEventListener("click", function () {
    heartCounter++;
    heartCount.innerText = heartCounter;
  });
}

//! copy emergency number and copyCounter
for (const btn of copyBtn) {
  btn.addEventListener("click", function (e) {
    const card = e.target.parentNode.parentNode.parentNode;
    const number = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(number);

    alert("Number copied: " + number);

    copyCounter++;
    copyCountUpdate.innerText = copyCounter;
  });
}

//! call button functionality
for (const btn of callBtn) {
  btn.addEventListener("click", function (e) {
    const card = e.target.parentNode.parentNode.parentNode;
    const serviceName = card.querySelector(".card-title").innerText;
    const number = card.querySelector(".service-number").innerText;

    if (coinCounter < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coinCounter -= 20;
    coinCountElement.innerText = coinCounter;

    const now = new Date();
    const currentTime = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
    });

    alert(`📞 Calling ${serviceName} at ${number}`);

    const li = document.createElement("li");
    li.classList =
      "flex bg-[#FAFAFA] p-4 rounded-lg items-center justify-between gap-4 mb-2";

    li.innerHTML = `
                <div>
                  <h4 class="text-lg font-semibold text-[#111111]">
                    ${serviceName}
                  </h4>
                  <p class="text-[#5C5C5C] text-lg mt-1">${number}</p>
                </div>
                <div>
                  <p class="text-[#111111] text-lg">${currentTime}</p>
                </div>
     `;

    historyList.appendChild(li);
  });
}

clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
