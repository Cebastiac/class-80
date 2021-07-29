name_of_student_array=[];
function submit()
{
    var display_student_array=[];
    for (var j=1;j<=4;j++) {
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        console.log (student_name);
        name_of_student_array.push(student_name);
        
    }
    console.log (name_of_student_array);
    var length_student_array=name_of_student_array.length;
    console.log(length_student_array);
    for (var k=0;k<length_student_array;k++) {
        display_student_array.push("<h4>name-"+name_of_student_array[k]+"</h4>");
        console.log (display_student_array);
        
    }
    console.log (display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_comma=display_student_array.join(" ");
    console.log (remove_comma);
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    name_of_student_array.sort();
     console.log (name_of_student_array);
     var display_sorting=[];

     var length_student_array=name_of_student_array.length;
     console.log(length_student_array);
     for (var k=0;k<length_student_array;k++) {
         display_sorting.push("<h4>name-"+name_of_student_array[k]+"</h4>");
         console.log (display_sorting);
         
     }
     var remove_comma=display_sorting.join(" ");
     console.log (remove_comma);
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}