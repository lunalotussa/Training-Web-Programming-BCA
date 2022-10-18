/*action show skill*/
function print(){
    var skillData=["Makan","Tidur","Memandikan Anabul","Melamun"]
    //var display = myArray.toString();
    document.getElementById("result").innerHTML = skillData.join('<br>');
}

/*action refresh page*/
function refreshPage(){
    window.location.reload();
} 