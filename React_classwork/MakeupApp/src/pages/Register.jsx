import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    qualification: "",
    percentGrade: "",
    course: "",
    batches: [],
    address: "",
    city: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBatchChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      batches: checked
        ? [...prev.batches, value]
        : prev.batches.filter((b) => b !== value),
    }));

    setErrors((prev) => ({ ...prev, batches: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.mobileNumber)
      newErrors.mobileNumber = "Mobile number is required";
    else if (formData.mobileNumber.length !== 10)
      newErrors.mobileNumber = "Mobile number must be 10 digits";

    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";

    if (!formData.qualification)
      newErrors.qualification = "Qualification is required";

    if (!formData.percentGrade)
      newErrors.percentGrade = "Percent / Grade is required";

    if (!formData.course) newErrors.course = "Course is required";

    if (formData.batches.length === 0)
      newErrors.batches = "Select at least one batch";

    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.pinCode) newErrors.pinCode = "Pin code is required";
    else if (formData.pinCode.length !== 4)
      newErrors.pinCode = "Pin code must be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(formData);
    toast.success("Registration Successful!");

    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
      qualification: "",
      percentGrade: "",
      course: "",
      batches: [],
      address: "",
      city: "",
      pinCode: "",
    });
  };

  const inputClass =
    "w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none";

  const errorText = "text-red-600 text-sm mt-1";

  return (
    <div className="min-h-screen flex items-center justify-center p-7 bg-pink-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-xl mt-20 p-8 space-y-10 mb-20"
      >
        <h1 className="text-3xl font-bold text-center">Student Registration</h1>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label>Full Name *</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.fullName && (
                <p className={errorText}>{errors.fullName}</p>
              )}
            </div>

            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && <p className={errorText}>{errors.email}</p>}
            </div>

            <div>
              <label>Mobile Number *</label>
              <input
                type="number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.mobileNumber && (
                <p className={errorText}>{errors.mobileNumber}</p>
              )}
            </div>

            <div>
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.dateOfBirth && (
                <p className={errorText}>{errors.dateOfBirth}</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Academic Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label>Qualification *</label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">-- Select --</option>
                <option value="Schooling">Schooling</option>
                <option value="College">College</option>
              </select>
              {errors.qualification && (
                <p className={errorText}>{errors.qualification}</p>
              )}
            </div>

            <div>
              <label>Percent / Grade *</label>
              <input
                name="percentGrade"
                value={formData.percentGrade}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.percentGrade && (
                <p className={errorText}>{errors.percentGrade}</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Course Information
          </h2>

          <div className="space-y-6">
            <div>
              <label>Course *</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">-- Select --</option>
                <option>Full Stack Development</option>
                <option>Data Science</option>
                <option>Data Analytics</option>
                <option>Java DSA</option>
                <option>Python</option>
              </select>
              {errors.course && <p className={errorText}>{errors.course}</p>}
            </div>

            <div>
              <label className="block mb-2">Preferred Batch *</label>
              <div className="flex flex-wrap gap-6">
                {["Morning", "Afternoon", "Evening", "Weekend"].map((batch) => (
                  <label key={batch} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={batch}
                      checked={formData.batches.includes(batch)}
                      onChange={handleBatchChange}
                      className="accent-pink-500"
                    />
                    {batch}
                  </label>
                ))}
              </div>
              {errors.batches && <p className={errorText}>{errors.batches}</p>}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">Address</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <textarea
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.address && <p className={errorText}>{errors.address}</p>}
            </div>

            <div>
              <input
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.city && <p className={errorText}>{errors.city}</p>}
            </div>

            <div>
              <input
                placeholder="Pin Code"
                type="number"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.pinCode && <p className={errorText}>{errors.pinCode}</p>}
            </div>
          </div>
        </section>

        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-600 text-white px-10 py-3 rounded-xl font-semibold hover:bg-pink-700 hover:cursor-pointer"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
