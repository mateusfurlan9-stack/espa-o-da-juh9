export function durationLabel(minutes) {
  const hours = Math.floor(minutes / 60), remainder = minutes % 60;
  return hours ? `${hours}h${remainder ? String(remainder).padStart(2,'0') : ''}` : `${remainder} min`;
}
export function endTime(start, minutes) {
  const [hour, minute] = start.split(':').map(Number);
  const end = hour * 60 + minute + minutes;
  return `${String(Math.floor((end % 1440) / 60)).padStart(2,'0')}:${String(end % 60).padStart(2,'0')}${end>=1440?' (+'+Math.floor(end/1440)+' dia'+(end>=2880?'s':'')+')':''}`;
}

// Show the fixed business day even when the earliest slots have passed.
export function dailyStarts() {
  return Array.from({length:9},(_,i)=>String(i+9).padStart(2,'0')+':00');
}
