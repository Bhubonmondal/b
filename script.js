//part 1
function showMySearchBar(){
       document.getElementById("mySearchBar").style.display="flex";
       document.getElementById("mySearchBar").style.borderRadius="5rem";
       document.getElementById("mySearchBar").placeholder="Search...";
       document.getElementById("mySearchBar").style.backgroundColor="#fff";
       document.getElementById("MagnifyGlassLogo").style.display="none";
}
function normalsearchmenu(){
       document.getElementById("mySearchBar").style.width="200px"
}
function incresesearchmenu(){
       document.getElementById("mySearchBar").style.width="300px"
}
//part 4 theme changer
function showhovermenu(){
       document.getElementById("showTheMenu").style.display="flex";
       document.getElementById("showTheMenu").style.flexDirection="column"
       document.getElementById("showTheMenu").style.backgroundColor="#fff";
       document.getElementById("showTheMenu").style.color="black";
       document.getElementById("showTheMenu").style.boxShadow="1px 1px 5px black";
}
function hidehovermenu(){
       document.getElementById("showTheMenu").style.display="none";
}

//for *
function orangebackground(){
       document.getElementById("navBar").style.backgroundColor="orange";
       document.getElementById("headingTitle").style.color="white";
       document.getElementById("websiteLogo").style.color="white";
       document.getElementById("home").style.color="white";
       document.getElementById("contact").style.color="white";
       document.getElementById("about").style.color="white";
       document.getElementById("feedback").style.color="white";
       document.getElementById("MagnifyGlassLogo").style.backgroundColor="orange";
       document.getElementById("mainbody").style.backgroundColor="rgb(255, 229, 182)";
       const collection = document.getElementsByTagName("a");
              for (let i = 8; i < collection.length; i++) {
              collection[i].style.color = "black";
       }
       const collection2 = document.getElementsByTagName("a");
              for (let i = 8; i < collection.length; i++) {
              collection[i].style.borderBottom="0px"
       }
       document.getElementById("mainLeftPart").style.borderRight="0px"
       document.getElementById("navBar").style.borderBottom="0px"
       const content = document.getElementsByTagName("h2");
              for (let i = 0; i < content.length; i++) {
              content[i].style.color = "black";
       }
       const paragraph = document.getElementsByTagName("p");
              for (let i = 0; i < paragraph.length; i++) {
              paragraph[i].style.color = "black";
       }
       const pre = document.getElementsByTagName("pre");
              for (let i = 0; i < pre.length; i++) {
              pre[i].style.color = "black";
       }
       const table = document.getElementsByTagName("table");
              for (let i = 0; i < table.length; i++) {
              table[i].style.color = "black";
       }
       const h3 = document.getElementsByTagName("h3");
              for (let i = 0; i < h3.length; i++) {
              h3[i].style.color = "black";
       }
       const li = document.getElementsByTagName("li");
       for (let i = 1; i < 10; i++) {
       li[i].style.border = "2px solid orange";
       }
       const liBottom = document.getElementsByTagName("li");
              for (let i = 0; i < 9; i++) {
              liBottom[i].style.borderBottom = "0px";
       }
       const liRight = document.getElementsByTagName("li");
              for (let i = 0; i < 1; i++) {
              liRight[i].style.borderRight = "2px solid orange";
       }
       document.getElementById("fotterSection").style.borderTop="0px solid white";
       document.getElementById("fotterSection").style.backgroundColor="#ffa500";
       document.getElementById("container").style.backgroundColor="orange"
       document.getElementById("container").style.border="0px";
       document.getElementById("contactUsTag").style.color="white";
       document.getElementById("name").style.color="white";
       document.getElementById("phoneNo").style.color="white";
       document.getElementById("Describe").style.color="white";
       document.getElementById("emailIdInput").style.color="white";
       document.getElementById("describeArea").style.color="black"
}
function bluevioletbackground(){
       document.getElementById("navBar").style.backgroundColor="blueviolet";
       document.getElementById("headingTitle").style.color="white";
       document.getElementById("MagnifyGlassLogo").style.backgroundColor="blueviolet";
       document.getElementById("mainbody").style.backgroundColor="violet";
       const collection = document.getElementsByTagName("a");
              for (let i = 0; i < collection.length; i++) {
              collection[i].style.color = "white";
       }
       const collection2 = document.getElementsByTagName("a");
              for (let i = 8; i < collection.length; i++) {
              collection[i].style.borderBottom="0px"
       }
       document.getElementById("mainLeftPart").style.borderRight="0px"
       document.getElementById("navBar").style.borderBottom="0px"
       const content = document.getElementsByTagName("h2");
              for (let i = 0; i < content.length; i++) {
              content[i].style.color = "white";
       }
       const paragraph = document.getElementsByTagName("p");
              for (let i = 0; i < paragraph.length; i++) {
              paragraph[i].style.color = "white";
       }
       const pre = document.getElementsByTagName("pre");
              for (let i = 0; i < pre.length; i++) {
              pre[i].style.color = "white";
       }
       const table = document.getElementsByTagName("table");
              for (let i = 0; i < table.length; i++) {
              table[i].style.color = "white";
       }
       const h3 = document.getElementsByTagName("h3");
              for (let i = 0; i < h3.length; i++) {
              h3[i].style.color = "white";
       }
       const li = document.getElementsByTagName("li");
       for (let i = 1; i < 10; i++) {
       li[i].style.border = "2px solid blueviolet";
       }
       const liBottom = document.getElementsByTagName("li");
              for (let i = 0; i < 9; i++) {
              liBottom[i].style.borderBottom = "0px";
       }
       const liRight = document.getElementsByTagName("li");
              for (let i = 0; i < 1; i++) {
              liRight[i].style.borderRight = "2px solid blueviolet";
       }
       document.getElementById("fotterSection").style.borderTop="0px solid white";
       document.getElementById("fotterSection").style.backgroundColor="blueviolet";
       document.getElementById("container").style.backgroundColor="blueviolet"
       document.getElementById("container").style.border="0px";
       document.getElementById("contactUsTag").style.color="white";
       document.getElementById("name").style.color="white";
       document.getElementById("phoneNo").style.color="white";
       document.getElementById("Describe").style.color="white";
       document.getElementById("emailIdInput").style.color="white";
       document.getElementById("describeArea").style.color="black"
}
function darkcyanbackground(){
       document.getElementById("navBar").style.backgroundColor="darkcyan";
       document.getElementById("headingTitle").style.color="black";
       document.getElementById("MagnifyGlassLogo").style.backgroundColor="darkcyan";
       document.getElementById("mainbody").style.backgroundColor="rgb(176, 250, 250)";
       const collection = document.getElementsByTagName("a");
              for (let i = 0; i < collection.length; i++) {
              collection[i].style.color = "black";
       }
       const collection2 = document.getElementsByTagName("a");
              for (let i = 8; i < collection.length; i++) {
              collection[i].style.borderBottom="0px"
       }
       document.getElementById("mainLeftPart").style.borderRight="0px"
       document.getElementById("navBar").style.borderBottom="0px"
       const content = document.getElementsByTagName("h2");
              for (let i = 0; i < content.length; i++) {
              content[i].style.color = "black";
       }
       const paragraph = document.getElementsByTagName("p");
              for (let i = 0; i < paragraph.length; i++) {
              paragraph[i].style.color = "black";
       }
       const pre = document.getElementsByTagName("pre");
              for (let i = 0; i < pre.length; i++) {
              pre[i].style.color = "black";
       }
       const table = document.getElementsByTagName("table");
              for (let i = 0; i < table.length; i++) {
              table[i].style.color = "black";
       }
       const h3 = document.getElementsByTagName("h3");
              for (let i = 0; i < h3.length; i++) {
              h3[i].style.color = "black";
       }
       const li = document.getElementsByTagName("li");
       for (let i = 1; i < 10; i++) {
       li[i].style.border = "2px solid darkcyan";
       }
       const liBottom = document.getElementsByTagName("li");
              for (let i = 0; i < 9; i++) {
              liBottom[i].style.borderBottom = "0px";
       }
       const liRight = document.getElementsByTagName("li");
              for (let i = 0; i < 1; i++) {
              liRight[i].style.borderRight = "2px solid darkcyan";
       }
       document.getElementById("fotterSection").style.borderTop="0px solid white";
       document.getElementById("fotterSection").style.backgroundColor="darkcyan";
       document.getElementById("container").style.backgroundColor="darkcyan";
       document.getElementById("container").style.border="0px";
       document.getElementById("name").style.color="black";
       document.getElementById("phoneNo").style.color="black";
       document.getElementById("Describe").style.color="black";
       document.getElementById("emailIdInput").style.color="black";
       document.getElementById("describeArea").style.color="black"
       document.getElementById("contactUsTag").style.color="black";
}


