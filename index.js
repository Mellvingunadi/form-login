const form = document.querySelector('form')
const username = document.querySelector('.email')
const password = document.querySelector('.password')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=>{
  let messages =[]

  if(username.value === '' || username.value == null){
    messages.push('insert ur Username and password')
  }

  if(username.value === '' && password.value.length > 5){
    messages.push('your password is to short')
  }

  if(messages.length >0){
    e.preventDefault()
    errorElement.innerText = messages.join()
  }
  
});






