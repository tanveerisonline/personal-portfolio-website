const popUpModals = [
  {
    cardTitle: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    technologies: ["Html", "Css", "Javascript"],
    cardImg: "./assets/desktop_images/Snapshoot Portfolio.png",
    cardCannopy: "FACEBOOK",
    cardJob: "Full Stack Dev",
    since: "2015",
  },
  {
    cardTitle: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    technologies: ["HTML", "Ruby on rails", "Javascript", "CSS"],
    cardImg: "./assets/snapshoot-portfolio1.png",
    cardCannopy: "FACEBOOK",
    cardJob: "Full Stack Dev",
    since: "2015",
  },
  {
    cardTitle: "Uber Navigation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    technologies: ["HTML", "CSS", "Javascript"],
    cardImg: "./assets/snapshoot-portfolio2.png",
    cardCannopy: "CANOPY",
    cardJob: "Back End Dev",
    since: "2015",
  },
  {
    cardTitle: "Multi-Posts",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    technologies: ["HTML", "Ruby on rails", "Javascript", "CSS"],
    cardImg: "./assets/snapshoot-portfolio4.png",
    cardCannopy: "Uber",
    cardJob: "Lead Developer",
    since: "2015",
  },
];

const popUpModalSection = document.querySelector(".works");
for (let i = 0; i < popUpModals.length; i += 1) {
  popUpModalSection.innerHTML += `
          <div class="popup-modal ">
              
          </div>
          <div class="popup-modal-bg ">
              <h2 class="card-title modal-title">${
                popUpModals[i].cardTitle
              }</h2>
              <i class="fa-solid fa-xmark popup-modal-close"></i>

              <div class="make-grid work-categories">
                <p class="canopy grid-item">${popUpModals[i].cardCannopy}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${popUpModals[i].cardJob}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${popUpModals[i].since}</p>
              </div>
              
              <img src="${
                popUpModals[i].cardImg
              }" class="work-img popup-modal-img" alt="Portfolio Image">
              <div class="create-flex popup-modal-structure">
                <p class="card-description popup-modal-desc">${
                  popUpModals[i].description
                }</p>
                <div>
                  <ul class="card-languages popup-modal-languages">
                  ${popUpModals[i].technologies
                    .map(
                      (lang) =>
                        `<li class="language-bg card-language">${lang}</li>`
                    )
                    .join("")}
                  </ul>

                  <div class="popup-modal-line"></div>

                  <div class="popup-modal-btn-group">
                    <button onClick="" class="default_about_button btn popup-modal-btn">See Live <i class="fa-sharp fa-solid fa-earth-americas"></i></button>
                    <button onClick="" class="default_about_button btn popup-modal-btn">See Source <i class="fa-brands fa-github"></i></button>
                  </div>
                </div>
              </div>
            </div>`;
}

const modal = document.querySelectorAll(".popup-modal");

function PopUpModalShowHide(modelIndex) {
  if (modelIndex >= 0) {
    document.querySelectorAll(".popup-modal")[modelIndex].style.display =
      "block";
    document.querySelectorAll(".popup-modal-bg")[modelIndex].style.display =
      "flex";
    const modalClose =
      document.querySelectorAll(".popup-modal-close")[modelIndex];
    modalClose.addEventListener("click", () => {
      modal[modelIndex].style.display = "none";
      document.querySelectorAll(".popup-modal-bg")[modelIndex].style.display =
        "none";
    });
    window.addEventListener("click", (e) => {
      if (e.target === modal[modelIndex]) {
        modal[modelIndex].style.display = "none";
        document.querySelectorAll(".popup-modal-bg")[modelIndex].style.display =
          "none";
      }
    });
  } else {
    return 0;
  }
}
PopUpModalShowHide(-1);
