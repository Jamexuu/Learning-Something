document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('binomialForm');
    const clearBtn = document.getElementById('clearBtn');
    const resultsDiv = document.getElementById('results');

    function factorial(n){
        if (n == 0 || n == 1){ return 1;}
        return n * factorial(n - 1);
    }
    
    function calculateBinomial(trials, probability, successes){
        return (factorial(trials) / (factorial(successes) * factorial(trials - successes))) * Math.pow(probability, successes) * Math.pow(1 - probability, trials - successes);
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const trials = document.getElementById('trials').value;
        const probability = document.getElementById('probability').value;
        const successes = document.getElementById('successes').value;
        
        // Validate inputs
        if (!trials || !probability || successes === null || successes === undefined) {
            alert('Please fill in all fields');
            return;
        }

        if (trials <= 0 || probability < 0 || probability > 1 || successes < 0 || successes > trials) {
            alert('Please enter valid values:\n- Trials must be positive\n- Probability must be between 0 and 1\n- Successes must be between 0 and trials');
            return;
        }

        // Calculate results
        const exactProb = calculateBinomial(trials, probability, successes);
        const variance = trials * probability * (1 - probability);
        const standardDev = Math.sqrt(variance);
        
        showResults(
            exactProb.toFixed(6),
            variance.toFixed(4),
            standardDev.toFixed(4)
        );
    });

    // Handle clear button
    clearBtn.addEventListener('click', function() {
        form.reset();
        resultsDiv.style.display = 'none';
        console.log('Form cleared');
    });
    
    window.showResults = function(exactProb, variance, standardDev) {
        document.getElementById('exactProb').textContent = exactProb || '-';
        document.getElementById('variance').textContent = variance || '-';
        document.getElementById('standardDev').textContent = standardDev || '-';
        
        resultsDiv.style.display = 'block';
    };
});
