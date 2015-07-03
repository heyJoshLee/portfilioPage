 var globals = {projects:  [],
                oldHTML: ""};
var currentProject;
$(document).ready(function() {
 


  function Project(title, description, skills, url, img, github) {
      this.title = title;
      this.description = description;
      this.skills = skills;
      this.url = url;
      this.img = img;
      this.github = github;
      globals["projects"].push(this);
  };

  new Project("Penguin Game", "Click the penguins", ["HTML", "CSS", "JS", "Rocket Science"],"Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Colbert Button", "Click to view a random video from Stephen Colbert", ["HTML", "CSS", "JS"],"http://htmlpreview.github.io/?https://github.com/jleewebdev/Colbert-button/blob/master/index.html","./img/colbert_button.png","https://github.com/jleewebdev/Colbert-button");
  new Project("Codepad", "Write and run HTML, CSS and JS from your browser.", ["HTML", "CSS", "JS"],"Codepad.com","./img/codepad.png","github/codepad");
  new Project("Color Roulette", "Generate random colors and color palettes.", ["HTML", "CSS", "JS"],"https://github.com/jleewebdev/Color-Roulette","./img/colorButtonScreen.png","https://github.com/jleewebdev/Color-Roulette");
  new Project("Fourside", "Earthbound fan site", ["HTML", "CSS"],"http://htmlpreview.github.io/?https://github.com/jleewebdev/Fourside/blob/master/index.html","./img/foursideScreen.png","https://github.com/jleewebdev/Fourside");
  new Project("Hex Clock", "Shows color based on time", ["HTML", "CSS", "JS"], "http://htmlpreview.github.io/?https://github.com/jleewebdev/Hex-Clock/blob/master/index.html", "./img/hex_clock.png", "https://github.com/jleewebdev/Hex-Clock");
  new Project("The Music Machine", "Create music loops in your browser with five differnt instruments", ["HTML", "CSS", "JS", "howler.js"], "https://github.com/jleewebdev/musicalSquares", "./img/music_machine.png", "https://github.com/jleewebdev/musicalSquares");
  new Project("Salary Compare", "Compare your slary with some US celebrities.", ["HTML", "CSS", "JS", "jQuery"], "https://github.com/jleewebdev/compareSalary", "./img/salary_compare.png", "https://github.com/jleewebdev/compareSalary");
  new Project("Omni Electric", "I saw this website and decided to recreate it using HTML / CSS. This was one of my first projects", ["HTML", "CSS"], "http://htmlpreview.github.io/?https://github.com/jleewebdev/Omni---Electric-CSS-copy/blob/master/index.html", "./img/omniScreen.png", "https://github.com/jleewebdev/Omni---Electric-CSS-copy");
  new Project("Blackjack", "Play blackjack the blackjack", ["HTML", "CSS", "Bootstrap", "Ruby", "Sinatra"], "http://blackjack-jl.herokuapp.com/", "./img/blackjack.png", "https://github.com/jleewebdev/tl-blackjack-webapp");


  // Fill page with projects
  function fillData (projectArray) {
    var sizes = [6, 6, 4, 4, 4, 4, 4, 4, 4, 4];
    var i = 0;
    projectArray.forEach(function(project) {
      $("#row_1").prepend("<li class='sepia-filter project col-" + sizes[i] + "'" +  "id='project-" + i + "'></li>");
      $("#row_1 li:first-child").css("background-image", "url(" + project["img"] + ")");
      i += 1; 
    });
  };

  // Fills page with data
  fillData(globals.projects);


  // Close info box
  $("#close-info-box").on("click", function() {
    $("#info-box").fadeOut("slow");
    // Beacuse .info-skills are appended they must be cleared. Other wise they will keep being added
    $(".info-skills-section").html(" ");
  });

  // Populate and open fadeIn #info-box
  $(".project").on("click", function() {
    $("#info-box .info-title").html("<h2>" + currentProject.title + "</h2>");
    $("#info-box #info-img").attr("src", currentProject.img);
    $("#info-box .info-url").html("<a href='" + currentProject.url + "' target='_blank'>" + currentProject.url + "</a>");
    $("#info-box .info-github").html("<a href='" + currentProject.github + "' class='github-button' target='_blank'> Github </a>")
    $("#info-box .info-desc").html(currentProject.description)

    // Make a tiny div for each skill
    var i = 0; 
    for(i; i < currentProject.skills.length; i += 1) {
      $(".info-skills-section").append("<span class='info-skills'>" + currentProject.skills[i] + "</span>")
    };
    $("#info-box").fadeIn("slow");

  });

  $(".project").hover(
    function() {
      // Fix for projects that have 2 digit ID numbers
      // mouse over

      // Save HTML to repopulate
      globals.oldHTML = $(this).html();

      var projectIndex = this.id.slice(-1);

      currentProject = globals["projects"][projectIndex];
      $(this).html("<div class='info'><div class='title'>" + currentProject["title"] + "</div></div>");
      $(this).removeClass("sepia-filter");
      $(this).addClass("no-filter");
      $(this).toggleClass("clickable");
    },
    // mouse out
    function() {
      // Replace HTML to previous state. Bugs out without this
      $(this).html(globals.oldHTML);
      $(this).removeClass("no-filter");
      $(this).addClass("sepia-filter");
      $(this).toggleClass("clickable");


  });

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var fired = false;
    console.log("scrolled!");
     //>=, not <=
    if (scroll >= 500 && fired === false) {
        //clearHeader, not clearheader - caps H
        $("#projects-header").addClass("fadeOutDown");
        fired = true;
    }
}); //missing );

});


$('#josh-lee').textHoler({
      background: "http://cdn.makeagif.com/media/7-02-2015/gZbolb.gif"
    });