// part 4 dark mode
function darkThemeButton(){
       document.getElementById("navBar").style.backgroundColor="black";//navbar part
       document.getElementById("MagnifyGlassLogo").style.backgroundColor="rgb(1, 1, 1)";
       document.getElementById("headingTitle").style.color="white";
       document.getElementById("mainbody").style.backgroundColor="black";//body part
       const collection = document.getElementsByTagName("a");
              for (let i = 0; i < collection.length; i++) {
              collection[i].style.color = "white";
       }
       document.getElementById("navBar").style.borderBottom="1px solid white";
       const content = document.getElementsByTagName("h2");
              for (let i = 0; i < content.length; i++) {
              content[i].style.color = "white";
       }
       const paragraph = document.getElementsByTagName("p");
              for (let i = 0; i < paragraph.length; i++) {
              paragraph[i].style.color = "white";
       }
       const pre = document.getElementsByTagName("pre");
              for (let i = 0; i < pre.length; i++) {
              pre[i].style.color = "white";
       }
       const table = document.getElementsByTagName("table");
              for (let i = 0; i < table.length; i++) {
              table[i].style.color = "white";
       }
       document.getElementById("navBar").style.borderBottom="1px solid white";
       const h3 = document.getElementsByTagName("h3");
              for (let i = 0; i < h3.length; i++) {
              h3[i].style.color = "white";
       }
       const li = document.getElementsByTagName("li");
              for (let i = 1; i < 10; i++) {
              li[i].style.border = "1px solid white";
       }
       const liBottom = document.getElementsByTagName("li");
              for (let i = 0; i < 9; i++) {
              liBottom[i].style.borderBottom = "0px";
       }
       const liRight = document.getElementsByTagName("li");
              for (let i = 0; i < 1; i++) {
              liRight[i].style.borderRight = "1px solid white";
       }
       document.getElementById("fotterSection").style.borderTop="1px solid white";
       document.getElementById("fotterSection").style.backgroundColor="black";
       document.getElementById("container").style.backgroundColor="black";
       document.getElementById("container").style.border="1px solid white";
       document.getElementById("contactUsTag").style.color="white";
       document.getElementById("name").style.color="white";
       document.getElementById("phoneNo").style.color="white";
       document.getElementById("Describe").style.color="white";
       document.getElementById("emailIdInput").style.color="white";
       document.getElementById("describeArea").style.color="black";
       document.getElementById("describeArea").style.backgroundColor="white";
       document.getElementById("htmlStar1").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar2").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar3").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar4").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar5").style.filter="drop-shadow(0px 0px 0px gold)";
}

