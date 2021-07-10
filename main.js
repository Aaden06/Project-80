var all_names = [];
var display_names = [];
function submit(){
var recent_name = document.getElementById("add_name_input").value;
all_names.push(recent_name);
document.getElementById("regular_names").innerHTML = all_names;
document.getElementById("add_name_input").innerHTML ="";
}
function show(){
    var list_length = all_names.length;
    for(var j=0; j<list_length; j++){
        display_names.push("<h4>"+all_names[j]+"</h4>");
    }
    document.getElementById("display_names").innerHTML = display_names;
    var shows = display_names.join("");
    console.log(shows);
}
function sorted(){
    all_names.sort();
    console.log(all_names);
    document.getElementById("sorted_names").innerHTML = all_names;
}
function searched(){
    var s = document.getElementById("search_input").value;
    var found = 0;
    var i;
    for(i=0; i<all_names.length; i++){
        if(s==all_names[i]){
            found++;
        }
    }
    document.getElementById("searched_div").innerHTML = "name found "+found+" time/s";
}