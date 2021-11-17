const list = [ 
    { 
        id: 1,
        name: 'find a girl', 
        status: 'ToDo', 
        priority: 'idle', 
    }, 
    { 
        id: 2,
        name: 'make a breakfast', 
        status: 'Done', 
        priority: 'normal', 
    },  
    ] 
  
  function changeStatus(task,status){
    for( let i of list){
        if(i.name === task){
          i.status = status
          return
        }  
     }
  }
  
  function addTask(task){ 
    let taskId = (list[list.length - 1]).id
  
    list.push({
        id: taskId+1,
        name: task, 
        status: 'ToDo', 
        priority: 'idle',  
    })
  }
  
  function deleteTask(nameTask){
	for(let index in list) {
        if (list[index].name === nameTask) {
            list.splice(index, 1)
        }
    }
  }
 
  function showBy(groupName){
    if(groupName === 'status'){
        console.log("ToDo:")
        for(let i of list ){
            if(i.status === 'ToDo'){
                console.log('- ' + i.name)
            }
        }
        console.log("Done:")
        for(let i of list ){
            if(i.status === 'Done'){
                console.log('- ' + i.name)
            }
        }
        console.log("In Progress:")
        for(let i of list ){
            if(i.status === 'In Progress'){
                console.log('- ' + i.name)
            }
        }   
    }

    else if (groupName === 'priority'){
        console.log("idle:")
        for(let i of list ){
            if(i.priority === 'idle'){
                console.log('- ' + i.name)
            }
        }
        console.log("normal:")
        for(let i of list ){
            if(i.priority === 'normal'){
                console.log('- ' + i.name)
            }
        }
        console.log("high:")
        for(let i of list ){
            if(i.priority === 'high'){
                console.log('- ' + i.name)
            }
        }
        console.log("real-time:")
        for(let i of list ){
            if(i.priority === 'real-time'){
                console.log('- ' + i.name)
            }
        }
    }

    else {
        console.log("Available categories for display: status, priority")
    }
  }
