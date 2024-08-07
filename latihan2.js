let students = [
    {namaDepan: "Jack", namaBelakang: "Ma"},
    {namaDepan: "Dj", namaBelakang: "Alok"},
    {namaDepan: "Su", namaBelakang: "Cipto"},
]

students.map (
    (student, index) => {
        console.log(student.namaDepan + " " + student.namaBelakang)
    }
)