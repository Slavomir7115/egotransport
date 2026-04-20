import PrimaryButton from "@/components/UI/PrimaryButton";
import { Calendar } from "lucide-react";

const Form = () => {
  return (
    <form
      name="kontakt-formular"
      method="POST"
      honeypot="bot-field"
      action="/dakujeme"
      className="bg-cards border border-border p-6 rounded-lg shadow-md w-full mx-auto"
    >
      {/* hidden input for netlify */}
      <input type="hidden" name="form-name" value="kontakt-formular" />
      {/* honeypot field */}
      <p className="hidden">
        <label>
          Toto pole nevypĺňajte: <input name="bot-field" />
        </label>
      </p>

      <span className="flex flex-row items-center justify-start gap-2 mb-4 ">
        <Calendar className="text-primary" size={24} />

        <h2 className="text-2xl font-bold text-foreground ">Kontaktujte nás</h2>
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
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Vaša správa"
        ></textarea>
      </div>

      <PrimaryButton type="submit">Odoslať</PrimaryButton>
    </form>
  );
};
export default Form;
