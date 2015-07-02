 var globals = {projects:  [],
                oldHTML: ""};
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
    var sizes = [4, 4, 3, 3, 4];
    var i = 0;
    projectArray.forEach(function(project) {
      $("#row_1").prepend("<li class='project col-" + sizes[i] + "'" +  "id='project-" + i + "'>Here is some text</li>");
      $("#row_1 li:first-child").css("background-image", "url(" + project["img"] + ")");
      i += 1; 
    });
  };

  fillData(globals.projects);


  $(".project").hover(
    function() {
      // mouse over
      globals.oldHTML = $(this).html();
      var projectIndex = this.id.slice(-1);
      var projectTitle = globals["projects"][projectIndex]["title"];
      console.log(projectTitle);
      $(this).html("<div class='info'><div class='title'>" + projectTitle + "</div></div>");
      $(this).toggleClass("fade");
    },
    function() {
      $(this).html(globals.oldHTML);
      $(this).toggleClass("fade");

  });


//<div class="info">
  //          <div class="title">Name</div>
    //    </div>



  //$(".project").mouseenter(function() 
  //  $(this).addClass("hidden")
  //);

});
