import { useState } from "react";
import "./Exam.css";

export default function FormPage() {
  const [formData, setFormData] = useState({
    url: "",
    classic: false,
    class: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="Exam">
      <div className="container">
        <h2>Form Page</h2>
        <form>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter URL"
            className="input-field"
          />

          <label className="checkbox-label">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                name="classic"
                checked={formData.classic}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </div>
            <h4>Classic</h4>
          </label>

          <section className="sapak">Sapak bölümi</section>

          <label className="checkbox-label">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                name="class"
                checked={formData.class}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </div>
            <h4>9 A</h4>
            <div className="custom-checkbox">
              <input
                type="checkbox"
                name="class"
                checked={formData.class}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </div>
            <h4>9 B</h4>
            <div className="custom-checkbox">
              <input
                type="checkbox"
                name="class"
                checked={formData.class}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </div>
            <h4>9 C</h4>
          </label>
          <button type="submit">Let's GO</button>
        </form>
      </div>
    </div>
  );
}
