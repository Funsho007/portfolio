document.getElementById("contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseText = document.getElementById("response");

    try {
        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();
        responseText.innerText = data.message;
        responseText.style.color = "green";
        document.getElementById("contact-form").reset();
    } catch (error) {
        responseText.innerText = "Failed to send message.";
        responseText.style.color = "red";
    }
});
