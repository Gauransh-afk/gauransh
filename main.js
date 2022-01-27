name_of_the_student_array = [];

function submit()
{
    var name_1 = document.getElementById("S1").value;
    var name_2 = document.getElementById("S2").value;
    var name_3 = document.getElementById("S3").value;
    var name_4 = document.getElementById("S4").value;

    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);
    
    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("B1").style.display = "none";
    document.getElementById("B2").style.display = "inline-block";

}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
}