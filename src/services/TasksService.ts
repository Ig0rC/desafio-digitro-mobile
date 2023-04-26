import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';
import TaskRepository from './repositories/TaskRepository';
import {Task} from '../interfaces/Task';

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

  updateTasks(task: Task, tasks: Task[]) {
    if (tasks.length > 0) {
      const tasksUpdate = tasks.map(taskCurrent => {
        if (taskCurrent.id === task.id) {
          return {
            ...task,
          };
        }

        return taskCurrent;
      });

      TaskRepository.setTasks(tasksUpdate);

      return tasksUpdate;
    }

    return tasks;
  }

  async updateOne(task: Task) {
    const tasks = await TaskRepository.getTasks();

    if (tasks.length > 0) {
      const tasksUpdate = tasks.map(taskCurrent => {
        if (taskCurrent.id === task.id) {
          return {
            ...task,
          };
        }

        return taskCurrent;
      });

      await TaskRepository.setTasks(tasksUpdate);
    }
  }

  async findOne(id: string) {
    const tasks = await AsyncStorage.getItem('@Task');

    if (tasks) {
      const tasksParse = JSON.parse(tasks) as Task[];

      const findTask = tasksParse.find(task => task.id === id);

      return findTask as Task;
    }

    return null;
  }
}

export default new TasksService();
