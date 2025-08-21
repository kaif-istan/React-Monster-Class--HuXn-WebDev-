import { useState, type ChangeEvent, type FormEvent } from "react";

interface ContactFormState {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>
          <label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
        </span>
        <span>
          <label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </span>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Name: {formData.name}</h2>
        <h2>Email: {formData.email}</h2>
      </div>
    </>
  );
};

export default ContactForm;
