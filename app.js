const form = document.querySelector("#searchForm");
const input = document.querySelector("#usernameInput");
const message = document.querySelector("#searchMessage");

function normalizeUsername(value) {
  return value.trim().replace(/^@+/, "");
}

function showLookup(username) {
  const clean = normalizeUsername(username);
  if (!clean) {
    message.textContent = "Enter a username to search.";
    input.focus();
    return;
  }
  if (!/^[a-zA-Z0-9._-]{1,64}$/.test(clean)) {
    message.textContent = "Use a valid username without spaces or special characters.";
    return;
  }

  input.value = clean;
  document.querySelector("#displayUsername").textContent = "@" + clean;
  document.querySelector("#enteredValue").textContent = clean;
  document.querySelector("#avatar").textContent = clean.charAt(0).toUpperCase();
  message.textContent = "Lookup prepared. This demo does not verify account existence or fetch Snapchat data.";
}

form.addEventListener("submit", event => {
  event.preventDefault();
  showLookup(input.value);
});

showLookup(input.value);
