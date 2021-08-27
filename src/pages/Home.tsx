import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask() {
    //TODO - add new task
    setTasks([...tasks, { id: Math.random(), title: newTask, done: false }]);
  }

  function handleToggleTaskDone(id: number) {
    const newItem = tasks[id];
    tasks[id] = { ...newItem, done: !newItem.done };
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const temp = [...tasks];

    // removing the element using splice
    temp.splice(id, 1);

    // updating the list
    setTasks(temp);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} onChangeText={setNewTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
