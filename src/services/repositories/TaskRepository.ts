import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../../interfaces/Task';

class TaskRepository {
  setTasks(tasks: Task[]) {
    return AsyncStorage.setItem('@Task', JSON.stringify(tasks));
  }

  async getTasks(): Promise<Task[] | []> {
    const tasks = await AsyncStorage.getItem('@Task');

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  }
}

export default new TaskRepository();
