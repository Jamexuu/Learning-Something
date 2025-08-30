document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const inputText = document.getElementById('inputText');
    const hashType = document.getElementById('hashType');
    const generateBtn = document.getElementById('generateBtn');
    const generateAllBtn = document.getElementById('generateAllBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const hashResults = document.getElementById('hashResults');

    // Hash algorithms available
    const algorithms = [
        { name: 'MD5', key: 'md5' },
        { name: 'SHA-1', key: 'sha1' },
        { name: 'SHA-224', key: 'sha224' },
        { name: 'SHA-256', key: 'sha256' },
        { name: 'SHA-384', key: 'sha384' },
        { name: 'SHA-512', key: 'sha512' },
        { name: 'SHA-3', key: 'sha3' }
    ];

    // Check if CryptoJS is loaded
    if (typeof CryptoJS === 'undefined') {
        showToast('Error: CryptoJS library not loaded. Please refresh the page.', 'error');
        return;
    }

    // Generate hash function
    function generateHash(text, algorithm) {
        if (!text.trim()) {
            showToast('Please enter some text to hash', 'warning');
            return null;
        }

        try {
            let hash;
            switch (algorithm) {
                case 'md5':
                    hash = CryptoJS.MD5(text).toString();
                    break;
                case 'sha1':
                    hash = CryptoJS.SHA1(text).toString();
                    break;
                case 'sha224':
                    hash = CryptoJS.SHA224(text).toString();
                    break;
                case 'sha256':
                    hash = CryptoJS.SHA256(text).toString();
                    break;
                case 'sha384':
                    hash = CryptoJS.SHA384(text).toString();
                    break;
                case 'sha512':
                    hash = CryptoJS.SHA512(text).toString();
                    break;
                case 'sha3':
                    hash = CryptoJS.SHA3(text).toString();
                    break;
                default:
                    throw new Error('Unsupported algorithm');
            }
            return hash;
        } catch (error) {
            showToast(`Error generating ${algorithm.toUpperCase()} hash: ${error.message}`, 'error');
            return null;
        }
    }

    // Display single hash result
    function displayHashResult(algorithm, hash) {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'col-12 hash-result-item';
        resultDiv.innerHTML = `
            <div class="hash-result">
                <span class="hash-label">${algorithm}</span>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="hash-value">${hash}</span>
                    <button class="btn btn-sm btn-outline-primary copy-btn" onclick="copyToClipboard('${hash}', this)">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            </div>
        `;
        return resultDiv;
    }

    // Display all hash results
    function displayResults(text, selectedAlgorithm = null) {
        hashResults.innerHTML = '';

        if (selectedAlgorithm) {
            // Generate single hash
            const hash = generateHash(text, selectedAlgorithm);
            if (hash) {
                const algorithmName = algorithms.find(alg => alg.key === selectedAlgorithm)?.name || selectedAlgorithm.toUpperCase();
                const resultDiv = displayHashResult(algorithmName, hash);
                hashResults.appendChild(resultDiv);
            }
        } else {
            // Generate all hashes
            algorithms.forEach((algorithm, index) => {
                const hash = generateHash(text, algorithm.key);
                if (hash) {
                    const resultDiv = displayHashResult(algorithm.name, hash);
                    resultDiv.style.animationDelay = `${index * 0.1}s`;
                    hashResults.appendChild(resultDiv);
                }
            });
        }
    }

    // Copy to clipboard function
    window.copyToClipboard = function(text, button) {
        navigator.clipboard.writeText(text).then(() => {
            const icon = button.querySelector('i');
            const originalClass = icon.className;
            icon.className = 'fas fa-check';
            button.classList.add('copy-success');
            
            setTimeout(() => {
                icon.className = originalClass;
                button.classList.remove('copy-success');
            }, 1000);
            
            showToast('Hash copied to clipboard!', 'success');
        }).catch(() => {
            showToast('Failed to copy to clipboard', 'error');
        });
    };

    // Show toast notification
    function showToast(message, type = 'info') {
        // Create toast container if it doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        const toastId = 'toast-' + Date.now();
        const bgClass = type === 'error' ? 'bg-danger' : type === 'warning' ? 'bg-warning' : type === 'success' ? 'bg-success' : 'bg-info';
        
        const toastHTML = `
            <div id="${toastId}" class="toast ${bgClass} text-white" role="alert">
                <div class="toast-body">
                    <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : type === 'warning' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
                    ${message}
                </div>
            </div>
        `;
        
        toastContainer.insertAdjacentHTML('beforeend', toastHTML);
        const toastElement = document.getElementById(toastId);
        const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
        toast.show();
        
        toastElement.addEventListener('hidden.bs.toast', () => {
            toastElement.remove();
        });
    }

    // Event listeners
    generateBtn.addEventListener('click', () => {
        const text = inputText.value;
        const algorithm = hashType.value;
        
        if (!text.trim()) {
            showToast('Please enter some text to hash', 'warning');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating...';
        
        setTimeout(() => {
            displayResults(text, algorithm);
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-cog me-2"></i>Generate Hash';
        }, 500);
    });

    generateAllBtn.addEventListener('click', () => {
        const text = inputText.value;
        
        if (!text.trim()) {
            showToast('Please enter some text to hash', 'warning');
            return;
        }

        generateAllBtn.disabled = true;
        generateAllBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating...';
        
        setTimeout(() => {
            displayResults(text);
            generateAllBtn.disabled = false;
            generateAllBtn.innerHTML = '<i class="fas fa-magic me-2"></i>Generate All';
        }, 500);
    });

    clearBtn.addEventListener('click', () => {
        inputText.value = '';
        hashResults.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    <i class="fas fa-info-circle me-2"></i>
                    Enter text and click "Generate Hash" to see results
                </div>
            </div>
        `;
        showToast('All fields cleared', 'info');
    });

    copyAllBtn.addEventListener('click', () => {
        const hashValues = Array.from(document.querySelectorAll('.hash-value')).map(el => el.textContent);
        if (hashValues.length === 0) {
            showToast('No hashes to copy', 'warning');
            return;
        }
        
        const allHashes = hashValues.join('\n');
        navigator.clipboard.writeText(allHashes).then(() => {
            showToast('All hashes copied to clipboard!', 'success');
        }).catch(() => {
            showToast('Failed to copy to clipboard', 'error');
        });
    });

    downloadBtn.addEventListener('click', () => {
        const text = inputText.value;
        const hashElements = document.querySelectorAll('.hash-result');
        
        if (hashElements.length === 0) {
            showToast('No hashes to download', 'warning');
            return;
        }

        let content = `Hash Generator Results\n`;
        content += `Original Text: ${text}\n`;
        content += `Generated on: ${new Date().toLocaleString()}\n`;
        content += `${'='.repeat(50)}\n\n`;

        hashElements.forEach(hashEl => {
            const label = hashEl.querySelector('.hash-label').textContent;
            const value = hashEl.querySelector('.hash-value').textContent;
            content += `${label}: ${value}\n`;
        });

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `hashes_${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('Hash results downloaded!', 'success');
    });

    // Enter key support
    inputText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            generateBtn.click();
        }
    });

    // Auto-resize textarea
    inputText.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});
