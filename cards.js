const projectCardInfo = [
  {
    cardTitle: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["Html", "Css", "Javascript"],
    cardImg: "./assets/desktop_images/Snapshoot Portfolio.png",
    cardCannopy: "FACEBOOK",
    cardJob: "Full Stack Dev",
    goLive: "#",
    sourceLink: "#",
  },
  {
    cardTitle: "Facebook 360",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    technologies: ["HTML", "Ruby on rails", "Javascript", "CSS"],
    cardImg: "./assets/snapshoot-portfolio1.png",
    cardCannopy: "FACEBOOK",
    cardJob: "Full Stack Dev",
    goLive: "#",
    sourceLink: "#",
  },
  {
    cardTitle: "Uber Navigation",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    technologies: ["HTML", "CSS", "Javascript"],
    cardImg: "./assets/snapshoot-portfolio2.png",
    cardCannopy: "CANOPY",
    cardJob: "Back End Dev",
    goLive: "#",
    sourceLink: "#",
  },
  {
    cardTitle: "Multi-Post Stories",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    technologies: ["HTML", "Ruby on rails", "Javascript", "CSS"],
    cardImg: "./assets/snapshoot-portfolio4.png",
    cardCannopy: "Uber",
    cardJob: "Lead Developer",
    goLive: "#",
    sourceLink: "#",
  },
];

const cardProject = document.querySelector(".works");
let index = 0;
projectCardInfo.forEach((project) => {
  cardProject.innerHTML += `
          <div class="create-flex work-card">
            <img src="${
              project.cardImg
            }" class="work-img" alt="Portfolio Image">
            <div class="work-card-context">
              <h2 class="card-title">${project.cardTitle}</h2>
              <div class="make-grid work-categories">
                
                  
                <p class="canopy grid-item">${project.cardCannopy}</p>
             
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${project.cardJob}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">2015</p>
              </div>
              <p class="card-description">Exploring the future of media in Facebook's first Virtual Reality app;
                 a place to discover and enjoy 360 photos and videos on Gear VR.</p>
          
                <ul class="card-languages">
                    ${project.technologies
                      .map(
                        (lang) =>
                          `<li class="language-bg card-language">${lang}</li>`
                      )
                      .join("")} 
                </ul>
            
              <button onClick="PopUpModalShowHide(${index})" class="default_about_button btn">See Project</button>
            </div>
          </div>`;
  index += 1;
});

const cards = document.querySelectorAll(".work-card");
for (let i = 0; i < cards.length; i += 1) {
  if (i % 2 === 1) {
    cards[i].classList.add("reversed");
  }
}
