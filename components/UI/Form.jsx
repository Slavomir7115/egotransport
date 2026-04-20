"use client";
import PrimaryButton from "@/components/UI/PrimaryButton";
import { Calendar } from "lucide-react";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);

    try {
      const response = await fetch("https://formspree.io/f/myklpvrw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/dakujeme";
      } else {
        const data = await response.json();
        alert(
          "Chyba: " +
            (data.errors
              ? data.errors.map((e) => e.message).join(", ")
              : "Nepodarilo sa odoslať."),
        );
      }
    } catch (error) {
      alert("Nastala chyba pri spojení so serverom.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cards border border-border p-6 rounded-lg shadow-md w-full mx-auto"
    >
      {/* Honeypot field to prevent spam */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <span className="flex flex-row items-center justify-start gap-2 mb-4">
        <Calendar className="text-primary" size={24} />
        <h2 className="text-2xl font-bold text-foreground">Kontaktujte nás</h2>
      </span>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Meno
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          placeholder="Vaše meno"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          placeholder="Váš email"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Správa
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          placeholder="Vaša správa"
        ></textarea>
      </div>

      <PrimaryButton type="submit">Odoslať</PrimaryButton>
    </form>
  );
};

export default Form;
