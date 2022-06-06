const students=[]

const addUser=({id,itNumber,roomId})=>{

    itNumber= itNumber.trim().toLowerCase()
    roomId=roomId.trim().toLowerCase()

    //check if student is there
    const existingUser=students.find((user)=>user.roomId === roomId&& user.itNumber===itNumber)

    if(existingUser){
        return {error:'User is already logged in with the ITnumber'}
    }

    const user={id,itNumber,roomId}
    students.push(user)
    return {user}


}


const removeUser=(id)=>{
    const index=students.findIndex((student)=>student.id===id)
    if(index!==-1){
        return students.splice(index,1)[0]
    }

}

const getUser=(id)=>students.find((student)=>student.id === id)

const getUsersInRoom=(room)=>students.filter((student)=>student.room === room)

module.exports={addUser,removeUser,getUser,getUsersInRoom}