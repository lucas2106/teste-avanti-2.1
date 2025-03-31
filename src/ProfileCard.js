import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full text-center">
      <img src={profile.avatar_url} alt={`${profile.login} Avatar`} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{profile.name || 'Nome não disponível'}</h2>
      <p className="text-gray-600 mb-4">{profile.bio || 'Sem biografia'}</p>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600"
      >
        Ver no GitHub
      </a>
      <div className="mt-4 text-gray-500">
        <p>Seguidores: {profile.followers}</p>
        <p>Seguindo: {profile.following}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
