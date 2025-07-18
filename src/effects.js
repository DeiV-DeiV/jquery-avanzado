// effects.js

export function drag() {
  for (let el of this) {
    el.style.cursor = "grab";
    // el.style.position = "relative";
    let isDraggable = false;
    let offsetX = 0,
      offsetY = 0;
    let currentX = 0,
      currentY = 0;

    const UpdatePos = () => {
      el.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };

    const onMouseDown = function (e) {
      isDraggable = true;
      offsetX = e.clientX - currentX;
      offsetY = e.clientY - currentY;
      el.style.cursor = "grabbing";
      e.preventDefault();
    };
    const onMouseMove = function (e) {
      if (!isDraggable) return;
      currentX = e.clientX - offsetX;
      currentY = e.clientY - offsetY;
      UpdatePos();
    };
    const onMouseUp = function () {
      isDraggable = false;
      el.style.cursor = "grab";
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  return this;
}
