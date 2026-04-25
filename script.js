const addtask = document.getElementById('addtask')
const input = document.getElementById('input')
const tasklist = document.getElementById('tasklist')

addtask.addEventListener('click' , ()=>{

    const inpval = input.value

    if(inpval.trim() === ''){
        alert('no input')
    }
     else{
        let li = document.createElement('li') 
        li.textContent = inpval
        tasklist.appendChild(li)
        input.value = ''
        
     }
})