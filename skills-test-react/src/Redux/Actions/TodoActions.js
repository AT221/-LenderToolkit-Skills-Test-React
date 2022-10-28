export const saveData = (userInput) =>{
    return {
        type: 'SAVE_ENTRY',
        userData: userInput
    }
}

export const deleteData = (index) =>{
    return{
        type:'DELETE_ENTRY',
        dataIndex: index
    }
}