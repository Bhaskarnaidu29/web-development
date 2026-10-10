var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"jane.png"

    }
]
var index=0;
function toggle(){
    if(index==0){
        index=1;
    } else {
        index=0;    
    }
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("gender").innerText=users[index].gender;
    document.getElementById("image").src=users[index].image;
}
function Random(){
    fetch("https://randomuser.me/api")
    .then(function(rawData) {
        return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var gender=user.gender;
        var full_name=user.name.title+" "+user.name.first+" "+user.name.last;

        document.getElementById("user-name").innerText=full_name;
        document.getElementById("gender").innerText=gender;
        document.getElementById("image").src=user.picture.large;
    })
}