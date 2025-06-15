function App() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, done: false }]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleDone = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.done ? 'done' : ''}>
                        <span onClick={() => toggleDone(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
