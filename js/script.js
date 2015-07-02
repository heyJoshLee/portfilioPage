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

  new Project("Penguin Game", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game2", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game3", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game4", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game5", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");


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
  });

  $(".project").on("click", function() {
    console.log("hi");
    $("#info-box .info-title").html(currentProject.title);

    $("#info-box").fadeIn("slow");





  });

  $(".project").hover(
    function() {
      // mouse over
      globals.oldHTML = $(this).html();
      var projectIndex = this.id.slice(-1);
      currentProject = globals["projects"][projectIndex];
      console.log(currentProject);
      $(this).html("<div class='info'><div class='title'>" + currentProject["title"] + "</div></div>");
      $(this).toggleClass("fade");
      $(this).toggleClass("clickable");





    },
    function() {
      $(this).html(globals.oldHTML);
      $(this).toggleClass("fade");
      $(this).toggleClass("clickable");


  });




});
