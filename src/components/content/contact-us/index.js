import { Layout, Modal } from "antd";
import { useState, useEffect } from "react";
import "./style4.css";

function Content4Component() {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otherInterest, setOtherInterest] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle change for the interest selection
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedInterest(selectedValue);

    // Reset the otherInterest if not "other"
    if (selectedValue !== "other") {
      setOtherInterest(""); // Reset the otherInterest value when user selects anything other than "other"
    }
  };

  // Function to send incomplete data
  const sendIncompleteData = () => {
    const incompleteData = new URLSearchParams({
      customer_name: name || "",
      customer_email: email || "",
      customer_phone: phone || "",
      customer_interest_level: selectedInterest || "",
      additional_interest: selectedInterest === "other" ? otherInterest : "",
    });

    fetch(
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzY1MjY0NTUzMDUxM2Ii_pc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: incompleteData.toString(),
      }
    )
      .then((response) => {
        console.log("Incomplete Data Sent - Status:", response.status);
      })
      .catch((error) => {
        console.error("Error Sending Incomplete Data:", error);
      });
  };

  // Event handler for page unload (refresh/close)
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Trigger only if there's data and the form isn't submitted
      if (name || email || phone || selectedInterest || otherInterest) {
        sendIncompleteData();
      }

      // Prevent default unload behavior (Optional: Shows confirmation on close/refresh)
      event.preventDefault();
      event.returnValue = ""; // For some browsers to display a confirmation dialog
    };

    // Add the beforeunload event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [name, email, phone, selectedInterest, otherInterest]);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare URL-encoded form data
    const formData = new URLSearchParams({
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      customer_interest_level: selectedInterest,
      additional_interest: selectedInterest === "other" ? otherInterest : "",
    });

    // Send form data to Pabbly Connect
    fetch(
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzY1MjY0NTUzNzUxMzUi_pc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )
      .then((response) => {
        console.log("Response Status:", response.status);
        return response.text();
      })
      .then((data) => {
        console.log("Success:", data);
        setIsModalVisible(true); // Open modal after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsModalVisible(true); // Optionally, show an error modal
      });
  };

  // Handle modal close
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout id="contact" className="ContentContact">
      <section className="form">
        <h2>Inscrivez-vous maintenant</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select value={selectedInterest} onChange={handleSelectChange} required>
            <option value="" disabled>
              Intérêt pour le service (niveau d'anglais, objectif d'apprentissage, etc.)
            </option>
            <option value="beginner">Débutant</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
            <option value="other">Autre</option>
          </select>

          {selectedInterest === "other" && (
            <input
              type="text"
              placeholder="Veuillez préciser"
              value={otherInterest}
              onChange={(e) => setOtherInterest(e.target.value)}
            />
          )}

          <button type="submit">Submit</button>
        </form>
      </section>

      <Modal
        title="Formulaire soumis"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="ok" onClick={handleOk}>
            OK
          </button>,
        ]}
      >
        <p>Votre formulaire a été soumis avec succès !</p>
      </Modal>
    </Layout>
  );
}

export default Content4Component;
