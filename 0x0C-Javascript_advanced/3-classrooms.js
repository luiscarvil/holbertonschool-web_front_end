function createClassRoom(numberOfStudents){
    function studentSeat(seat){
        return function(){
            seat()
        }
    }
    let students = []
    for (let i = 0; i < numberOfStudents; i++){
        students.push(studentSeat(i + 1))
    }
    return students
}
let classRoom = createClassRoom(10)
