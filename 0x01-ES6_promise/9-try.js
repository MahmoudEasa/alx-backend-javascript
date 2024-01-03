const guardrail = (mathFunction) => {
  const queue = [];
  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (err) {
    queue.push(`Error: ${err.message}`);
    queue.push('Guardrail was processed');
  }

  return (queue);
};

export default guardrail;
