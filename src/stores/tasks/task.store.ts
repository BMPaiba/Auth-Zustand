import { create, StateCreator } from "zustand";
import { TaskStatus, type Task } from "../../interfaces";

interface TaskState {
    tasks: Record<string, Task>;
    getTaskByStatus: (newStatus: TaskStatus) => Task[]
}

const storeApi: StateCreator<TaskState> = (set,get) => ({
    tasks: {
        'ABC-1': {id: 'ABC-1', title: 'Task 1', status:'open'},
        'ABC-2': {id: 'ABC-2', title: 'Task 2', status:'in-progress'},
        'ABC-3': {id: 'ABC-3', title: 'Task 3', status:'open'},
        'ABC-4': {id: 'ABC-4', title: 'Task 4', status:'open'}
    },

    getTaskByStatus: (status) => {
        const tasks = get().tasks; // Obtiene las tareas actuales
        return Object.values(tasks).filter(task => task.status === status); // Filtra sin modificar el estado
    }

});

export const useTaskStore = create<TaskState>()(storeApi)