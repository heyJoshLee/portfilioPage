$(document).ready(function() {
  var globals = {projects:  []};


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
  new Project("Penguin Game", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");
  new Project("Penguin Game", "Click the penguins", "HTML, CSS, JS","Penguingame.com","./img/find_the_penguins.png","Here is is");


  function fillData (projectArray) {
    var sizes = [4, 4, 3, 3, 4];
    var i = 0;
    projectArray.forEach(function(project) {
      $("#row_1").prepend("<li class='project col-" + sizes[i] + "'" +  "id='project-1'>Here is some text</li>");
      $("#row_1 li:first-child").css("background-image", "url(" + project["img"] + ")");
      i += 1; 
    });
  };

  fillData(globals.projects);

  //$(".project").mouseenter(function() 
  //  $(this).addClass("hidden")
  //);

});
