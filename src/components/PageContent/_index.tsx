import React, { FormEvent } from "react";
import { LandingDiscount } from "../landing/discount/LandingDiscount";

const FormSection: React.FC = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
  
    // Extract form field values
    const fullName = (form["full-name"] as HTMLInputElement).value;
    const email = (form["email"] as HTMLInputElement).value;
    const phone = (form["phone"] as HTMLInputElement)?.value || "";
    const currentLevel = (form["current-level"] as HTMLSelectElement).value;
    const goal = (form["goal"] as HTMLSelectElement).value;
    const availability = (form["availability"] as HTMLInputElement).value;
  
    // Determine if the form is complete
    const isFormComplete =
      fullName && email && currentLevel && goal && availability;
  
    // Create URLSearchParams for form data
    const formData = new URLSearchParams({
      "full-name": fullName,
      email: email,
      phone: phone,
      "current-level": currentLevel,
      goal: goal,
      availability: availability,
      is_complete: isFormComplete ? "Yes" : "No",
    });
  
    console.log("Form Data to be sent:", formData.toString());
  
    // Webhook URLs
    const webhookUrlComplete =
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzY1MjZjNTUzNjUxMzYi_pc";
    const webhookUrlIncomplete =
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzY1MjZhNTUzNzUxMzIi_pc";
  
    // Choose the appropriate webhook based on form completion
    const webhookUrl = isFormComplete ? webhookUrlComplete : webhookUrlIncomplete;
  
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
  
      if (response.ok) {
        const responseBody = await response.text();
        console.log("Form submitted successfully", responseBody);
        form.reset();
      } else {
        console.error("Form submission failed", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  

  return (
    <>
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
          <div className="mb-5">
            <label
              htmlFor="full-name"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="shadow-sm w-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="John Doe"
              
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="exemple@mail.com"
              
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Numéro de téléphone (optionnel)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="+212 6 12 34 56 78"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="current-level"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Niveau d'anglais actuel
            </label>
            <select
              id="current-level"
              name="current-level"
              className="shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              
            >
              <option value="" disabled selected>
                Choisissez votre niveau
              </option>
              <option value="beginner">Débutant</option>
              <option value="intermediate">Intermédiaire</option>
              <option value="advanced">Avancé</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="goal"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Objectif principal
            </label>
            <select
              id="goal"
              name="goal"
              className="shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              
            >
              <option value="" disabled selected>
                Choisissez votre objectif
              </option>
              <option value="general">
                Améliorer mes compétences générales
              </option>
              <option value="certification">
                Préparer une certification (TOEFL, IELTS)
              </option>
              <option value="job">Réussir un entretien d'embauche</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="availability"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
            >
              Disponibilités pour le cours d’essai
            </label>
            <input
              type="datetime-local"
              id="availability"
              name="availability"
              className="shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              
            />
          </div>

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
    </>
  );
};

export default FormSection;
