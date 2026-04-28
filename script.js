const addtask = document.getElementById('addtask')
const input = document.getElementById('input')
const tasklist = document.getElementById('tasklist')
const taskcompleted = document.getElementById("taskcompleted") 
const totaltask = document.getElementById('totaltask')
const filter = document.getElementById('filter')


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
        updateCounter()

    }
})

tasklist.addEventListener('click', (e) => {

    if (e.target.dataset.action === 'done') {
        e.target.parentElement.parentElement.classList.toggle('done')
        updateCounter()

        if(e.target.parentElement.parentElement.classList.contains('done')){

            e.target.textContent = 'UNDO'
        }
        else{
            e.target.textContent = "DONE"
        }

    }

    if (e.target.dataset.action === 'remove') {
        e.target.parentElement.parentElement.remove()
        updateCounter()
    }
})

function updateCounter(){
    let totaltasks = tasklist.querySelectorAll('li').length
    let completedtask = tasklist.querySelectorAll('li.done').length

    taskcompleted.textContent = completedtask
    totaltask.textContent = totaltasks
}

filter.addEventListener('click' , (e)=>{
    const filtervalue = e.target.dataset.filter
    const alltask = tasklist.querySelectorAll('li')

    alltask.forEach(li =>{
        if(filtervalue === 'active'){
            if(li.classList.contains('done')){
                li.style.display = 'none'
            }

            else{
                li.style.display = 'flex'
            }

        }

        if(filtervalue === 'completed'){
            if(li.classList.contains('done')){
                li.style.display = 'flex'
            }
            else{
                li.style.display = 'none'
            }
        }

        if(filtervalue === 'all'){
            li.style.display = 'flex'

        }
    })
})