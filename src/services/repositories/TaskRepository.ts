import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: boolean;
}

class TaskRepository {
  setTasks(tasks: Task[]) {
    return AsyncStorage.setItem('@Task', JSON.stringify(tasks));
  }
}

export default new TaskRepository();
