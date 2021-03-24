/* eslint-disable no-console */
const portfolio = (function () {
  function generateAboutMeHtml() {
    return `
    <div class="grid-2" id = "about_id">
    
    <div class="center">
    <i class="fa fa-laptop-code media-icon"></i>
    </div>
    <div>
    <h2>About Me</h2>
    <p>
      I am currently teaching myself how to code. I
      love coding because it’s invigorating to see your project come to life while
      overcoming and discovering each step to get to that point.
      <br />
      <br />I have a background in internal auditing for collections. I’m
      deliberate and resourceful with a strong track record in providing excellent
      work while under a strict time crunch. Tax season can be quite the overload.
      <br />
      <br />
      When I’m not coding, I like to spend my free time reviewing previous
      projects, computer gaming, reading, and engaging in various physical
      activities such as hiking, running, rock climbing, and weight lifting. I
      love to keep an active lifestyle.
    </p>
  </div>
  </div>
  `;
  }

  function generateProjectHtml() {
    return `
  <div class="center">
    <h2>Projects</h2>
  </div>
  <div class = "grid-2 center">
    <div id= 'bookmark' class = 'hover2'>
      <i class="fas fa-bookmark fa-3x"></i>
      <h3>Bookmark App</h3>
      <p class = 'left'>Simple web app for storing and maintaining various websites and details on an API. </p>
    </div>

    <div id= 'quiz' class = 'hover2'>
      <i class="fas fa-pen-square fa-3x"></i>
      <h3>Quiz App</h3>
      <p class = 'left'>Utilize Open Trivia DB to generate 5 random trivia questions for the user to answer</p>
    </div>
  </div>

  <div class="center">
  <h2>Websites</h2>
</div>

  <div class = "grid-3 center">
    
    <div id= 'munite' class = 'hover2 card'>
    <a href="https://geneggy.github.io/munite-pro/" target="_blank">
      <img src="https://lh3.googleusercontent.com/Xh-ts6r6qky56JiX82pHLtSRgYqRoked3C5NTMhAyKoXYRnDt7UcIXj55ORwk81WXyfba469kOZOddmmXNasnarMU6ttDBb9zGvXlYcZm5xIkyI6wraGFFPGcrrl-05L92OjuV75tsKRNrgeYcSKFGvJI7PRiQucZgX82huxKMO8X1rKWZY67nKx0XNqMOLzHp6mqpjBHWfbbw6vcfRxNcpWqZnuJeXFmeF8RUgakgkIdxT6j-CS7aK02G1PIZxwzTEbixC7pWuwjfk0b72Wk0T_WhFCVGliRco27VU725eCalC0g1sD4vYYpZYVFOPsJ-tLYKH9pjhdLGzssRkl8FfCU6lpdW-9AQGcWmDnGE-dJTr9Xnl3ZPTm6YCflg5_KA0tFEWBlGktFewShwutbGrfG__19Snz7uROLQjn-vkOKsiwrsiLlfL3yeU2dvv4iXkuh1zuDd6Vtgb-2ARUdX50HXcV7HRokMhFc0PmoqABaBr_vO70cgWpWBjGydt8qEgQ5ldVPXcAeK2M6I8a7ZX8aNq4Lz3kkDDRfgI0I-TEtQW-W1fGbVyGEldJbYuNaaoDQUzybaGqF5sCczZJX2cfReASgfyzuveaLQywqiHqmOkhoGqawzpiHeMahjckCcKxLyinjbgRDaLqQdI-LXJ84OWuGMRJiq_ZQja8FJdqR6oGlbKS_SvNXcXSKFpp2rZZhwXWxn04IderGRBeM8I=w316-h109-no?authuser=0" class="websiteimg" >
      <p class = 'left'>Live demo business website for a meat imports company</p>
      </a>
    </div>

    <div id= 'usa' class = 'hover2 card'>
    <a href="https://geneggy.github.io/web_project_3/" target="_blank">
    <img src="https://lh3.googleusercontent.com/S5Ry-y0rNAfhJhOVpIqifWZLP17CIm3EQr_DZnXd-K1NVfDHwhOl6u7R3exJ8tKXiymGi10L-OPOlRwrSGVlcPeOQw711xR3g7mGqM0GoMx1ycLleiaxGUuF6e_0KJpW93j7a5oEWcNvnTzdHrW_PxsquQN5u98cDwYbSdqwUAaVXmBwEXn-_NNf1oJZVLRNKuRGxSm95cBle_7NVUwrMhDTcX_uBgZNl9Py2LGPTkejY_ZZVuyetFJx65uwzBE86NXcpbY-JY0EYxnZzWBML1fQJJEF1RbCuNm61W-OwyFUbkVzzPm2VQ1B-TP9eSRAf7ws30vwLeUKSWxV6TwAu9sidpmmIyIiVrsNqjG5EDLxt5ICNbhlOLBqz_oJWoeB4j7aiKXIOkGiRcNlMZjpryLceQkJ1Ng6Sj_hTV1SKZ3sBjzNia2itH9Kx3M_JQhm_DmvFdwGSOJfxgf-Pm32UxLWO1aTulJ_scAwl70qQO647BYDf6BEBelrpjs4u0AEUoGgyGjknf_aNVORY6aZZd_Qu3efluRBs6AiCAMqHNUQKnYranlpY7VEsYzOTEazXmBmeNFX1oMigTLmXCQR4S5WypJHf_9Hspcs-RCIhQhLgU703ewfeXFU79ofAK1ff-vcdbVY-p45XIyaUFP1sGO19oDcDoNFcBvrlVEPck1Aigb61yNuXLoxXzViSXMebwDMAlMVLPf3n2cm8m4wEUw=w329-h116-no?authuser=0" class="websiteimg" >
      <p class = 'left'>Travel blog website aobut a bike journey from Portland, ME to Portland, OR with an image gallery.</p>
      </a>
    </div>

    <div id= 'ypracticum' class = 'hover2 card'>
    <a href="https://geneggy.github.io/web_project_1/" target="_blank">
    <img src="https://lh3.googleusercontent.com/_rJTDZg5Vl7k83aiezxwD7wFtuI3iP4hKQGSbdGZgR-1hdklOzeEj0tmty-vELh4TUr_zbGHmqiTcQHI6u1uBIbjSFzDJm10AIHSTRkKaYOOxYq8aJq7RTTy23XkwN0pxBd2hph5HCic6Iem6T9CV5ERiikxvjncabLeNCQDiSqpjZMiN3hGs_BYbpLGBqfOrkjBMwh1n3OhzJxFb-tlmCQAl7VPvsH_2rZlyLf6BEcxgbxxg20_DXmxvHyFC87ZekP75jJAJpIbAqSoSj69WHKM9ZLp0Vn6u9ZeSzaclhzuKniGlo2Xi1vkJHv1neBQi1-DcC6GqMaFjEnazDG3qTkRbF_fsgrKglJouCVkAA0oZ-vv9D02I4VILNWO_KPFr7P63R_-RTdSBwGpr-zYNT17uKT88FFq_LApESUe4DfSUSs0kaoJndwNiSal2kiAM6XRKCTbD2LViBZN0gB5bVN_55pTGd-M8SXr4cG8AYAQ5BoYDQBuADS6RhkRU4GtpT3Lp5fKlBwJnWNnazkP2ot5psL5Pgx2vHpwTqko1OvKOkWJOyd3UPzlc--_ZYs2IYACRukctn_yvJ0VtB0uCqSG-5WQa6eKZtrtl6ZChcfbwrt0kCrNAi9ZrLpr1oA8lwiflxEgE2AaVOB3IMMDw808OCi1D-iT0Cytov7LidiZ0juaECPlrmsA3g3diP9q5fl6CsEWA8qgu_J52BS5MSI=w318-h107-no?authuser=0" class="websiteimg" >
      <p class = 'left'>In website that compiles links and resources on how to learn</p>
    </div>
    </a>
  </div>
  `;
  }

  function generateSkillsHtml() {
    return `
    <div class="center">
    <i class="fas fa-sitemap media-icon"></i>
    <h2>Skills</h2>
    <ul>
      <li>JavaScript</li>
      <li>JQuery</li>
      <li>React</li>
      <li>HTML</li>
      <li>CSS</li>
      
    </ul>
    </div>
    `;
  }

  function generateContactHtml() {
    return `
    
    
    <div class="center">
    <i class="fa fa-id-card media-icon"></i>
    <h2>Eugene Gian</h2>
      <p>I'm currently residing in Los Angeles, California. 
      </br>Feel free to reach out to me on any of these accounts!</p>
      <a href="mailto:eugene.gian@outlook.com" target="_top"><i class="fa fa-envelope fa-2x small_icon"></i></a>

      <a href="https://github.com/geneggy"><i class="fab fa-github fa-2x small_icon"></i></a>

      <a href="https://www.linkedin.com/in/eugene-gian-792b5715a/"><i class="fab fa-linkedin fa-2x small_icon"></i></a>

    </div>

    
    `;
  }

  function handleAboutMe() {
    $("#about_me").click(function () {
      $("#main_container").html(generateAboutMeHtml());
      // $("html, body").animate({ scrollTop: $(document).height() }, "fast");
      console.log("aboutme button works");
    });
  }

  function handleProjects() {
    $("#projects").click(function () {
      $("#main_container").html(generateProjectHtml());
      // $("html, body").animate({ scrollTop: $(document).height() }, "fast");
      console.log("projects button works");
    });
  }

  function handleSkills() {
    $("#skills").click(function () {
      $("#main_container").html(generateSkillsHtml());
      // $("html, body").animate({ scrollTop: $(document).height() }, "fast");
      console.log("skills button works");
    });
  }

  function handleContact() {
    $("#contact_info").click(function () {
      $("#main_container").html(generateContactHtml());
      // $("html, body").animate({ scrollTop: $(document).height() }, "fast");
      console.log("contact button works");
    });
  }

  function generateBookmarkApp() {
    return `
    <div class="grid-2" id = "bookmarkexpand_id">
    <div class="center">
    <img src="bookmarkapp.PNG" alt="bookmark_app" class = 'app_picture'>
    </div>
    <div>
    <h2>Bookmark App</h2>
    <p>
    Simple web app for storing and maintaining various websites and details on an API.
      <br />
      <h3> Technologies Used: </h3>
      <ul>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>HTML</li>
      <li>CSS</li>
      </ul>
      <br />
      <a href="https://thinkful-ei-emu.github.io/eugene-bookmark-app/" target="_blank"><i class="fab fa-safari fa-2x small_icon"></i>Visit Live Page</a>
      <a href="https://github.com/thinkful-ei-emu/eugene-bookmark-app" target="_blank"><i class="fab fa-github fa-2x small_icon"></i>Github</a>
    </p>
  </div>
  </div>
    `;
  }

  function generateQuizApp() {
    return `
    <div class="grid-2" id = "quizexpand_id">
    
    <div class="center">
    <img src="quizapp.PNG" alt="quiz_app" class = 'app_picture'>
    </div>
    <div>
    <h2>Quiz App</h2>
    <p>
    Paired programming project for utilizing Open Trivia DB API to generate 5 random trivia questions and keep track of score for the user. 
      <br />
      <h3>Tech</h3>
      <ul>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>HTML</li>
      <li>CSS</li>
      </ul>
      <br />
      <br />
      <a href=" https://thinkful-ei-emu.github.io/adrienne-eugene-quiz-app-2" target="_blank"><i class="fab fa-safari fa-2x small_icon"></i>Visit Live Page</a>
      <a href="https://github.com/thinkful-ei-emu/adrienne-eugene-quiz-app-2" target="_blank"><i class="fab fa-github fa-2x small_icon"></i>Github</a>
    </p>
  </div>
  </div>
    `;
  }

  function handleBookmarkApp() {
    $("#main_container").on("click", "#bookmark", function () {
      $("#main_container").html(generateBookmarkApp());
      console.log("bookmark button works");
    });
  }

  function handleQuizApp() {
    $("#main_container").on("click", "#quiz", function () {
      $("#main_container").html(generateQuizApp());
      console.log("Quiz button works");
    });
  }

  function footerAlign() {
    $("footer").css("display", "block");
    $("footer").css("height", "auto");
    var footerHeight = $("footer").outerHeight();
    $("body").css("padding-bottom", footerHeight);
    $("footer").css("height", footerHeight);
  }

  function displayOnLoad() {
    $("#main_container").html(generateAboutMeHtml());
  }

  function bindEventListeners() {
    handleAboutMe();
    handleProjects();
    handleSkills();
    handleContact();
    handleBookmarkApp();
    handleQuizApp();
    displayOnLoad();
  }

  return {
    bindEventListeners,
    footerAlign,
  };
})();
