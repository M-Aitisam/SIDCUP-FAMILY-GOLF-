// function sendEmail(){
//     // Email.send({
//     //     Host : "smtp.gmail.com",
//     //     Username : "aitisamahmed24@gmail.com",
//     //     Password : "aitisam",
//     //     To : '230456@students.au.edu.pk',
//     //     From : document.getElementbyId("email").value,
//     //     Subject : "New Contact From Enquiry",
//     //     Body : "Name: " + document.getElementById("name").value
//     //      + "<br> Email: " + document.getElementbyId("email").value
//     //      +  "<br> Phone no :" + document.getElementbyId("phone").value
//     //      + "<br>  Message :" + document.getElementbyId("message").value
//     // }).then(
//     //   message => alert("Message Send Successfully")
//     // );
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "aitisamahmed24@gmail.com",
//         Password : "123",
//         To : "aitisamahmed27@gmail.com",
//         From :  document.getElementbyId("email").value,
//         Subject : "This is the subject",
//         Body : "Name: " + document.getElementById("name").value
//              + "<br> Email: " + document.getElementbyId("email").value
//              +  "<br> Phone no: " + document.getElementbyId("phone").value
//              + "<br>  Message: " + document.getElementbyId("message").value
//     }).then(
//       message => alert(message)
//     );
// }

    // cursor
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;
    
        cursor.style.top  = y +"px";
        cursor.style.left  = x +"px";
    
    });
    