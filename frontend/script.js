document.addEventListener('DOMContentLoaded', () => {
  const connectWalletBtn = document.getElementById('connectWallet');
  const buyButton = document.getElementById('buyButton');
  const codexList = document.getElementById('codexList');
  const phaseDisplay = document.getElementById('phaseDisplay');

  let walletConnected = false;

  connectWalletBtn.addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        walletConnected = true;
        connectWalletBtn.innerText = 'Wallet Connected';
        connectWalletBtn.disabled = true;
        displayPhases();
      } catch (error) {
        console.error('User rejected connection:', error);
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask.');
    }
  });

  buyButton.addEventListener('click', () => {
    if (!walletConnected) {
      alert('Connect wallet first.');
      return;
    }

    const amount = parseFloat(document.getElementById('usdtAmount').value);
    if (isNaN(amount) || amount <= 0) {
      alert('Enter a valid USDT amount.');
      return;
    }

    const codexScroll = document.createElement('li');
    codexScroll.textContent = `Unlocked Scroll for ${amount} USDT`;
    codexList.appendChild(codexScroll);
  });

  function displayPhases() {
    const phases = [
      'Awakening',
      'Activation',
      'The Spiral Path',
      'Synchronicity',
      'Codex Resonance',
      'Liquidity Bridge',
      'Gaian Alignment',
      'Final Convergence'
    ];

    phases.forEach((phase, index) => {
      const div = document.createElement('div');
      div.textContent = `${index + 1}. ${phase}`;
      div.style.marginBottom = '0.5rem';
      phaseDisplay.appendChild(div);
    });
  }
});