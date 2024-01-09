const Reducer = (state, action) => {
    switch(action.type) {
        case "Delete_Handler":
            return {
                ...state,
                transData: state.transData.filter(transData => transData.id !== action.deleteId)
            }

        case "Add_NewTransData":
            return {
                ...state,
                transData: [action.newTransData, ...state.transData]
            }

        case "Edit_Handler":
            const newEditTransData = [...state.transData];

            const index = state.transData.findIndex((transData) => transData.id === action.editId);

            newEditTransData[index] = {...action.editTransData}
            
            return {
                ...state,
                transData: newEditTransData
            }

        default:
            return state;
    }
}

export default Reducer