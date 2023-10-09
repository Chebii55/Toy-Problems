// Calculate the PAYE (Pay As You Earn) tax.
function calculatePAYE(basicSalary) {
    // Get the PAYE rates from the KRA website.
    const PAYE_RATES = [
      {
        bracket: 0,
        rate: 0,
      },
      {
        bracket: 360000,
        rate: 0.25,
      },
      {
        bracket: 696000,
        rate: 0.3,
      },
      {
        bracket: 960000,
        rate: 0.35,
      },
      {
        bracket: Infinity,
        rate: 0.4,
      },
    ];

    // Find the PAYE rate for the given basic salary.
    let PAYE_RATE = 0;
    for (const rate of PAYE_RATES) {
      if (basicSalary <= rate.bracket) {
        PAYE_RATE = rate.rate;
        break;
      }
    }

    // Calculate the PAYE tax.
    const PAYE = basicSalary * PAYE_RATE;

    return PAYE;
  }

  // Calculate the NHIF (National Hospital Insurance Fund) deduction.
  function calculateNHIF(basicSalary) {
    const NHIF_RATE = 0.05; // 5% of basic salary
    const NHIF_DEDUCTION = basicSalary * NHIF_RATE;

    return NHIF_DEDUCTION;
  }

  // Calculate the NSSF (National Social Security Fund) deduction.
  function calculateNSSF(basicSalary) {
    const NSSF_RATE = 0.06; // 6% of basic salary
    const NSSF_DEDUCTION = basicSalary * NSSF_RATE;

    return NSSF_DEDUCTION;
  }

  // Calculate the net salary.
  function calculateNetSalary() {
    // Get the basic salary and benefits from the input fields.
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);

    // Calculate the gross salary.
    const grossSalary = basicSalary + benefits;

    // Calculate the PAYE, NHIF, and NSSF deductions.
    const PAYE = calculatePAYE(basicSalary);
    const NHIF_DEDUCTION = calculateNHIF(basicSalary);
    const NSSF_DEDUCTION = calculateNSSF(basicSalary);

    // Calculate the net salary.
    const netSalary = grossSalary - PAYE - NHIF_DEDUCTION - NSSF_DEDUCTION;

    // Display the net salary.
    document.getElementById("netSalary").innerHTML = `Your net salary is: ${netSalary}`;
  }