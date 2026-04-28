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
        let dbtn = document.createElement('button')
        let rbtn = document.createElement('button')
        dbtn.textContent = "done"
        dbtn.dataset.action = 'done'
        rbtn.dataset.action = 'remove'
        rbtn.textContent = 'remove'
        li.textContent = inpval
        li.appendChild(dbtn)
        li.appendChild(rbtn)
        tasklist.appendChild(li)
        input.value = ''
        
     }
})