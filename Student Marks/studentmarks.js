function results() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let e = document.getElementById("e").value;
    
    let telugu = parseInt(a);
    let english = parseInt(b);
    let maths = parseInt(c);
    let science = parseInt(d);
    let social = parseInt(e);

    const total = telugu + english + maths + science + social;
    document.getElementById("display").innerHTML=("Your Total Marks : " + total)
    
    const teluguMarks = telugu >= 35 && telugu <= 100;
    alert ("Telugu Subject Result is : " + teluguMarks)

    const englishMarks = english >= 35 && english <= 100;
    alert ("English Subject Result is : " + englishMarks)

    const mathsMarks = maths >= 35 && maths <= 100;
    alert ("Maths Subject Result is : " + mathsMarks)

    const scienceMarks = science >= 35 && science <= 100;
    alert ("Science Subject Result is : " + scienceMarks)

    const socialMarks = social >= 35 && social <= 100;
    alert ("Social Subject Result is : " + socialMarks)

    const finalResult = telugu>=35 && english >=35 && maths >= 35 && science >= 35 && social >= 35 && total >=175 ;
    alert ("Your Final Result is : " + finalResult)
}
