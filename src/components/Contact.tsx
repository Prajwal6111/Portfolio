import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = ({ theme }: { theme: string }) => (
  <div id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
    <p className="text-lg text-center mb-10">Feel free to reach out to me through any of the following channels:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
      {/* Contact Cards */}
      {[
        {
          Icon: FaEnvelope,
          value: 'prajwalmh2023@gmail.com',
          href: 'mailto:prajwalmh2023@gmail.com',
          color: theme === 'dark' ? 'text-blue-300' : 'text-blue-500',
        },
        {
          Icon: FaPhone,
          value: '+91 7411156449',
          href: 'tel:+917411156449',
          color: theme === 'dark' ? 'text-green-300' : 'text-green-500',
        },
        {
          Icon: FaLinkedin,
          value: 'LinkedIn Profile',
          href: 'https://www.linkedin.com/in/prajwal-m-hiremath',
          color: theme === 'dark' ? 'text-blue-500' : 'text-blue-600',
        },
        {
          Icon: FaGithub,
          value: 'GitHub Profile',
          href: 'https://github.com/Prajwal6111',
          color: theme === 'dark' ? 'text-gray-300' : 'text-gray-800',
        },
      ].map((contact, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 w-full sm:w-auto rounded-lg shadow-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-80"
        >
          <div
            className={`flex items-center justify-center p-3 rounded-full mb-4 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          >
            <contact.Icon className={`text-3xl ${contact.color}`} />
          </div>
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-center hover:underline"
          >
            {contact.value}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Contact;
