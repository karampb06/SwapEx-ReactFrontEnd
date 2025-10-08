import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import styles from './signup_page.module.css';
import '../index.css'; // Import global styles

export const SignupPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        studentIdImage: null,
        phone: '',
    });
    const [preview, setPreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, studentIdImage: file });
        setPreview(file ? URL.createObjectURL(file) : null);
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Invalid email";
        if (!form.studentIdImage) newErrors.studentIdImage = "Student ID image required";
        if (!form.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number";
        if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            setSuccess('');
            try {
                // Prepare form data for file upload
                const formData = new FormData();
                formData.append('full_name', form.name);
                formData.append('email', form.email);
                formData.append('password', form.password);
                formData.append('phone_number', form.phone);
                formData.append('student_id_image', form.studentIdImage);

                // Replace with your backend API endpoint
                const response = await axios.post('http://localhost:8000/signup/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                setSuccess('Signup successful!');
                setForm({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    studentIdImage: null,
                    phone: '',
                });
                setPreview(null);
            } catch (error) {
                console.log(error.response);
                setErrors({ api: error.response?.data?.message || 'Signup failed. Please try again.' });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h2 className={styles.heading}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label>Student ID (Upload Image)</label>
                    <input
                        type="file"
                        name="studentIdImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className={styles.input}
                    />
                    {preview && (
                        <img src={preview} alt="Student ID Preview" className={styles.previewImg} />
                    )}
                    {errors.studentIdImage && <span style={{color: 'red'}}>{errors.studentIdImage}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.phone && <span style={{color: 'red'}}>{errors.phone}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
                </div>
                {errors.api && <div style={{color: 'red', marginBottom: 8}}>{errors.api}</div>}
                {success && <div style={{color: 'green', marginBottom: 8}}>{success}</div>}
                <div className={styles.formGroup}>
                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    );
};

