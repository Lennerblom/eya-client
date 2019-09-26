export const addChoreToApp = (chore, newChoreToAdd)=> {
  return [...chore, newChoreToAdd]
};

export const removeChoreFromApp = (chore, ChoreToRemove) => {
  return chore.filter(chore => chore.id !== ChoreToRemove.id)
  };