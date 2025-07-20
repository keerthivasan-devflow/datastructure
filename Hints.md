<!-- 3. Use a Hash Map/Object for Frequency or Lookups -->
<!-- Avoid nested loops by using a map for instant lookup. -->

let freq = {}, hasDuplicate = false;
for (let i = 0; i < arr.length; i++) {
  if (freq[arr[i]]) {
    hasDuplicate = true;
    break;
  }
  freq[arr[i]] = 1;
}
