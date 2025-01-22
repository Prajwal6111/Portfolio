const Experience = ({ theme }: { theme: string }) => (
  <div id="experience" className={`py-20 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
    <div className="mt-8 space-y-6 max-w-4xl mx-auto">
      
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Onity Group Inc (Financial Services)</h3>
            <h4 className="text-lg italic font-medium mb-2 md:mb-0">Data Management Intern</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-left">
            <p className="md:text-right">Aug 2024 - Present</p>
            <p className="md:text-right">Bengaluru</p>
          </div>
        </div>
        <div className="space-y-2 text-justify">
          <p>Building scalable ELT data pipelines for financial data using dbt, Snowflake, and Apache Airflow</p>
          <p>Supporting critical business operations building dbt models using SQL CTE</p>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Zintellix (AI Start-Up)</h3>
            <h4 className="text-lg italic font-medium mb-2 md:mb-0">Data Engineer Intern</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-left">
            <p className="md:text-right">Jul 2024</p>
            <p className="md:text-right">Bengaluru</p>
          </div>
        </div>
        <p className="text-justify">Developed a prototype API for user interaction data using Google Analytics, optimizing data feeds to train AI models.</p>
        <p>Documented various No-code and Low-code Data Engineering tools.</p>
      </div>

      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Pluralsight</h3>
            <h4 className="text-lg italic font-medium mb-2 md:mb-0">Data Engineer Intern</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-left">
            <p className="md:text-right">Jan 2024 - Jun 2024</p>
            <p className="md:text-right">Bengaluru</p>
          </div>
        </div>
        <p className="text-justify">Built dbt models for client Accenture, integrating failure alerts for monitoring. Created fact and dimensional models using dbt based on Medallion Architecture and managed data pipelines from Kafka to Snowflake.</p>
      </div>

      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Salesforce</h3>
            <h4 className="text-lg italic font-medium mb-2 md:mb-0">API Development Intern</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-left">
            <p className="md:text-right">Oct 2023 - Nov 2023</p>
            <p className="md:text-right">Bengaluru</p>
          </div>
        </div>
        <p className="text-justify">Built APIs for aviation-related data using Mulesoft and RAML, with end-to-end deployment to Cloudhub.</p>
      </div>

      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <h3 className="text-2xl font-semibold mb-4">Achievements/Volunteer</h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-6">
          <div>
            <a href="https://ieeexplore.ieee.org/document/10543814" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
              International Conference on Emerging Technologies in Computer Science - 2024
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0 md:text-left">
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-6">
          <div>
            <a href="https://drive.google.com/file/d/1-YpaRITChOX7aDoVYmMWipPcdcFtH_4a/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
              State Level Project Exhibition on Machine Learning at PROTOTVA-2024
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0 md:text-left">

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-6">
          <div>
            <a href="https://drive.google.com/file/d/1Qx0NlWFzeUEuQORLCs9ek-DBHcEyCHoy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
            Volunteer at NGO (AVISA Charitable Trust)
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0 md:text-left">
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-6">
          <div>
            <a href="https://archive.chess-results.com/tnr178154.aspx?lan=1&art=9&fed=IND&snr=42" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
            Karnataka Under 16 State Chess Championship
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0 md:text-left">
          </div>
        </div>
        
      </div>
    </div>
  </div>
);

export default Experience;
