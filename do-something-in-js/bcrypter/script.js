window.addEventListener('load', function() {
  // Get DOM elements
  const passwordInput = document.getElementById("passwordInput");
  const saltRoundsSelector = document.getElementById("saltRounds");
  const hashResult = document.getElementById("hashResult");
  const generateBtn = document.getElementById("generateBtn");
  const clearHashBtn = document.getElementById("clearHashBtn");
  
  const verifyPasswordInput = document.getElementById("verifyPassword");
  const verifyHash = document.getElementById("verifyHash");
  const verifyBtn = document.getElementById("verifyBtn");
  const clearVerifyBtn = document.getElementById("clearVerifyBtn");
  const verifyResult = document.getElementById("verifyResult");
  const verifyResultText = document.getElementById("verifyResultText");

  // Check if bcryptjs is loaded and get the correct reference
  let bcryptLib;
  if (typeof bcrypt !== 'undefined') {
    bcryptLib = bcrypt;
  } else if (typeof dcodeIO !== 'undefined' && dcodeIO.bcrypt) {
    bcryptLib = dcodeIO.bcrypt;
  } else if (typeof window.bcrypt !== 'undefined') {
    bcryptLib = window.bcrypt;
  } else {
    console.error('bcryptjs library not loaded properly');
    document.getElementById('hashResult').innerHTML = '<em class="text-danger">Error: BCrypt library failed to load. Please refresh the page.</em>';
    return;
  }

  async function hashPassword(password, saltRounds) {
    try {
      const salt = bcryptLib.genSaltSync(parseInt(saltRounds));
      const hash = bcryptLib.hashSync(password, salt);
      return hash;
    } catch (error) {
      throw new Error('Error hashing password: ' + error.message);
    }
  }

  function checkPassword(password, hash) {
    try {
      return bcryptLib.compareSync(password, hash);
    } catch (error) {
      throw new Error('Error verifying password: ' + error.message);
    }
  }

  function handleClearHash() {
    passwordInput.value = "";
    saltRoundsSelector.value = "10";
    hashResult.innerHTML = '<em class="text-muted">Generated hash will appear here...</em>';
  }

  function handleClearVerify() {
    verifyPasswordInput.value = "";
    verifyHash.value = "";
    verifyResult.style.display = "none";
  }

  // Generate hash event listener
  generateBtn.addEventListener("click", async () => {
    const password = passwordInput.value.trim();
    const saltRounds = saltRoundsSelector.value;

    if (!password) {
      hashResult.innerHTML = '<em class="text-danger">Please enter a password</em>';
      return;
    }

    try {
      generateBtn.disabled = true;
      generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating...';
      
      const hash = await hashPassword(password, saltRounds);
      hashResult.innerHTML = `<code style="word-break: break-all;">${hash}</code>`;
    } catch (error) {
      hashResult.innerHTML = `<em class="text-danger">Error: ${error.message}</em>`;
    } finally {
      generateBtn.disabled = false;
      generateBtn.innerHTML = '<i class="fas fa-cog me-2"></i>Generate Hash';
    }
  });

  // Verify password event listener
  verifyBtn.addEventListener("click", () => {
    const password = verifyPasswordInput.value.trim();
    const hash = verifyHash.value.trim();

    if (!password || !hash) {
      verifyResult.className = "alert alert-warning";
      verifyResultText.textContent = "Please enter both password and hash";
      verifyResult.style.display = "block";
      return;
    }

    try {
      verifyBtn.disabled = true;
      verifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Verifying...';

      const isValid = checkPassword(password, hash);
      
      if (isValid) {
        verifyResult.className = "alert alert-success";
        verifyResultText.innerHTML = '<i class="fas fa-check-circle me-2"></i>Password matches the hash!';
      } else {
        verifyResult.className = "alert alert-danger";
        verifyResultText.innerHTML = '<i class="fas fa-times-circle me-2"></i>Password does not match the hash!';
      }
      
      verifyResult.style.display = "block";
    } catch (error) {
      verifyResult.className = "alert alert-danger";
      verifyResultText.innerHTML = `<i class="fas fa-exclamation-triangle me-2"></i>Error: ${error.message}`;
      verifyResult.style.display = "block";
    } finally {
      verifyBtn.disabled = false;
      verifyBtn.innerHTML = '<i class="fas fa-shield-alt me-2"></i>Verify Password';
    }
  });

  // Clear buttons event listeners
  clearHashBtn.addEventListener("click", handleClearHash);
  clearVerifyBtn.addEventListener("click", handleClearVerify);

  // Enter key support
  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      generateBtn.click();
    }
  });

  verifyPasswordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      verifyBtn.click();
    }
  });

  verifyHash.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      verifyBtn.click();
    }
  });
});