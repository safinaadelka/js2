const profile_parts = document.querySelectorAll(".profile_part");
const profile_links = document.querySelectorAll(".profile_nav_link");
console.log(profile_parts);
console.log(profile_links);



profile_links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    profile_links.forEach((link) => {
      link.classList.remove("active_profile_link");
      e.preventDefault();
    });
    link.classList.add("active_profile_link");
 
    profile_parts.forEach((body) => {
      body.classList.remove("profile_part_active");
    });

    profile_parts[index].classList.add("profile_part_active");
    e.preventDefault();
  });
});

const claim_links = document.querySelectorAll(".user_claim_nav_link");
const user_claims = document.querySelectorAll(".users_claims_cards");

claim_links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    claim_links.forEach((link) => {
      link.classList.remove("active_claim_link");
      e.preventDefault();
    });
    link.classList.add("active_claim_link");
    user_claims.forEach((body) => {
      body.classList.remove("user_claims_active");
    });
    user_claims[index].classList.add("user_claims_active");
  });
});