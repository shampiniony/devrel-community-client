

export const useRandomColor = (amount: number) => {
  const colors = ['green', 'red', 'violet', 'yellow', 'orange', 'blue']

  let randomColors: string[] = [];
  for(let i = 0; i < amount; i++) {
    randomColors.push(colors[Math.floor(Math.random() * 6)]);
  } 

  return (randomColors);
}
