export function convertHoursToMinutesAmount(time: string){
    const [hours, minutes] = time.split(':').map(Number)

    const hoursAmount = Math.floor(hours * 60)
    const minutesAmount = minutes % 60
   
    return hoursAmount + minutesAmount
}