const body = document.body;
const numberOfTriangles = 20; // Number of triangles to create

for (let i = 0; i < numberOfTriangles; i++) {
    const triangle = document.createElement('div');
    triangle.className = 'triangle';

    // Set random size and color
    const size = Math.random() * 100 + 20; // Size between 20 and 120
    triangle.style.borderBottom = `${size}px solid rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
    triangle.style.top = `${Math.random() * 100}vh`; // Random top position
    triangle.style.left = `${Math.random() * 100}vw`; // Random left position

    // Set random animation timing
    const duration = Math.random() * 4 + 4; // Random duration between 4s and 8s
    const delay = Math.random() * 4; // Random delay between 0s and 4s
    triangle.style.animationDuration = `${duration}s`;
    triangle.style.animationDelay = `${delay}s`;

    // Append the triangle to the body
    body.appendChild(triangle);
}