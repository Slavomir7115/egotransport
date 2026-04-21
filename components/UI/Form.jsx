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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1 required"
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

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1 required"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-1 required"
          >
            Telefónne číslo
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Zadajte telefónne číslo"
          />
        </div>

        <div>
          <label
            htmlFor="moveType"
            className="block text-sm font-medium text-foreground mb-1 required"
          >
            Typ nehnuteľnosti
          </label>
          <select
            id="moveType"
            name="moveType"
            required
            className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">Vyberte možnosť</option>
            <option value="familyHouse">Rodinný dom</option>
            <option value="apartment">Panelák</option>
            <option value="company">Firma</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="fromLocation"
            className="block text-sm font-medium text-foreground mb-1 required"
          >
            Odkiaľ sa sťahujete
          </label>
          <input
            type="text"
            id="fromLocation"
            name="fromLocation"
            required
            className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Zadajte miesto"
          />
        </div>

        <div>
          <label
            htmlFor="toLocation"
            className="block text-sm font-medium text-foreground mb-1 required"
          >
            Kam sa sťahujete
          </label>
          <input
            type="text"
            id="toLocation"
            name="toLocation"
            required
            className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Zadajte miesto"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="elevatorAvailability"
          className="block text-sm font-medium text-foreground mb-1 "
        >
          Je v dostupnosti výťah?
        </label>
        <select
          id="elevatorAvailability"
          name="elevatorAvailability"
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
        >
          <option value="">Vyberte možnosť</option>
          <option value="yes">Áno</option>
          <option value="no">Nie</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1 "
        >
          Vaša správa
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          placeholder="Napíšte nám viac o vašom sťahovaní, špeciálnych požiadavkách alebo otázkach."
        />
      </div>

      <PrimaryButton type="submit">Odoslať</PrimaryButton>
    </form>
  );
};

export default Form;
