"use client";
import PrimaryButton from "@/components/UI/PrimaryButton";
import { Calendar } from "lucide-react";

const Form = () => {
  return (
    <form
      name="kontaktny-formular"
      method="POST"
      action="/dakujeme"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-cards border border-border p-6 rounded-lg shadow-md w-full mx-auto"
    >
      {/* Netlify hidden input */}
      <input type="hidden" name="form-name" value="kontaktny-formular" />

      {/* honeypot */}
      <p className="hidden">
        <label>
          Toto pole nevypĺňajte: <input name="bot-field" />
        </label>
      </p>

      <span className="flex flex-row items-center gap-2 mb-4">
        <Calendar className="text-primary" size={24} />
        <h2 className="text-2xl font-bold text-foreground">Kontaktujte nás</h2>
      </span>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Meno</label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 border rounded"
          placeholder="Vaše meno"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 border rounded"
          placeholder="Váš email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Správa</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full p-2 border rounded"
          placeholder="Vaša správa"
        />
      </div>

      <PrimaryButton type="submit">Odoslať</PrimaryButton>
    </form>
  );
};

export default Form;
