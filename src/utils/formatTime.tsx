export const formatTime = (timeInSec: number) => {
  const minutes = Math.floor(timeInSec / 60);
  const seconds = timeInSec % 60;

  return (
    <>
      <div>{minutes.toString().padStart(2, '0')}</div>
      <div>{seconds.toString().padStart(2, '0')}</div>
    </>
  );
};
