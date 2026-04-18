import React from "react";

const Form = () => {
  return (
    <form className="bg-cards border border-border p-6 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Kontaktujte nás
      </h2>
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
          rows="4"
          className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Vaša správa"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-foreground font-bold py-2 px-4 rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Odoslať
      </button>
    </form>
  );
};

export default Form;
