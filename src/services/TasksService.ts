import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';
import TaskRepository from './repositories/TaskRepository';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: boolean;
}

class TasksService {
  async findAll() {
    const tasks = await AsyncStorage.getItem('@Task');

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  }

  async create(title: string, description?: string) {
    const tasksStorage = await this.findAll();

    const tasks = [
      ...tasksStorage,
      {
        id: uuidv4(),
        title,
        description,
        status: false,
      },
    ];

    await TaskRepository.setTasks(tasks);
  }

  async delete(id: string, tasks: Task[]) {
    const tasksFiltered = tasks.filter(task => task.id !== id);

    await TaskRepository.setTasks(tasksFiltered);

    return tasksFiltered;
  }

  async update(task: Task[]) {
    await TaskRepository.setTasks(task);
  }

  async findOne(id: string) {
    const tasks = await AsyncStorage.getItem('@Task');

    if (tasks) {
      const tasksParse = JSON.parse(tasks) as Task[];

      const findTask = tasksParse.find(task => task.id === id);

      return findTask;
    }

    return null;
  }
}

export default new TasksService();
