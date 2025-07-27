import React, { useState } from 'react';
import axios from 'axios'; // Es más fácil para peticiones POST

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: username,
                password: password
            });

            // Guardar los tokens en el almacenamiento local
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            
            // Redirigir al usuario al panel de control
            // window.location.href = '/dashboard'; // O usar un router de React

            alert('¡Inicio de sesión exitoso!');

        } catch (err) {
            setError('Usuario o contraseña incorrectos.');
            console.error('Error de inicio de sesión:', err);
        }
    };

    return (
        <div className="container mx-auto p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Usuario</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-full">
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default LoginPage;