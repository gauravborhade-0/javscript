const user = {
    _email :'h@gmail.com',
    _password:'abcd',
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password
    },

    set password(value){
        this._password = value
    }
}


const tea = Object.create(user) //this is factory techniqe Object.create instead of new 
console.log(tea.password);


