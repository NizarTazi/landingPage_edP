import React, { useState } from "react";
import { LandingDiscount } from "../landing/discount/LandingDiscount";

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    "full-name": "",
    email: "",
    phone: "",
    "current-level": "",
    goal: "",
    availability: "",
  });

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isFormIncomplete, setIsFormIncomplete] = useState<boolean>(false);

  // Check if the form is incomplete
  const checkFormCompletion = () => {
    const requiredFields = [
      formData["full-name"],
      formData.email,
      formData["current-level"],
      formData.goal,
      formData.availability,
    ];
    return requiredFields.some((field) => field === "");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Check if the form is incomplete
    setIsFormIncomplete(checkFormCompletion());

    // Clear existing debounce timer
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set new debounce timer (10 seconds of inactivity)
    const newTimeout = setTimeout(() => {
      if (isFormIncomplete) {
        sendIncompleteFormToGoogleSheets(formData); // Send incomplete form data if necessary
      }
    }, 20000); // Delay is 10 seconds

    setTypingTimeout(newTimeout);
  };

  const sendIncompleteFormToGoogleSheets = async (data: typeof formData) => {
    try {
      console.log("Sending incomplete form data to Google Sheets:", data);
      const webhookUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzY1MjZiNTUzMzUxMzIi_pc";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        console.log("Incomplete form data sent successfully");
      } else {
        console.error("Failed to send incomplete form data");
      }
    } catch (error) {
      console.error("Error sending incomplete form data:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission (complete form)
    sendCompleteFormToGoogleSheets(formData);
    
    // Reset form data after submission
    setFormData({
      "full-name": "",
      email: "",
      phone: "",
      "current-level": "",
      goal: "",
      availability: "",
    });
    console.log("Form submitted:", formData);
  };

  const sendCompleteFormToGoogleSheets = async (data: typeof formData) => {
    try {
      console.log("Sending complete form data to Google Sheets:", data);
      const webhookUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzQ1MjY5NTUzNzUxMzAi_pc";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        console.log("Complete form data sent successfully");
      } else {
        console.error("Failed to send complete form data");
      }
    } catch (error) {
      console.error("Error sending complete form data:", error);
    }
  };

  return (
    <section className="w-full flex justify-center items-center py-12 lg:py-16 flex-col relative isolate overflow-hidden">
        <div className="w-full p-6 max-w-full container-wide relative flex flex-col items-center">
          <h2 className="text-center text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl">
            Réservez votre cours maintenant !
          </h2>
          <p className="mt-6 md:text-xl">
            Réservez votre place en seulement quelques clics et commencez votre
            parcours vers la maîtrise de l'anglais. Nos enseignants experts sont
            prêts à vous accompagner à chaque étape.
          </p>
        </div>
<form className="w-[600px]" onSubmit={handleSubmit}>
  {/* Full Name */}
  <div className="mb-5">
    <label htmlFor="full-name" className="block mb-2 text-sm font-semibold">
      Nom complet
    </label>
    <input
      type="text"
      id="full-name"
      name="full-name"
      value={formData["full-name"]}
      onChange={handleInputChange}
      required
      className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
    />
  </div>

  {/* Email */}
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-semibold">
      Adresse e-mail
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
      className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
    />
  </div>

  {/* Phone */}
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-semibold">
      Numéro de téléphone (optionnel)
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
      placeholder="+212 6 12 34 56 78"
    />
  </div>

  {/* Current Level */}
  <div className="mb-5">
    <label htmlFor="current-level" className="block mb-2 text-sm font-semibold">
      Niveau d'anglais actuel
    </label>
    <select
      id="current-level"
      name="current-level"
      value={formData["current-level"]}
      onChange={handleInputChange}
      required
      className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
    >
      <option value="" disabled>
        Choisissez votre niveau
      </option>
      <option value="beginner">Débutant</option>
      <option value="intermediate">Intermédiaire</option>
      <option value="advanced">Avancé</option>
    </select>
  </div>

  {/* Goal */}
  <div className="mb-5">
    <label htmlFor="goal" className="block mb-2 text-sm font-semibold">
      Objectif principal
    </label>
    <select
      id="goal"
      name="goal"
      value={formData.goal}
      required
      onChange={handleInputChange}
      className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
    >
      <option value="" disabled>
        Choisissez votre objectif
      </option>
      <option value="general">Améliorer mes compétences générales</option>
      <option value="certification">Préparer une certification (TOEFL, IELTS)</option>
      <option value="job">Réussir un entretien d'embauche</option>
      <option value="other">Autre</option>
    </select>
  </div>

  {/* Availability */}
  <div className="mb-5">
    <label htmlFor="availability" className="block mb-2 text-sm font-semibold">
      Disponibilités pour le cours d’essai
    </label>
    <input
      type="datetime-local"
      id="availability"
      name="availability"
      required
      value={formData.availability}
      onChange={handleInputChange}
      className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary-300/70 text-primary-foreground hover:bg-primary-300/90 h-12 px-10 py-2"
  >
    Réserver maintenant
  </button>
</form>
<LandingDiscount
          discountValueText="70% de réduction"
          discountDescriptionText="pour les 10 premiers clients ! (2 restants)"
        />
</section>

  );
};

export default FormSection;
