export function isTimeBeforeCurrent(time : Date) {
    const futureTime = new Date(new Date(time).getTime() + 5 * 60000);
    return futureTime > new Date();
  }


  export const renderTime = (time : Date)=>{
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedTime
  }