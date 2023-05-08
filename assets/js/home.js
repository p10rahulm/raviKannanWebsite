
function clickLogo() {
    console.log('reloaded');
    window.location = "index.html";

}

function clickTalk(link_name) {
    var myLink = link_name + ".html"
    console.log('myLink='+myLink)
    window.location = myLink;
}