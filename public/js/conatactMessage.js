const contact_form = document.getElementById("contact_form");
const inputValFNAll = document.querySelectorAll(".inputValFN");

let formData = {}; // ডেটা সংরক্ষণের জন্য

// পেজ লোড হওয়ার সময় লোকাল স্টোরেজ থেকে ডেটা লোড করুন
const savedFormData = localStorage.getItem("formDataAuto");
if (savedFormData) {
  formData = JSON.parse(savedFormData);
  // লোড করা ডেটা দিয়ে ফর্ম ফিল্ড পূরণ করুন
  inputValFNAll.forEach((input) => {
    if (formData[input.name]) {
      input.value = formData[input.name];
    }
  });
}

// ইনপুট পরিবর্তনের সাথে সাথে formData আপডেট করুন
inputValFNAll.forEach((input) => {
  input.addEventListener("input", (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("formDataAuto", JSON.stringify(formData));
    console.log(formData);
  });
});

// ফর্ম সাবমিট হ্যান্ডেল করুন
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
      alert("Message Sent Successfully. We’ll contact you soon.");

      // ******** এখানে পরিবর্তন করা হয়েছে ********
      // ফর্ম সফলভাবে সাবমিট হওয়ার পর ইনপুট ফিল্ডগুলো খালি করুন
      inputValFNAll.forEach((input) => {
        input.value = ""; // দৃশ্যমান ইনপুট খালি করুন
      });
      formData = {}; // formData অবজেক্ট খালি করুন
      localStorage.removeItem("formDataAuto"); // লোকাল স্টোরেজ থেকে সেভ করা ডেটা মুছে ফেলুন
      // *****************************************

    } else {
      const error = result.message || "⚠️ Something went wrong.";
      alert(error);
    }

  } catch (error) {
    console.error("❌ Fetch Error:", error.message);
    alert("❌ Network error. Try again later.");
  }
});