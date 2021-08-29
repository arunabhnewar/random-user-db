const url = `https://randomuser.me/api/?results=1`;

function loadUser() {
    fetch(url).then(res => res.json()).then(data => displayUser(data.results[0]))
}
loadUser();

function displayUser(user) {
    // id selection
    const profile = document.getElementById('profile');
    const intro = document.getElementById('intro');
    const display = document.getElementById('display');

    intro.style.color = 'brown';
    intro.style.fontSize = '16px';
    intro.style.fontWeight = '600'
    display.style.color = 'brown';

    // set inner text and user image 
    profile.src = `${user.picture.large}`
    intro.innerText = `Hi, My name is`
    display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`

    // change user name
    document.getElementById('userName').addEventListener('mouseover', () => {
        intro.innerText = `Hi, My name is`
        display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    })

    // change user email
    document.getElementById('email').addEventListener('mouseover', () => {
        intro.innerText = `Hi, My email is`
        display.innerText = `${user.email}`
    })

    // change user email
    document.getElementById('dob').addEventListener('mouseover', () => {
        intro.innerText = `Hi, My date of birth is`
        display.innerText = `${user.dob.date.slice(0, 10)}`
    })

    // change user phone number
    document.getElementById('phone').addEventListener('mouseover', () => {
        intro.innerText = `Hi, My phone number is`
        display.innerText = `${user.phone}`
    })

    // change user address
    document.getElementById('address').addEventListener('mouseover', () => {
        intro.innerText = `Hi, My address is`
        display.innerText = `${user.location.street.number}, ${user.location.city}, ${user.location.state}, ${user.location.country}`
    })

    // change user password
    document.getElementById('password').addEventListener('mouseover', () => {
        intro.innerText = `Hi, My password is`
        display.innerText = `${user.login.password}`
    })
    console.log(user);
}