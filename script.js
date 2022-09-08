const userName = document.querySelector('#name')
const userSname = document.querySelector('#sname')
const userMail = document.querySelector('#email')
const userPassword = document.querySelector('#psw')
const registerButton = document.querySelector('#registerbtn')
const userRepeatPassword = document.querySelector('#psw-repeat')
const Form = document.querySelector('form')
const UserArr = []
let i;
class User {
    constructor(name, surname, email, password) {

        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}

registerButton.addEventListener('click', () => {
    nameValue = userName.value.trim();
    snameValue = userSname.value.trim();
    mailValue = userMail.value.trim();
    passwordValue = userPassword.value.trim();
    passwordRepeatValue = userRepeatPassword.value.trim();

    if (nameValue == "" || snameValue == "" || mailValue == "" || passwordValue == "" || passwordRepeatValue == "") {
        alert('Bütün xanaları doldurun')
    } else if (passwordValue !== passwordRepeatValue) {
        alert("Parollar eyni olmalıdır")
    } else {
        UserArr.push(new User(userName.value, userSname.value, userMail.value,))
        console.log(UserArr)
        addDataTable()
        Form.reset()
    }

})

const refreshTable = () => {
    const table = document.querySelector('#validation-table tbody')
    table.innerHTML = ''
    UserArr.forEach((user, index) => {

        const button = document.createElement('button')
        button.setAttribute('type' , 'button')
        table.appendChild(button)
        button.innerHTML = 'Delete User'
        const tr = document.createElement('tr')
        table.appendChild(tr)

        const td1 = document.createElement('td')
        td1.classList.add('td1')
        td1.innerHTML = user.name

        const td2 = document.createElement('td')
        td2.classList.add('td2')

        const td3 = document.createElement('td')
        td3.classList.add('td3')

      

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
    
        
        td2.innerHTML = user.surname
        td3.innerHTML = user.email
       

        button.addEventListener('click', element => {
            UserArr.splice(index, 1)
            refreshTable()
        })
    })
}

function addDataTable() {
    
    refreshTable()


}