function showBengaliContent(){
       document.getElementById("bengaliContent").style.display="flex";
       document.getElementById("englishContent").style.display="none";
}
function showEnglishContent(){
       document.getElementById("bengaliContent").style.display="none";
       document.getElementById("englishContent").style.display="flex";
}
//show home page
function showHomepage(){
       document.getElementById("mainCentralPart").style.display="flex";
       document.getElementById("mainRighPart").style.display="flex";
       document.getElementById("aboutHTML").style.display="none";
       document.getElementById("contactHTML").style.display="none";
       document.getElementById("feedbackHTML").style.display="none";
}
//jump to about page
function showAboutPage(){
       document.getElementById("mainCentralPart").style.display="none";
       document.getElementById("mainRighPart").style.display="none";
       document.getElementById("aboutHTML").style.display="flex";
       document.getElementById("contactHTML").style.display="none";
       document.getElementById("feedbackHTML").style.display="none";
}
//jump to contact page
function showContactPage(){
       document.getElementById("mainCentralPart").style.display="none";
       document.getElementById("mainRighPart").style.display="none";
       document.getElementById("contactHTML").style.display="flex";
       document.getElementById("aboutHTML").style.display="none";
       document.getElementById("feedbackHTML").style.display="none";
}
//jump to feedback page
function showFeedbackPage(){
       document.getElementById("mainCentralPart").style.display="none";
       document.getElementById("mainRighPart").style.display="none";
       document.getElementById("contactHTML").style.display="none";
       document.getElementById("aboutHTML").style.display="none";
       document.getElementById("feedbackHTML").style.display="flex";
}
function submitButton(){
       alert("Thank you for submiting but I will never contact you 😉");
}

