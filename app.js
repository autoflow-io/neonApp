const CLIENT_KEY = "sbaw1jddcumh1ke2mq";
const REDIRECT_URI = "https://autoflow-io.github.io/neonApp/";
const SCOPES = "user.info.basic,video.upload";

const loginBtn = document.getElementById("loginBtn");
const resultBox = document.getElementById("result");
const authCodeEl = document.getElementById("authCode");

loginBtn.addEventListener("click", () => {
  const authUrl =
    `https://www.tiktok.com/v2/auth/authorize` +
    `?client_key=${CLIENT_KEY}` +
    `&response_type=code` +
    `&scope=${SCOPES}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&state=neon`;

  window.location.href = authUrl;
});

// Show auth code after redirect
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  resultBox.classList.remove("hidden");
  authCodeEl.textContent = code;
}
