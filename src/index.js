const input = document.querySelector('.email input');

const validate  = (card_no) => {
  card_no = card_no.split(' ').join('')
  //Luhn's algorithm
  let sum = 0
  for(let i=card_no.length-1; i >= 0; i--) {
    if (i % 2) { sum += Number(card_no[i]) }
    else {
      let double = Number(card_no[i])*2
      if (double > 9) { 
        double = double - 9 //Same as sum of digits
      }
      sum += double
    }
  }

  return sum % 10
}

input.addEventListener('keyup', ()=>{
  input.value = input.value.match(/\d{1,4}/g).join(' ') //Adding space after 4n digit
  input.classList.add('fail')
  if (input.value.length == 19) {
    if (validate(input.value) == 0) {
      input.parentElement.classList.add('success')
      input.classList.remove('fail')
    } else {
      input.parentElement.classList.add('shake')
    }
  } else {
    input.parentElement.classList.remove('success')
    input.parentElement.classList.remove('shake')
  }
})