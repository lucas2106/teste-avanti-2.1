import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);
    } catch (err) {
      setProfileData(null);
      setError('Perfil não encontrado!');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
    fetchProfile(searchTerm);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Buscar Perfil do GitHub</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {profileData && <ProfileCard profile={profileData} />}
    </div>
  );
};

export default App;
