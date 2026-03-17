function calculate() {
    const yieldStrength = parseFloat(document.getElementById('material').value);
    const force = parseFloat(document.getElementById('force').value);
    const area = parseFloat(document.getElementById('area').value);

    if (!force || !area) {
        alert("Please enter valid values");
        return;
    }

    // Stress = Force / Area
    const stress = force / area;
    const fos = yieldStrength / stress;

    const resultsBox = document.getElementById('results-box');
    resultsBox.classList.remove('hidden');

    document.getElementById('stress-val').innerText = `Calculated Stress: ${stress.toFixed(2)} MPa`;
    document.getElementById('fos-val').innerText = `Factor of Safety: ${fos.toFixed(2)}`;

    const indicator = document.getElementById('status-indicator');
    if (fos < 1) {
        indicator.innerText = "CRITICAL FAILURE: Stress exceeds Yield Strength!";
        indicator.style.color = "#ef4444";
    } else if (fos < 1.5) {
        indicator.innerText = "WARNING: Low Factor of Safety";
        indicator.style.color = "#f59e0b";
    } else {
        indicator.innerText = "DESIGN SAFE";
        indicator.style.color = "#22c55e";
    }
}