function showmoremenu(){
       document.getElementById("showMoreThemes").style.display="flex";
       document.getElementById("showMoreThemes").style.flexDirection="column"
       document.getElementById("showMoreThemes").style.backgroundColor="#fff";
       document.getElementById("showMoreThemes").style.color="black";
       document.getElementById("showMoreThemes").style.boxShadow="1px 1px 5px black"
}
function hidemoremenu(){
       document.getElementById("showMoreThemes").style.display="none";
}
function showthreemoremenu(){
       document.getElementById("showthreeMoreThemes").style.display="flex";
       document.getElementById("showthreeMoreThemes").style.flexDirection="column"
       document.getElementById("showthreeMoreThemes").style.backgroundColor="#fff";
       document.getElementById("showthreeMoreThemes").style.color="black";
       document.getElementById("showthreeMoreThemes").style.boxShadow="1px 1px 5px black"
}
function hidethreemoremenu(){
       document.getElementById("showthreeMoreThemes").style.display="none";
}
function showfeedbackmoremenu(){
       document.getElementById("showthreeMoreThemesfeedback").style.display="flex";
       document.getElementById("showthreeMoreThemesfeedback").style.flexDirection="column"
       document.getElementById("showthreeMoreThemesfeedback").style.backgroundColor="#fff";
       document.getElementById("showthreeMoreThemesfeedback").style.color="black";
       document.getElementById("showthreeMoreThemesfeedback").style.boxShadow="1px 1px 5px black"
}
function hidefeedbackmoremenu(){
       document.getElementById("showthreeMoreThemesfeedback").style.display="none";
}
document.getElementById("contactUsTag").style.color="white";
document.getElementById("name").style.color="white";
document.getElementById("phoneNo").style.color="white";
document.getElementById("Describe").style.color="white";
document.getElementById("emailIdInput").style.color="white";
document.getElementById("describeArea").style.color="black"

function htmlStar1s(){
       document.getElementById("htmlStar1").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar2").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar3").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar4").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar5").style.filter="drop-shadow(0px 0px 0px gold)";
}

function htmlStar2s(){
       document.getElementById("htmlStar1").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar2").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar3").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar4").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar5").style.filter="drop-shadow(0px 0px 0px gold)";
}

function htmlStar3s(){
       document.getElementById("htmlStar1").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar2").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar3").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar4").style.filter="drop-shadow(0px 0px 0px gold)";
       document.getElementById("htmlStar5").style.filter="drop-shadow(0px 0px 0px gold)";
}

function htmlStar4s(){
       document.getElementById("htmlStar1").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar2").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar3").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar4").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar5").style.filter="drop-shadow(0px 0px 0px gold)";
}

function htmlStar5s(){
       document.getElementById("htmlStar1").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar2").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar3").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar4").style.filter="drop-shadow(3px 3px 3px gold)";
       document.getElementById("htmlStar5").style.filter="drop-shadow(3px 3px 3px gold)";
}

function feedbackSubmit(){
       alert("Thank you for your suggestion I will definetly implement them. 😊👍")
}