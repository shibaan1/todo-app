const addtask = document.getElementById('addtask')
const input = document.getElementById('input')
const tasklist = document.getElementById('tasklist')
const taskcompleted = document.getElementById("taskcompleted")
const totaltask = document.getElementById('totaltask')
const filter = document.getElementById('filter')
const clear =  document.getElementById('clear')


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
        saveTasks()

    }
})

tasklist.addEventListener('click', (e) => {

    if (e.target.dataset.action === 'done') {
        e.target.parentElement.parentElement.classList.toggle('done')
        updateCounter()
        saveTasks()

        if (e.target.parentElement.parentElement.classList.contains('done')) {

            e.target.textContent = 'UNDO'
        }
        else {
            e.target.textContent = "DONE"
        }

    }

    if (e.target.dataset.action === 'remove') {
        e.target.parentElement.parentElement.remove()
        updateCounter()
        saveTasks()
    }
})

function updateCounter() {
    let totaltasks = tasklist.querySelectorAll('li').length
    let completedtask = tasklist.querySelectorAll('li.done').length

    taskcompleted.textContent = completedtask
    totaltask.textContent = totaltasks
}

filter.addEventListener('click', (e) => {
    const filtervalue = e.target.dataset.filter
    const alltask = tasklist.querySelectorAll('li')

    alltask.forEach(li => {
        if (filtervalue === 'active') {
            if (li.classList.contains('done')) {
                li.style.display = 'none'
            }

            else {
                li.style.display = 'flex'
            }

        }

        if (filtervalue === 'completed') {
            if (li.classList.contains('done')) {
                li.style.display = 'flex'
            }
            else {
                li.style.display = 'none'
            }
        }

        if (filtervalue === 'all') {
            li.style.display = 'flex'

        }
    })
})

clear.addEventListener('click' , (e)=>{

    tasklist.innerHTML = ''
    updateCounter()
    saveTasks()
})

function saveTasks(){
    let item = tasklist.querySelectorAll('li')
   const tasks = Array.from(item)
    const data = tasks.map(li =>{
        return{
            text: li.childNodes[0].textContent,
            done: li.classList.contains('done')
            
        }
    })
    const str = JSON.stringify(data)
    localStorage.setItem('tasks' , str)
}

function loadTasks(){
const stored = localStorage.getItem('tasks')
const tasks = JSON.parse(stored)
 if(!tasks) return

tasks.forEach(task=>{
     let li = document.createElement('li')
        let dbtn = document.createElement('button')
        let rbtn = document.createElement('button')
         dbtn.textContent = "DONE"
        dbtn.dataset.action = 'done'
        rbtn.dataset.action = 'remove'
        rbtn.textContent = 'REMOVE'
         const btnWrapper = document.createElement('div')
         const taskText = document.createTextNode(task.text)
         btnWrapper.appendChild(dbtn)
         btnWrapper.appendChild(rbtn)
         li.appendChild(taskText)
         li.appendChild(btnWrapper)
         tasklist.appendChild(li)

         if(task.done){
            li.classList.add('done')
            dbtn.textContent = 'UNDO'
         }
})
 updateCounter()       
}
loadTasks()