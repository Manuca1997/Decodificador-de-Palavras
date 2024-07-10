document.addEventListener('DOMContentLoaded', (event) => {
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const copyButton = document.getElementById('copy-button');
    const pasteButton = document.getElementById('paste-button');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const defaultImage = document.getElementById('default-image');
    const encryptedImage = document.getElementById('encrypted-image');
    const decryptedImage = document.getElementById('decrypted-image');
    const encryptedMessage = document.getElementById('encrypted-message');
    const decryptedMessage = document.getElementById('decrypted-message');

    // Função para criptografar o texto
    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        const encryptedText = btoa(text); // Simples base64 encoding
        outputText.value = encryptedText;
        defaultImage.style.display = 'none';
        encryptedImage.style.display = 'block';
        decryptedImage.style.display = 'none';
        encryptedMessage.style.display = 'block';
        decryptedMessage.style.display = 'none';
    });

    // Função para descriptografar o texto
    decryptButton.addEventListener('click', () => {
        const text = inputText.value;
        const decryptedText = atob(text); // Simples base64 decoding
        outputText.value = decryptedText;
        defaultImage.style.display = 'none';
        encryptedImage.style.display = 'none';
        decryptedImage.style.display = 'block';
        encryptedMessage.style.display = 'none';
        decryptedMessage.style.display = 'block';
    });

    // Função para copiar o texto
    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });

    // Função para colar o texto
    pasteButton.addEventListener('click', async () => {
        const text = await navigator.clipboard.readText();
        inputText.value = text;
    });

    // Funções de modo claro e escuro
    const lightModeButton = document.getElementById('light-mode');
    const darkModeButton = document.getElementById('dark-mode');

    lightModeButton.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
    });

    darkModeButton.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
    });

    // Funções de hover para pré-visualização de tema
    lightModeButton.addEventListener('mouseover', () => {
        document.body.classList.add('light-hover');
    });
    lightModeButton.addEventListener('mouseout', () => {
        document.body.classList.remove('light-hover');
    });

    darkModeButton.addEventListener('mouseover', () => {
        document.body.classList.add('dark-hover');
    });
    darkModeButton.addEventListener('mouseout', () => {
        document.body.classList.remove('dark-hover');
    });
});
