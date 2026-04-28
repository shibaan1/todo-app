const addtask = document.getElementById('addtask')
const input = document.getElementById('input')
const tasklist = document.getElementById('tasklist')

addtask.addEventListener('click', () => {

    const inpval = input.value

    if (inpval.trim() === '') {
        alert('no input')
    }
    else {
        let li = document.createElement('li')
        let dbtn = document.createElement('button')
        let rbtn = document.createElement('button')
        dbtn.textContent = "DONE"
        dbtn.dataset.action = 'done'
        rbtn.dataset.action = 'remove'
        rbtn.textContent = 'REMOVE'
        const btnWrapper = document.createElement('div')
        const taskText = document.createTextNode(inpval)
        li.appendChild(taskText)
        li.appendChild(btnWrapper)
        btnWrapper.appendChild(dbtn)
        btnWrapper.appendChild(rbtn)
        tasklist.appendChild(li)
        input.value = ''

    }
})

tasklist.addEventListener('click', (e) => {

    if (e.target.dataset.action === 'done') {
        e.target.parentElement.parentElement.classList.toggle('done')

        if(e.target.parentElement.parentElement.classList.contains('done')){

            e.target.textContent = 'UNDO'
        }
        else{
            e.target.textContent = "DONE"
        }

    }

    if (e.target.dataset.action === 'remove') {
        e.target.parentElement.parentElement.remove()
    }
})