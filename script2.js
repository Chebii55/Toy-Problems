function calculateDemeritPoints() {
    // Get the speed of the car from the input field.
    const speed = parseFloat(document.getElementById("speed").value);

    // Validate the input.
    if (speed < 0) {
      alert("Speed cannot be negative.");
      return;
    }

    // Calculate the number of demerit points.
    let demeritPoints = 0;
    if (speed > 70) {
      demeritPoints = Math.ceil((speed - 70) / 5);
    }

    // Display the number of demerit points.
    document.getElementById("demeritPoints").innerHTML = `Your total demerit points are: ${demeritPoints}`;
  }