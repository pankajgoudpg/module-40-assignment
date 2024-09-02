function Vaildation() {
    n = document.myform.nm.value;
    a = document.myform.age.value;
    m = document.myform.mob.value;
    e = document.myform.em.value;
    p = document.myform.pass.value;
    cp = document.myform.cpass.value;
  
    var correct_way = /^[A-Z]$/;
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&]){8,15}$/;
  
  
    let  pass =/^ (?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#@]){8,15} $/
  
  //   /^ [a-z] [A-Z]  $/
  
  // /^ ( ? = .*(A-Z))( ? = .*(a-z)) {}     $/
    /*  	n = document.getElementById("nm").value;
        a = document.getElementById("age").value;
        m = document.getElementById("mob").value;
     e = document.getElementById("em").value; */
  
    console.log(n.length);
    f = true;
  
    if (n.length == 0 || n == " ") {
      document.getElementById("spname").innerHTML = "Name Can Not be Empty.";
      //alert("Name Can Not be Empty.")
      //f = false;
      return false;
    } else if (n.length < 3) {
      document.getElementById("spname").innerHTML =
        "** Name  Must be 3 Character  ";
      //alert("Name Must be 3 Character  ")
      //f = false;
      return false;
    } else if (n.length > 20) {
      document.getElementById("spname").innerHTML =
        "** Name  Must be 25 Character ";
      //alert("Name  Must be 25 Character  ")
      //f = false;
      return false;
    } else {
      document.getElementById("spname").innerHTML = " ";
    }
  
    if (n.match(correct_way)) {
      true;
    } else if (!n.match(correct_way)) {
      document.getElementById("spname").innerHTML =
        "** Only Alphabets are allowed";
      //alert("Name  Must be 25 Character  ")
      return false;
    } else {
      document.getElementById("spname").innerHTML = " ";
    }
  
    if (a.length == 0 || a == " ") {
      document.getElementById("spage").innerHTML = "Age Can Not be Empty.";
      //alert("Age Can Not be Empty.")
      //f = false;
      return false;
    } else {
      document.getElementById("spage").innerHTML = " ";
    }
  
    if (m.length == 0 || m == " ") {
      document.getElementById("spmob").innerHTML = "Moblie No. Can Not be Empty.";
      //alert("Moblie Number Can Not be Empty.")
      //f = false;
      return false;
    } else if (isNaN(m)) {
      document.getElementById("spmob").innerHTML =
        "** Enter Only Moblie Number.....";
      //alert("Moblie Number Can Not be Empty.")
      //f = false;
      return false;
    } else if (!(m.length == 10)) {
       document.getElementById("spmob").innerHTML = "** Enter 10 digit Moblie No.";
      //alert("Plesae Enter The 10 digit Moblie Number.")
      //f = false;
      return false;
    } else if (
      !(
        m.startsWith("6") ||
        m.startsWith("7") ||
        m.startsWith("8") ||
        m.startsWith("9")
      )
    ) {
      document.getElementById("spmob").innerHTML = "** Enter Vaild Moblie No.";
      //alert("Plesae Enter The Vaild Moblie Number.")
      //f = false;
      return false;
    } else {
      document.getElementById("spmob").innerHTML = " ";
    }
  
    if (e.indexOf("@") <= 0) {
      document.getElementById("spemail").innerHTML = "** Invaild @ Position.";
      //alert("** Invaild @ Position.")
      //f = false;
      return false;
    } else if (e.charAt(e.length - 4) != "." && e.charAt(e.length - 3) != ".") {
      document.getElementById("spemail").innerHTML = "** Invaild . Position.";
      //alert("** Invaild . Position.")
      //f = false;
  
      return false;
    } else {
      document.getElementById("spemail").innerHTML = " ";
    }
  
    if (p.length == 0 || p == " ") {
      document.getElementById("sppass").innerHTML = "Password Can Not be Empty.";
      //alert("Moblie Number Can Not be Empty.")
      //f = false;
      return false;
    } else if (!p.match(password)) {
      document.getElementById("sppass").innerHTML =
        "** Password Length Must be Biggest then 5 Character  ";
      return false;
    } else if (p.length < 5) {
      document.getElementById("sppass").innerHTML =
        "** Password Length Must be Biggest 								then 5 Character  ";
      //alert("Password Length Must be Biggest then 5 Character  ")
      //f = false;
      return false;
    } else if (p.length > 25) {
      document.getElementById("sppass").innerHTML =
        "** Password Length Must be 										Smaller then 25 Character  ";
      //alert("Password Length Must be Smaller then 25 Character  ")
      //f = false;
      return false;
    } else if (p != cp) {
      document.getElementById("spcpass").innerHTML = "** Password Are Not Same  ";
      //alert("Password Are Not Same  ")
      //f = false;
      return false;
    } else {
      document.getElementById("sppass").innerHTML = " ";
    }
  
    if (f == true) {
      //alert("Your Name : " + n + "\nYour Age : " + a + "\nYour Moblie : " + m+ "\nYour Email : " + e)
  
      return true;
    }
  }
  