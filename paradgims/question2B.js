const radii= [3, 5, 7, 9, 11];

const calculateCircumfrence=radii.map(radius => radius * 2 * Math.PI);
console.log("Circumference of circles:", calculateCircumfrence);
  