gallery();

function gallery() {
  if (window.innerWidth > 1200) {
    //Track mouse pos
    var x = 0,
      y = 0;
    $(document).mousemove(function (event) {
      x = event.clientX;
      y = event.clientY;
    });

    var displayedDiv = null;
    window.onscroll = function () {
      var divs = document.elementsFromPoint(x, y);
      if (divs != null) {
        var i;
        var found = false;
        for (i = 0; i < divs.length; i++) {
          if (divs[i].className == "gameBlock") {
            if (displayedDiv == null || divs[i].children[i] != displayedDiv) {
              if (displayedDiv != null) {
                //old div
                displayedDiv.style.opacity = "0";
                displayedDiv.style.transition = "opacity 0.5s";
              }

              //new div
              displayedDiv = divs[i].children[0];
              //exception with recommendation star
              if (divs[i].children[0].id == "recommend")
                displayedDiv = divs[i].children[1];
              displayedDiv.style.opacity = "1";
              displayedDiv.style.transition = "opacity 0.1s";
              found = true;
              break;
            }
          }
        }
        if (!found && displayedDiv != null) {
          displayedDiv.style.opacity = "0";
          displayedDiv.style.transition = "opacity 0.5s";
        }
      }
    };

    $(".gameBlock")
      .mouseover(function () {
        $(this).css({ cursor: "pointer" });
        $(this)
          .find(".gametext")
          .css({ opacity: "1", transition: "opacity 0.1s" });
      })
      .mouseout(function () {
        $(this)
          .find(".gametext")
          .css({ opacity: "0", transition: "opacity 0.5s" });
      });
  } else {
    var gametexts = document.getElementsByClassName("gametext");
    var i;
    for (i = 0; i < gametexts.length; i++) {
      gametexts[i].style.opacity = 1;
    }
  }
}

$("#viewButton").click(function () {
  document
    .getElementById("aboutSection")
    .scrollIntoView({ behavior: "smooth" });
});

window.onresize = function (event) {
  gallery();
};

jQuery(document.links)
  .filter(function () {
    return this.hostname != window.location.hostname;
  })
  .attr("target", "_blank");

$(".gameBlock a").click(function (e) {
  e.stopPropagation();
});
$("#cubeinc").click(function () {
  window.open("CubeInc/index.html");
});
$("#inspirationjar").click(function () {
  window.open("https://www.inspirationjar.com");
});
$("#jetlagged").click(function () {
  window.open("https://jetlag.netlify.app/index.html");
});
$("#sheepgoat").click(function () {
  window.open("https://sheepgoat.herokuapp.com/");
});
$("#cashout").click(function () {
  window.open("CashOut/index.html");
});
$("#bounceArchitect").click(function () {
  window.open("BounceArchitect/index.html");
});
$("#tenseconds").click(function () {
  window.open("https://10seconds.netlify.app/");
});
$("#tapdefender").click(function () {
  window.open("TapDefender/index.html");
});
$("#colorjump").click(function () {
  window.open("ColorJump/index.html");
});
$("#rhymetime").click(function () {
  window.open(
    "https://play.google.com/store/apps/details?id=com.MerbolaGames.RhymeTime"
  );
});
$("#spacespin").click(function () {
  window.open("SpaceSpin/index.html");
});
