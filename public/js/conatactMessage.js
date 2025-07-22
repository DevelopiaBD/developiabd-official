const contact_form = document.getElementById("contact_form");
const inputValFNAll = document.querySelectorAll(".inputValFN");

let formData = {}; // Keep it outside

// Auto update formData on input change
inputValFNAll.forEach((input) => {
  input.addEventListener("input", (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("formDataAuto", JSON.stringify(formData));
    console.log(formData);
  });
});

// On form submit
contact_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://apidevoff.knowledgehut.online/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Message Sent Successfully. We’ll contact you soon.");
    } else {
      const error = result.message || "⚠️ Something went wrong.";
      alert(error);
    }

  } catch (error) {
    console.error("❌ Fetch Error:", error.message);
    alert("❌ Network error. Try again later.");
  }
});
