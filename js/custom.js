const msg_input = document.querySelector('.msg_input'),
        name_input = document.querySelector('.name_input'),
        msg_text = document.querySelector('.msg_text'),
        msg_send_form = document.querySelector('.msg_send_form'),
        send_msg = document.querySelector('.send_msg');


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

function sendMsg(e) {
    e.preventDefault()
    let text = `
        Assalomu alaykum! <br/> 
        Mening Ismim ${name_input.value} <br />
        A'loqa Uchun ${msg_input.value} <br/>
        <h3>${msg_text.value} </h3>
    `
    "Assalomu alaykum! <br/> Mening Ismim " +  name_input.value + " " + "<br/> Xabarim " + msg_text.value
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "axmedovadilzoda@gmail.com",
        Password : "F81321A2DB443E52EE5998DA0F1D0349BD29",
        To : 'electroshopuzb@gmail.com',
        From : "axmedovadilzoda@gmail.com",
        Subject : "This is the subject",
        Body : text
    }).then(
      message => alert(message)
    );
}

msg_send_form.addEventListener('submit', sendMsg)