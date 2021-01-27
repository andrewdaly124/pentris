/** Async time delay
 * Implementation:
 *
 * await Delay(`t`);
 */
export default async function Delay(delay) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
