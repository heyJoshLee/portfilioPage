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
  new Project("Colbert Button", "Click to view a random video from Stephen Colbert", ["HTML", "CSS", "JS"],"colbert_button.com","./img/colbert_button.png","github.com");
  new Project("Codepad", "Write and run HTML, CSS and JS from your browser.", ["HTML", "CSS", "JS"],"Codepad.com","./img/codepad.png","github/codepad");
  new Project("Penguin Game4", "Click the penguins", ["HTML", "CSS", "JS"],"Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game5", "Click the penguins", ["HTML", "CSS", "JS"],"Penguingame.com","./img/find_the_penguins.png","Here is is");


  function fillData (projectArray) {
    var sizes = [6, 6, 4, 4, 4];
    var i = 0;
    projectArray.forEach(function(project) {
      $("#row_1").prepend("<li class='project col-" + sizes[i] + "'" +  "id='project-" + i + "'></li>");
      $("#row_1 li:first-child").css("background-image", "url(" + project["img"] + ")");
      i += 1; 
    });
  };

  fillData(globals.projects);


  // close info box
  $("#close-info-box").on("click", function() {
    $("#info-box").fadeOut("slow");
    // Beacuse .info-skills are appended they must be cleared. Other wise they will keep being added
    $(".info-skills-section").html(" ");

  });

  // Populate and open fadeIn #info-box
  $(".project").on("click", function() {
    $("#info-box .info-title").html("<h2>" + currentProject.title + "</h2>");
    $("#info-box #info-img").attr("src", currentProject.img);
    $("#info-box .info-url").html("<a href='" + currentProject.url + "'>" + currentProject.url + "</a>");
    $("#info-box .info-github").html("<a href='" + currentProject.github + "' class='github-button'> Github </a>")
    $("#info-box .info-desc").html(currentProject.description)

    // make a tiny div for each skill
    var i = 0; 
    for(i; i < currentProject.skills.length; i += 1) {
      $(".info-skills-section").append("<span class='info-skills'>" + currentProject.skills[i] + "</span>")
    };
    $("#info-box").fadeIn("slow");

  });

  $(".project").hover(
    function() {
      // mouse over
      globals.oldHTML = $(this).html();
      var projectIndex = this.id.slice(-1);
      currentProject = globals["projects"][projectIndex];
      $(this).html("<div class='info'><div class='title'>" + currentProject["title"] + "</div></div>");
      $(this).toggleClass("fade");
      $(this).toggleClass("clickable");
    },
    // mouse out
    function() {
      // Replace HTML to previous state. Bugs out without this
      $(this).html(globals.oldHTML);
      $(this).toggleClass("fade");
      $(this).toggleClass("clickable");


  });




});
