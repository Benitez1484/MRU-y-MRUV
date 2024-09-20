// Function to highlight the active page in the navigation
function setActiveNavButton() {
    const currentPage = window.location.pathname.split('/').pop();
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        if (button.getAttribute('href') === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Call setActiveNavButton when the page loads
document.addEventListener('DOMContentLoaded', setActiveNavButton);

// MRU Calculations

function calculateMRUVelocity() {
    const distance = parseFloat(document.getElementById('mru-distance').value);
    const time = parseFloat(document.getElementById('mru-time').value);
    const resultElement = document.getElementById('mru-velocity-result');
    
    if (isNaN(distance) || isNaN(time) || time === 0) {
        resultElement.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const velocity = distance / time;
    resultElement.textContent = `Velocidad: ${velocity.toFixed(2)} m/s`;
}

function calculateMRUTime() {
    const distance = parseFloat(document.getElementById('mru-distance-time').value);
    const velocity = parseFloat(document.getElementById('mru-velocity-time').value);
    const resultElement = document.getElementById('mru-time-result');
    
    if (isNaN(distance) || isNaN(velocity) || velocity === 0) {
        resultElement.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const time = distance / velocity;
    resultElement.textContent = `Tiempo: ${time.toFixed(2)} s`;
}

function calculateMRUDistance() {
    const velocity = parseFloat(document.getElementById('mru-velocity-dist').value);
    const time = parseFloat(document.getElementById('mru-time-dist').value);
    const resultElement = document.getElementById('mru-distance-result');
    
    if (isNaN(velocity) || isNaN(time)) {
        resultElement.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const distance = velocity * time;
    resultElement.textContent = `Distancia: ${distance.toFixed(2)} m`;
}

// MRUV Calculations

function calculateMRUVAcceleration() {
    const vi = parseFloat(document.getElementById('mruv-vi').value);
    const vf = parseFloat(document.getElementById('mruv-vf').value);
    const t = parseFloat(document.getElementById('mruv-t').value);
    const resultElement = document.getElementById('mruv-acceleration-result');
    
    if (isNaN(vi) || isNaN(vf) || isNaN(t) || t === 0) {
        resultElement.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const acceleration = (vf - vi) / t;
    resultElement.textContent = `Aceleración: ${acceleration.toFixed(2)} m/s²`;
}

function calculateMRUVDistance() {
    const vi = parseFloat(document.getElementById('mruv-vi-dist').value);
    const a = parseFloat(document.getElementById('mruv-a-dist').value);
    const t = parseFloat(document.getElementById('mruv-t-dist').value);
    const resultElement = document.getElementById('mruv-distance-result');
    
    if (isNaN(vi) || isNaN(a) || isNaN(t)) {
        resultElement.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const distance = vi * t + 0.5 * a * t * t;
    resultElement.textContent = `Distancia: ${distance.toFixed(2)} m`;
}

function calculateMRUVFinalVelocity() {
    const vi = parseFloat(document.getElementById('mruv-vi-vf').value);
    const a = parseFloat(document.getElementById('mruv-a-vf').value);
    const t = parseFloat(document.getElementById('mruv-t-vf').value);
    const resultElement = document.getElementById('mruv-final-velocity-result');
    
    if (isNaN(vi) || isNaN(a) || isNaN(t)) {
        resultElement.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const vf = vi + a * t;
    resultElement.textContent = `Velocidad Final: ${vf.toFixed(2)} m/s`;
}

// Add event listeners to buttons if they exist on the page
document.addEventListener('DOMContentLoaded', function() {
    // MRU Buttons
    const mruVelocityButton = document.querySelector('button[onclick="calculateMRUVelocity()"]');
    const mruTimeButton = document.querySelector('button[onclick="calculateMRUTime()"]');
    const mruDistanceButton = document.querySelector('button[onclick="calculateMRUDistance()"]');

    if (mruVelocityButton) mruVelocityButton.addEventListener('click', calculateMRUVelocity);
    if (mruTimeButton) mruTimeButton.addEventListener('click', calculateMRUTime);
    if (mruDistanceButton) mruDistanceButton.addEventListener('click', calculateMRUDistance);

    // MRUV Buttons
    const mruvAccelerationButton = document.querySelector('button[onclick="calculateMRUVAcceleration()"]');
    const mruvDistanceButton = document.querySelector('button[onclick="calculateMRUVDistance()"]');
    const mruvFinalVelocityButton = document.querySelector('button[onclick="calculateMRUVFinalVelocity()"]');

    if (mruvAccelerationButton) mruvAccelerationButton.addEventListener('click', calculateMRUVAcceleration);
    if (mruvDistanceButton) mruvDistanceButton.addEventListener('click', calculateMRUVDistance);
    if (mruvFinalVelocityButton) mruvFinalVelocityButton.addEventListener('click', calculateMRUVFinalVelocity);
});