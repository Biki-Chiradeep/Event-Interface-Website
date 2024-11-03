function toggleForm(formId, overlayId) {
    const form = document.getElementById(formId);
    const otherForms = document.querySelectorAll('#sign_up_tab, #log_in_tab, #home_tab_id, #event_tab_id, #about_tab_id, #Menu_Tab_id');
    const overlay = document.getElementById('overlay_id');

    otherForms.forEach(formElement => {
        if (formElement.id !== formId) {
                formElement.classList.remove('show');
            }
        });

        form.classList.toggle('show');
        overlay.classList.add('show');  
}

function closetab() {
    const form = document.querySelectorAll('.sign_up, .log_in, .home_tab, .event_tab, .about_tab, .Menu_Tab');
    const closeOverlay = document.querySelector('.overlay'); // Use the overlay ID to get the correct overlay
    closeOverlay.classList.remove('show');
    form.forEach(formElement => {
        formElement.classList.remove('show');
    });
        
    
}

const menuIcon = document.getElementById('menuIcon');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('show');
});


function sinin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Username:", username);
    console.log("Password:", password);
    // You can perform validation here before sending the data to the server

    // Send the login data to the server using Fetch API
    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            // Show the logged-in content
            document.getElementById("usernameDisplay").textContent = username;
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("loggedInUser").style.display = "block";
        } else {
            alert("Invalid username or password!");
        }
    })
    .catch(error => {
        alert("An error occurred during login.");
    });
}

function logout() {
    // Send the logout request to the server using Fetch API
    fetch("logout.php", {
        method: "POST",
    })
    .then(() => {
        // Show the login form again
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("loggedInUser").style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    })
    .catch(error => {
        alert("An error occurred during logout.");
    });
}
