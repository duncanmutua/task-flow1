
import React from 'react';
import TaskManager from '@/components/tasks/TaskManager';

const Tasks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <TaskManager />
    </div>
  );
};

export default Tasks;
