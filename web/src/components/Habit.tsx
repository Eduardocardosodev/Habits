import React from 'react';

interface HabitProps {
  completed?: number;
}

const Habit = (props: HabitProps) => {
  return <div>{props.completed}</div>;
};

export default Habit;
