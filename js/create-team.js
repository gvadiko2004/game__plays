// BUTTON CREATE TEAM

// const buttonTeamCreate = document.querySelector(".btnInner-team");

// if (buttonTeamCreate.innerText == "Створити команди") {
//   const btnElement = buttonTeamCreate.closest(".btn");

//   if (btnElement) {
//     btnElement.href = "index.html";
//   }
// }

// BUTTON DELETE

const bodyGame = document.querySelector(".body-game-bg");
const teamBlocksListUser = document.querySelectorAll(".team-blocks_list-user");
const confirmPanel = document.querySelector(".confirm-panel");
const confirmPanelButtonsYes = document.querySelectorAll(".yes");
const confirmPanelButtonsNo = document.querySelectorAll(".no");

teamBlocksListUser.forEach(function (block) {
  const basket = block.querySelector(".team-blocks_list-cap");

  if (basket.innerText === "Капітан") {
    basket.style.pointerEvents = "none";
  }

  basket.addEventListener("click", function () {
    confirmPanel.classList.add("active");
    bodyGame.classList.add("active");
  });
});

confirmPanelButtonsNo.forEach(function (button) {
  button.addEventListener("click", function () {
    confirmPanel.classList.remove("active");
    bodyGame.classList.remove("active");
  });
});

bodyGame.addEventListener("click", function () {
  bodyGame.classList.remove("active");
  confirmPanel.classList.remove("active");
});
