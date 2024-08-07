const Rhodey = {
  tinggi: 170 / 100,
  berat: 90,
};

function statusBerat() {
  const BMI = Rhodey.berat / Math.pow(Rhodey.tinggi, 2)
  console.log("Berat: " + BMI)

  if (BMI < 18.5) {
    console.log("Kekurangan berat badan")
  } else if (BMI < 24.9) {
    console.log("Normal")
  } else if (BMI < 29.9) {
    console.log("Kelebihan berat badan")
  } else if (BMI >= 30) {
    console.log("Obesitas")
  } else {
    console.log("erorrr")
  }
}

statusBerat();
