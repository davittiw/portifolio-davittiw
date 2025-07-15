import React from 'react';
import { Github, Linkedin, Music, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SocialLinks = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/davttiw/',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/davittiw',
      color: '#7e22ce'
    },
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/user/31v33eh74fvdrwauj6fpizhvcj3u?si=f78db6e846db4799',
      color: '#1DB954'
    }
  ];

  return (
    <div className="w-80 sm:w-90 md:w-120 lg:w-120 max-w-2xl mx-auto mt-12">
      <div className="text-left mb-8 text-gray-200">
        <h3 className="text-2xl font-bold mb-2">
          {t('Social.local')}
        </h3>
        <p className="text-muted-foreground">
          {t('Social.description')}
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 justify-center">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target='_blank'
                                className="border border-white/20 text-gray-300 rounded-lg items-center justify-center flex h-10 p-2 gap-2 transition-colors duration-200 cursor-pointer animate-pulse hover:bg-gray-800 hover:border-gray-600 hover:text-white"
                                style={{
                                    borderColor: undefined,
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = social.color;
                                    e.currentTarget.style.color = social.color;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '';
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                <Icon size={20} style={{ color: 'inherit' }} className="transition-colors duration-200" />
                                <span className="transition-colors duration-200">{social.name}</span>
                            </a>
                        );
                    })}
                </div>
    </div>
  );
};

export default SocialLinks;