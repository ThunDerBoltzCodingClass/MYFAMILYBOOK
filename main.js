var names=["Thangamayil", "Peacock", "Mommy", "Appa"];
var pics=["boy.png", "girl.jpg", "mommy.jpg", "daddy.jpg"]
var i=0;
function update(){
i++;

var people_in_array= 4
if(i > people_in_array )
{
    i=0;
}
var updatedImage=pics[i]
var updatedName=names[i]
document.getElementById("family_member_image").src=updatedImage;
document.getElementById("family_member_name").innerHTML=updatedName;
}