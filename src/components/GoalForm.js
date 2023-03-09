import React, { useState } from "react";

const GoalForm = ({ addGoal }) => {
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(formData);
    setFormData({
      goal: "",
      by: ""
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          value={formData.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default GoalForm;
