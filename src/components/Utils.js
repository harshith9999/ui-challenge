export function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const secondsAgo = Math.floor((now - past) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} sec ago`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} mins ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} hrs ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) {
    return `${daysAgo} days ago`;
  }

  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) {
    return `${weeksAgo} weeks ago`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) {
    return `${monthsAgo} months ago`;
  }

  const yearsAgo = Math.floor(daysAgo / 365);
  return `${yearsAgo} years ago`;
}

export function formatDuration(duration) {
  const seconds = Math.floor(duration / 1000);
  if (seconds < 60) {
    return `${seconds}s long`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m long`;
  }

  const hours = Math.floor(minutes / 60);
  return `${hours}hrs long`;
}
