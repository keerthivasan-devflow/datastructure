var trap = function (height) {
  let n = height.length;
  let maxL = [];
  maxL[0] = height[0];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(height[i], maxL[i - 1]);
  }

  let maxR = [];
  maxR[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(height[i], maxR[i + 1]);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
    res = res + (waterTrapped < 0 ? 0 : waterTrapped);
  }
  console.log(maxL);
  console.log(maxR);
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
