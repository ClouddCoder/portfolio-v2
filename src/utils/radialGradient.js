export const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const effectContainer = target.querySelector(".light");

  const rect = effectContainer.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  effectContainer.style.backgroundImage = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
};
