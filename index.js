const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


const side = document.getElementById("sidemenu");

function openmenu() {
    side.style.right = "0";
}

function closemenu() {
    side.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzDdzAJnqMY1NPtL0iezwjP2OSp7gbNMT0ZWYf6g6Pq4jxMUpe8EVLtV2rYsMPttcQ4/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})