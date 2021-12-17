const todoModel = require('../models/todoModel');

 async function addTodo(request,response){
   try {
    const newTodo = await todoModel.create(request.body);
    response.status(200).json(newTodo);
   } catch (error) {
       console.log("Something went wrong",error.message);
   }
}

async function getAllTodo(request,response){
try {
  const getAll =await todoModel.find();
  response.status(200).json(getAll) ;
} catch (error) {
  console.log('something went wrong',error.message); 
  response.status(400) 
}
}


async function getTodoById(request,response){
    try {
     const get1todo =await todoModel.findById(request.params.todoId);
     response.status(200).json (get1todo);  
    } catch (error) {
     console.log('something went wrong',error.message);   
    }
}

async function updateById (request,response){
    try {
     const updateId=await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
     response.status(200).json(updateId);
    }
     catch (error) {
      console.log('something wwent wrong',error.message); 
    }

}
async function deleteById(request,response){
try {
  await todoModel.findByIdAndDelete(request.params.todoId); 
  response.status(200).json({message:"todo deleted"});
} catch (error) {
    console.log("something went wrong",error.message);
    
}
}

module.exports ={
    addTodo,
    getAllTodo,
    updateById,
    deleteById,
    getTodoById
}