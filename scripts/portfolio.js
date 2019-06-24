/* eslint-disable no-console */
const portfolio = (function() {
  function generateAboutMeHtml() {
    return `
    <div class="grid-2" id = "about_id">
    
    <div class="center">
    <i class="fa fa-laptop-code fa-10x"></i>
    </div>
    <div>
    <h2>About Me</h2>
    <p>
      I am currently attending the Engineering Immersion bootcamp at Thinkful. I
      love coding because it’s invigorating to see your project come to life while
      overcoming and discovering each step to get to that point.
      <br />
      <br />I have a background in internal auditing for collections. I’m
      deliberate and resourceful with a strong track record in providing excellent
      work while under a strict time crunch. Tax season can be quite the overload.
      <br />
      <br />
      When I’m not coding, I like to spend my free time reviewing revious
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
<div class = "container grid-3 center">

  <div id= 'bookmark'>
    <i class="fas fa-bookmark fa-3x"></i>
    <h3>Bookmark App</h3>
    <p>Simple web app for storing and maintaining various websites and details on an API. </p>
  </div>
  <div id= 'quiz'>
    <i class="fas fa-pen-square fa-3x"></i>
    <h3>Quiz App</h3>
    <p>Utilize Open Trivia DB to generate 5 random trivia questions for the user to answer</p>
  </div>

  <div id= 'placeholder'>
    <i class="fas fa-wrench fa-3x"></i>
    <h3>Placeholder</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, neque.</p>
  </div>
</div>
  `;
  }

  function generateSkillsHtml() {
    return `
    <div class="center">
    <i class="fas fa-sitemap fa-10x"></i>
    <h2>Skills</h2>
    <ul>
      <li>JavaScript</li>
      <li>JQuery</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Placeholder</li>
    </ul>
  </div>

    `;
  }

  function generateContactHtml() {
    return `
    
    
    <div class="center">
    <i class="fa fa-id-card fa-10x"></i>
    <h2>Eugene Gian</h2>

      <a href="mailto:eugene.gian@outlook.com" target="_top"><i class="fa fa-envelope fa-2x small_icon"></i></a>

      <a href="https://github.com/geneggy"><i class="fab fa-github fa-2x small_icon"></i></a>

      <a href="https://www.linkedin.com/in/eugene-gian-792b5715a/"><i class="fab fa-linkedin fa-2x small_icon"></i></a>

    </div>

    
    `;
  }

  function handleAboutMe() {
    $('#about_me').click(function() {
      $('#main_container').html(generateAboutMeHtml());
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
      console.log('aboutme button works');
    });
  }

  function handleProjects() {
    $('#projects').click(function() {
      $('#main_container').html(generateProjectHtml());
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
      console.log('projects button works');
    });
  }

  function handleSkills() {
    $('#skills').click(function() {
      $('#main_container').html(generateSkillsHtml());
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
      console.log('skills button works');
    });
  }

  function handleContact() {
    $('#contact_info').click(function() {
      $('#main_container').html(generateContactHtml());
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
      console.log('contact button works');
    });
  }


  function generateBookmarkApp() {
    return `
    <div class="grid-2" id = "bookmarkexpand_id">
    <div class="center">
    <img src="bookmarkapp.png" alt="bookmark_app" class = 'app_picture'>
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
    <img src="quizapp.png" alt="quiz_app" class = 'app_picture'>
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
    $('#main_container').on('click', '#bookmark', function (){
      $('#main_container').html(generateBookmarkApp());
      console.log('bookmark button works');
    });
  }

  function handleQuizApp() {
    $('#main_container').on('click', '#quiz', function (){
      $('#main_container').html(generateQuizApp());
      console.log('Quiz button works');
    });
  }

  

  function footerAlign() {
    $('footer').css('display', 'block');
    $('footer').css('height', 'auto');
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('height', footerHeight);
  }
  
  function displayOnLoad() {
    $('#main_container').html(generateAboutMeHtml());
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
