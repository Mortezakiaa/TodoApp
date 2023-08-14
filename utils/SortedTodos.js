export default function SortedTodos(todos) {
    const SortedData = {}
    todos.map((todo)=>{
        if(!SortedData[todo.status]) SortedData[todo.status] = []
        SortedData[todo.status].push(todo)
    })
    return SortedData
}
